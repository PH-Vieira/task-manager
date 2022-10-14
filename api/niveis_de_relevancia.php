<?php
session_start();

require_once('./lib/lib_db.php');

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = 'SELECT a.task_nivel, a.descricao_nivel
            FROM tasks_niveis as a';
    try {
        $pdo = new Conexao;
        $conn = $pdo->conectar();
        $response = $pdo->listar($conn, $sql);
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