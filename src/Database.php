<?php

declare(strict_types=1);

final class Database
{
    private static ?PDO $pdo = null;

    public static function connection(array $config): PDO
    {
        if (self::$pdo instanceof PDO) {
            return self::$pdo;
        }

        $db = $config['db'] ?? null;
        if (!is_array($db)) {
            throw new RuntimeException('Database config missing. Set db.* in config.php.');
        }

        $host = (string) ($db['host'] ?? 'localhost');
        $port = (string) ($db['port'] ?? '3306');
        $name = (string) ($db['name'] ?? '');
        $user = (string) ($db['user'] ?? '');
        $pass = (string) ($db['pass'] ?? '');
        $charset = (string) ($db['charset'] ?? 'utf8mb4');

        if ($name === '' || $user === '') {
            throw new RuntimeException('Database name and user are required in config.php.');
        }

        $dsn = sprintf('mysql:host=%s;port=%s;dbname=%s;charset=%s', $host, $port, $name, $charset);

        self::$pdo = new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);

        return self::$pdo;
    }
}
