<?php
session_start();

require_once('./lib/lib_db.php');

$pdo = new Conexao;
$conn = $pdo->conectar();
$sql = 'SELECT DISTINCT nivel FROM tasks';
$data = $pdo->listar($conn, $sql);
foreach ($data as $key => $value) {
    $nivel = $value['0'];
    print_r('nivel: ' . $nivel);
    $sql = "SELECT COUNT(nivel)
            FROM tasks
            WHERE nivel = $nivel";
    $qtd = $pdo->listar($conn, $sql);
    echo '<pre>';
    print_r('qtd: '.$qtd[0][0]);
    echo '</pre>';
    $new_data[$nivel] = $qtd[0][0];
}
echo '<pre>';
    print_r($new_data);
echo '</pre>';