<?php

use JetBrains\PhpStorm\ExpectedValues;

class Conexao {
    private $hostname = 'localhost';
    private $database = 'projetotarefas';
    private $username = 'root';
    private $password = 'root';

    public function conectar() {
        try {
            $conexao = new PDO(
                "mysql:host=$this->hostname;dbname=$this->database",
                "$this->username",
                "$this->password"
            );
            return $conexao;
        } catch(PDOException $e) {
            echo '<p>'.$e->getMessage().'</p>';
        } catch(Exception $e) {
            echo '<p>'.$e->getMessage().'</p>';
        }
    }

    public function inserir($conexao, $query, $execute_array = null) {
        try {
            $stmt = $conexao->prepare($query);
            $stmt->execute($execute_array);
        } catch (PDOException $e) {
            return [
                'message' => 'Task já existe na tabela, coloque um nome diferente',
            ];
        } catch (Exception $e) {
            return [
                'message' => 'Task já existe na tabela, coloque um nome diferente',
            ];
        }
    }

    public function listar($conexao, $query) {
        try {
            $stmt = $conexao->prepare($query);
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        } catch (PDOException $e) {
            return [
                'message' => $e->getCode(),
            ];
        } catch (Exception $e) {
            return [
                'message' => $e->getCode(),
            ];
        }
    }

    public function excluir($conexao, $query, $execute_array) {
        try {
            $stmt = $conexao->prepare($query);
            $stmt->execute($execute_array);
        } catch (PDOException $e) {
            return [
                'message' => $e->getCode(),
            ];
        } catch (Exception $e) {
            return [
                'message' => $e->getCode(),
            ];
        }
    }
}