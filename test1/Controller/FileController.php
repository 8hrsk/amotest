<?php

class FileController {
    public function __construct($File) {
        if (substr($File['name'], -4) !== '.txt') {
            return $this->$result = ['result' => 'false', 'message' => 'Wrong file type']; // Если файл не .txt, шлем ошибку
        } 

        $this->$fileName = substr($File['name'], 0, strrpos($File['name'], '.')) . '_' . time() . '.txt'; // Создаем уникальное имя файла и запоминаем его
        move_uploaded_file($File['tmp_name'], '../files/' . $this->$fileName); // Сохраняем файл из временного хранилища

        if ($this->read($this->fileName) === false) {
            return $this->$result = ['result' => 'false', 'message' => 'Error on reading file']; // Отрабатываем ошибку, если что-то пошло не так
        }

        return $this->$result = ['result' => 'true', 'message' => 'File uploaded successfully', 'content' => $this->read()];
    }

    private function read() {
        return file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/files/' . $this->$fileName, true); // Возвращаем содержиоме файла
    }
}