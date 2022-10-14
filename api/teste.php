<?php
session_start();

require_once('./lib/lib_db.php');

$pdo = new Conexao;
$conn = $pdo->conectar();
$sql = 'DELETE FROM Tasks
        WHERE Id = 25';
$data = $pdo->listar($conn, $sql);
echo '<pre>';
    print_r($data);
echo '</pre>';