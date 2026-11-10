<?php

/**
 * Copy this file to config.php on the server and fill in real values.
 * config.php is gitignored and excluded from FTP deploy so Hostinger settings stay intact.
 *
 * Hostinger: hPanel → Databases → MySQL Databases
 * Use the created DB name / user / password below.
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
        'http://localhost:4200',
        'https://localhost:4200',
        'https://vibhu.pro',
        'http://vibhu.pro',
        'https://www.vibhu.pro',
        'http://www.vibhu.pro',
    ],
];
