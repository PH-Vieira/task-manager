<?php
session_start();

require_once('./lib/lib_db.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = 'SELECT DISTINCT nivel FROM tasks';
    try {
        $pdo = new Conexao;
        $conn = $pdo->conectar();
        $data = $pdo->listar($conn, $sql);
        foreach ($data as $key => $value) {
            $nivel = $value['0'];
            $sql = "SELECT COUNT(nivel)
            FROM tasks
            WHERE nivel = $nivel";
            $qtd = $pdo->listar($conn, $sql);
            $response[$nivel] = $qtd[0][0];
        }
    } catch (PDOException $e) {
        $response = [
            'message' => $e->getMessage(),
        ];
    } catch (Exception $e) {
        $response = [
            'message' => $e->getMessage(),
        ];
    }
}

echo (json_encode($response));

exit();