<?php

declare(strict_types=1);

require_once __DIR__ . '/src/Response.php';
require_once __DIR__ . '/src/Cors.php';
require_once __DIR__ . '/src/ContactService.php';

$configFile = is_file(__DIR__ . '/config.php')
    ? __DIR__ . '/config.php'
    : __DIR__ . '/config.example.php';

/** @var array $config */
$config = require $configFile;

Cors::apply($config['allowed_origins'] ?? []);

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    Response::json([
        'ok' => false,
        'message' => 'Method not allowed. Use POST.',
    ], 405);
}

$raw = file_get_contents('php://input') ?: '';
$payload = json_decode($raw, true);

if (!is_array($payload)) {
    // Support classic form posts as a fallback.
    $payload = $_POST;
}

if (!is_array($payload) || $payload === []) {
    Response::json([
        'ok' => false,
        'message' => 'Invalid JSON body.',
    ], 400);
}

$service = new ContactService($config);
$result = $service->handle($payload);

if (!($result['ok'] ?? false)) {
    $status = isset($result['errors']) ? 422 : 500;
    Response::json($result, $status);
}

Response::json($result, 200);
