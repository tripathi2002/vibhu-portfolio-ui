<?php

declare(strict_types=1);

final class ContactService
{
    public function __construct(private readonly array $config)
    {
    }

    /**
     * @return array{ok: bool, errors?: array<string, string>, message?: string, id?: int}
     */
    public function handle(array $input): array
    {
        // Honeypot: bots that fill hidden companyUrl are rejected without writing.
        $honeypot = $this->clean($input['companyUrl'] ?? '');
        if ($honeypot !== '') {
            return [
                'ok' => true,
                'message' => 'Thanks for reaching out. I will get back to you soon.',
            ];
        }

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

        try {
            $id = $this->store($data);
        } catch (Throwable $e) {
            error_log('[contact-api] ' . $e->getMessage());

            return [
                'ok' => false,
                'message' => 'Unable to save your message right now. Please try again later.',
            ];
        }

        return [
            'ok' => true,
            'id' => $id,
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

    private function length(string $value): int
    {
        return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
    }

    /**
     * @param array{firstName: string, lastName: string, mobile: string, email: string, message: string} $data
     * @return array<string, string>
     */
    private function validate(array $data): array
    {
        $errors = [];

        if ($data['firstName'] === '') {
            $errors['firstName'] = 'First name is required.';
        } elseif ($this->length($data['firstName']) > 100) {
            $errors['firstName'] = 'First name is too long.';
        }

        if ($data['lastName'] === '') {
            $errors['lastName'] = 'Last name is required.';
        } elseif ($this->length($data['lastName']) > 100) {
            $errors['lastName'] = 'Last name is too long.';
        }

        if ($data['email'] === '' || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'A valid email is required.';
        } elseif ($this->length($data['email']) > 255) {
            $errors['email'] = 'Email is too long.';
        }

        if ($data['message'] === '') {
            $errors['message'] = 'Message is required.';
        } elseif ($this->length($data['message']) > 5000) {
            $errors['message'] = 'Message is too long.';
        }

        if ($data['mobile'] !== '' && !preg_match('/^[0-9+\-\s()]{7,20}$/', $data['mobile'])) {
            $errors['mobile'] = 'Enter a valid mobile number.';
        }

        return $errors;
    }

    /**
     * @param array{firstName: string, lastName: string, mobile: string, email: string, message: string} $data
     */
    private function store(array $data): int
    {
        $pdo = Database::connection($this->config);

        $stmt = $pdo->prepare(
            'INSERT INTO contact_messages
                (first_name, last_name, email, mobile, message, ip_address, user_agent)
             VALUES
                (:first_name, :last_name, :email, :mobile, :message, :ip_address, :user_agent)'
        );

        $mobile = $data['mobile'] !== '' ? $data['mobile'] : null;
        $ip = $this->clientIp();
        $ua = null;
        if (isset($_SERVER['HTTP_USER_AGENT'])) {
            $rawUa = (string) $_SERVER['HTTP_USER_AGENT'];
            $ua = function_exists('mb_substr')
                ? mb_substr($rawUa, 0, 512)
                : substr($rawUa, 0, 512);
        }

        $stmt->execute([
            ':first_name' => $data['firstName'],
            ':last_name' => $data['lastName'],
            ':email' => $data['email'],
            ':mobile' => $mobile,
            ':message' => $data['message'],
            ':ip_address' => $ip,
            ':user_agent' => $ua,
        ]);

        return (int) $pdo->lastInsertId();
    }

    private function clientIp(): ?string
    {
        // Prefer REMOTE_ADDR; forwarded headers are spoofable without a trusted proxy.
        $remote = $_SERVER['REMOTE_ADDR'] ?? null;
        if (is_string($remote) && filter_var($remote, FILTER_VALIDATE_IP)) {
            return $remote;
        }

        return null;
    }
}
