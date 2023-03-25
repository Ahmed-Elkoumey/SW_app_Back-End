<?php
require_once($_SERVER['DOCUMENT_ROOT'] .'/s-w_api/models/productModel.php');

class ProductsController extends ProductModel
{


    public function get()
    {

        $stmt = $this->conn->prepare("SELECT * FROM `products`");


        $stmt->execute();

        $result = $stmt->get_result();


        $rows = [];

        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }

        return $rows;
    }

    public function add($sku, $name, $price, $attributes, $category)
    {
        $stmt = $this->conn->prepare("INSERT INTO `products` (`sku`, `name`, `price`, `attributes`, `category`) VALUES (?, ?, ?, ?, ?)");

        $stmt->bind_param("sssss", $sku, $name, $price, $attributes, $category);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }


    public function delete($sku)
    {
        $stmt = $this->conn->prepare("DELETE FROM `products` WHERE `sku` = ? ;");

        $stmt->bind_param("s", $sku);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
