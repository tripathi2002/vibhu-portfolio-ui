<?php

declare(strict_types=1);

require_once __DIR__ . '/src/Response.php';
require_once __DIR__ . '/src/Cors.php';
require_once __DIR__ . '/src/Database.php';
require_once __DIR__ . '/src/RateLimiter.php';
require_once __DIR__ . '/src/ContactService.php';

$configFile = is_file(__DIR__ . '/config.php')
    ? __DIR__ . '/config.php'
    : __DIR__ . '/config.example.php';

/** @var array $config */
$config = require $configFile;

Cors::apply($config['allowed_origins'] ?? []);

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    Response::json([
        'ok' => true,
        'service' => 'portfolio-contact-api',
        'storage' => 'mysql',
        'message' => 'Contact API is online. POST JSON (firstName, lastName, email, message) to store a row in contact_messages.',
    ], 200);
}

if ($method !== 'POST') {
    Response::json([
        'ok' => false,
        'message' => 'Method not allowed. Use POST.',
    ], 405);
}

$raw = file_get_contents('php://input') ?: '';
$payload = json_decode($raw, true);

if (!is_array($payload) || $payload === []) {
    Response::json([
        'ok' => false,
        'message' => 'Invalid JSON body.',
    ], 400);
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate = $config['rate_limit'] ?? [];
$maxAttempts = (int) ($rate['max_attempts'] ?? 8);
$windowSeconds = (int) ($rate['window_seconds'] ?? 600);
$storageDir = __DIR__ . '/storage/rate-limit';

$limiter = new RateLimiter($storageDir, $maxAttempts, $windowSeconds);
if ($limiter->tooManyAttempts('contact:' . $ip)) {
    Response::json([
        'ok' => false,
        'message' => 'Too many requests. Please try again later.',
    ], 429);
}

$service = new ContactService($config);
$result = $service->handle($payload);

if (!($result['ok'] ?? false)) {
    if (isset($result['errors'])) {
        $result['message'] = $result['message'] ?? 'Please fix the highlighted fields.';
        Response::json($result, 422);
    }

    Response::json($result, 500);
}

Response::json($result, 200);
