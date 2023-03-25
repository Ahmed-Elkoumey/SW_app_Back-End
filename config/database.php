<?php


require_once('config.php');

class DataBase
{
    protected $conn;

    public function __construct()
    {
        $dataBase = new mysqli(HOST,USER,PASSWORD,DBNAME);
        if ($dataBase) {

            $this->conn = $dataBase;
            
        }else {
            echo "ERROR";
        }

    }
}