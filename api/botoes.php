<?php
session_start();

require_once('./lib/lib_db.php');

$pdo = new Conexao;
$conn = $pdo->conectar();

if( $_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $query = 'SELECT nome, url FROM sidebar_botoes';
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_NUM);
    } catch (Exception $e) {
        echo $e;
    }
}

foreach ($data as $key => $value) {
    $data[$key][1] = 'http://localhost/projeto%20organizacao/app/src/assets/'.$data[$key][1];
}

// echo '<hr>';
// echo '<pre>';
// print_r($data);
// echo '</pre>';

// echo '<hr>';
echo(json_encode($data));

exit();