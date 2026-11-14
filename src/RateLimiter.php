<?php

declare(strict_types=1);

/**
 * Simple file-based rate limiter for shared hosting (no Redis required).
 * Fails open if storage is unavailable so contact submissions keep working.
 */
final class RateLimiter
{
    public function __construct(
        private readonly string $storageDir,
        private readonly int $maxAttempts,
        private readonly int $windowSeconds,
    ) {
    }

    public function tooManyAttempts(string $key): bool
    {
        $max = max(1, $this->maxAttempts);
        $window = max(1, $this->windowSeconds);

        try {
            if (!$this->ensureStorage()) {
                return false;
            }

            $path = $this->pathFor($key);
            $now = time();
            $windowStart = $now - $window;
            $hits = [];

            if (is_file($path)) {
                $raw = file_get_contents($path);
                $decoded = is_string($raw) ? json_decode($raw, true) : null;
                if (is_array($decoded)) {
                    foreach ($decoded as $ts) {
                        if (is_numeric($ts)) {
                            $t = (int) $ts;
                            if ($t >= $windowStart) {
                                $hits[] = $t;
                            }
                        }
                    }
                }
            }

            if (count($hits) >= $max) {
                return true;
            }

            $hits[] = $now;
            @file_put_contents($path, json_encode($hits), LOCK_EX);

            return false;
        } catch (Throwable) {
            return false;
        }
    }

    private function ensureStorage(): bool
    {
        if (is_dir($this->storageDir)) {
            return is_writable($this->storageDir);
        }

        return @mkdir($this->storageDir, 0755, true) || is_dir($this->storageDir);
    }

    private function pathFor(string $key): string
    {
        return $this->storageDir . DIRECTORY_SEPARATOR . hash('sha256', $key) . '.json';
    }
}
