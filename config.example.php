<?php

/**
 * Copy this file to config.php on the server and fill in real values.
 * config.php is gitignored and excluded from FTP deploy so Hostinger settings stay intact.
 *
 * Hostinger: hPanel → Databases → MySQL Databases
 * Use a DB user with INSERT (and SELECT if needed) only — not CREATE.
 * Run sql/schema.sql once in phpMyAdmin before going live.
 *
 * Local Angular: add http://localhost:4200 to allowed_origins in your local config.php only.
 */
return [
    'db' => [
        'host' => 'localhost',
        'port' => '3306',
        'name' => 'YOUR_DB_NAME',
        'user' => 'YOUR_DB_USER',
        'pass' => 'YOUR_DB_PASSWORD',
        'charset' => 'utf8mb4',
    ],
    'allowed_origins' => [
        'https://vibhu.pro',
        'https://www.vibhu.pro',
    ],
    'rate_limit' => [
        'max_attempts' => 8,
        'window_seconds' => 600,
    ],
];
