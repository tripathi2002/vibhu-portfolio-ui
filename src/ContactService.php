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
    private function store(array $data): int
    {
        $pdo = Database::connection($this->config);
        Database::ensureContactTable($pdo);

        $stmt = $pdo->prepare(
            'INSERT INTO contact_messages
                (first_name, last_name, email, mobile, message, ip_address, user_agent)
             VALUES
                (:first_name, :last_name, :email, :mobile, :message, :ip_address, :user_agent)'
        );

        $mobile = $data['mobile'] !== '' ? $data['mobile'] : null;
        $ip = $this->clientIp();
        $ua = isset($_SERVER['HTTP_USER_AGENT'])
            ? mb_substr((string) $_SERVER['HTTP_USER_AGENT'], 0, 512)
            : null;

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
        $candidates = [
            $_SERVER['HTTP_CF_CONNECTING_IP'] ?? null,
            $_SERVER['HTTP_X_FORWARDED_FOR'] ?? null,
            $_SERVER['REMOTE_ADDR'] ?? null,
        ];

        foreach ($candidates as $value) {
            if (!is_string($value) || $value === '') {
                continue;
            }

            // X-Forwarded-For may be a list: client, proxy1, proxy2
            $ip = trim(explode(',', $value)[0]);
            if (filter_var($ip, FILTER_VALIDATE_IP)) {
                return $ip;
            }
        }

        return null;
    }
}
