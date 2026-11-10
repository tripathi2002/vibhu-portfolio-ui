<?php

declare(strict_types=1);

final class ContactService
{
    public function __construct(private readonly array $config)
    {
    }

    /**
     * @return array{ok: bool, errors?: array<string, string>, message?: string}
     */
    public function handle(array $input): array
    {
        $data = [
            'firstName' => $this->clean($input['firstName'] ?? ''),
            'lastName' => $this->clean($input['lastName'] ?? ''),
            'mobile' => $this->clean($input['mobile'] ?? ''),
            'email' => $this->clean($input['email'] ?? ''),
            'message' => $this->clean($input['message'] ?? ''),
        ];

        $errors = $this->validate($data);
        if ($errors !== []) {
            return ['ok' => false, 'errors' => $errors];
        }

        $sent = $this->sendMail($data);
        if (!$sent) {
            return [
                'ok' => false,
                'message' => 'Unable to send your message right now. Please try again or email me directly.',
            ];
        }

        return [
            'ok' => true,
            'message' => 'Thanks for reaching out. I will get back to you soon.',
        ];
    }

    private function clean(mixed $value): string
    {
        if (!is_string($value)) {
            return '';
        }

        return trim(strip_tags($value));
    }

    /**
     * @param array{firstName: string, lastName: string, mobile: string, email: string, message: string} $data
     * @return array<string, string>
     */
    private function validate(array $data): array
    {
        $errors = [];

        if ($data['firstName'] === '' || mb_strlen($data['firstName']) > 100) {
            $errors['firstName'] = 'First name is required.';
        }

        if ($data['lastName'] === '' || mb_strlen($data['lastName']) > 100) {
            $errors['lastName'] = 'Last name is required.';
        }

        if ($data['email'] === '' || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'A valid email is required.';
        }

        if ($data['message'] === '' || mb_strlen($data['message']) > 5000) {
            $errors['message'] = 'Message is required.';
        }

        if ($data['mobile'] !== '' && !preg_match('/^[0-9+\-\s()]{7,20}$/', $data['mobile'])) {
            $errors['mobile'] = 'Enter a valid mobile number.';
        }

        return $errors;
    }

    /**
     * @param array{firstName: string, lastName: string, mobile: string, email: string, message: string} $data
     */
    private function sendMail(array $data): bool
    {
        $to = (string) ($this->config['recipient_email'] ?? '');
        $fromEmail = (string) ($this->config['from_email'] ?? 'noreply@vibhu.pro');
        $fromName = (string) ($this->config['from_name'] ?? 'Portfolio Contact');

        if ($to === '' || !filter_var($to, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        $subject = sprintf(
            'Portfolio contact from %s %s',
            $data['firstName'],
            $data['lastName']
        );

        $lines = [
            'New contact form submission from vibhu.pro',
            '',
            'Name: ' . $data['firstName'] . ' ' . $data['lastName'],
            'Email: ' . $data['email'],
            'Mobile: ' . ($data['mobile'] !== '' ? $data['mobile'] : '—'),
            '',
            'Message:',
            $data['message'],
            '',
            'Sent at: ' . gmdate('Y-m-d H:i:s') . ' UTC',
        ];

        $body = implode("\r\n", $lines);
        $encodedFromName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';

        $headers = [
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'From: ' . $encodedFromName . ' <' . $fromEmail . '>',
            'Reply-To: ' . $data['email'],
            'X-Mailer: PHP/' . PHP_VERSION,
        ];

        return mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));
    }
}
