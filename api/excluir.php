<?php
session_start();

require_once('./lib/lib_db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_POST = json_decode(file_get_contents("php://input"), true);
    $sql = 'DELETE FROM Tasks
            WHERE nome = :nome';
    $exec_array = array(
        ':nome' => $_POST['nome'],
    );
    try {
        $pdo = new Conexao;
        $conn = $pdo->conectar();
        $pdo->excluir($conn, $sql, $exec_array);
    } catch (Exception $e) {
        $response = [
            'message' => 'Erro,'.$e->getCode().', entre em contato com os administradores',
        ];
    }
    $response = $_POST['nome'];
}

echo(json_encode($response));

exit();

    //$sql = "DELETE FROM Tasks
    //        WHERE nome = $nome";
    // $exec_array = array(
    //     ':nome' => $_GET['nome'],
    // );
    // try {
    //     $pdo = new Conexao;
    //     $conn = $pdo->conectar();
    //     $pdo->excluir($conn, $sql, NULL);
    //     $response = [
    //         'message' => $_GET['nome'] . ' removido com sucesso!',
    //     ];
    // } catch (Exception $e) {
    //     $response = [
    //         'message' => 'Erro,'.$e->getCode().', entre em contato com os administradores',
    //     ];
    // }
