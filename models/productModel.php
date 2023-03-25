<?php
require_once('config/database.php');
abstract class ProductModel extends Database
{
    abstract public function get();
    abstract public function add( $sku,$name ,$price, $attributes, $category);
    abstract public function delete($sku);
}