<?php
session_start();

require_once('./lib/lib_db.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $response = null;
    $sql = 'SELECT *
            FROM tasks as a
            INNER JOIN tasks_niveis as b
            ON a.nivel=b.task_nivel';
    try {
        $pdo = new Conexao;
        $conn = $pdo->conectar();
        $data = $pdo->listar($conn, $sql);
        foreach ($data as $key) {
            $response[] = $key;
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
