<?php

require_once('./FileController.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $fc = new FileController($_FILES['file']);

    header("Content-Type: application/json");
    echo json_encode($fc->$result);
    exit();
}