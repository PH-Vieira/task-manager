<?php
session_start();

require_once('./lib/lib_db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_POST = json_decode(file_get_contents("php://input"), true);
    $sql = 'INSERT INTO Tasks (Nome, Descricao, Nivel)
            VALUES
                (:nome,
                :desc,
                :nivel)';
    $exec_array = array(
        ':nome' => $_POST['taskName'],
        ':desc' => $_POST['taskDesc'],
        ':nivel' => $_POST['taskLevel']
    );
    try {
        $pdo = new Conexao;
        $conn = $pdo->conectar();
        $response = $pdo->inserir($conn, $sql, $exec_array);
        if(!$response) {
            $response = [
                'message' => $_POST['taskName'] . ' inserido com sucesso!',
            ];
        }
    } catch (Exception $e) {
        $response = [
            'message' => 'Erro,'.$e->getCode().', entre em contato com os administradores',
        ];
    }
}

echo(json_encode($response));

exit();
