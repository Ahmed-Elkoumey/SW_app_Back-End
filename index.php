<?php

require_once("controllers/productContoller.php");


$url = explode("/", $_SERVER['QUERY_STRING']);


header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin');
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');

header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if ($url[0] === "api" && $url[1] === "v1") {

    // *******************************requests 
    $productController = new ProductsController();



    // read
    if ($url[2] === "get") {


        header('Access-Control-Allow-Methods: GET');
        $result = [
            'status' => 200,
            'allData' => $productController->get(),
        ];

        echo json_encode($result);
    }
    // read



    // *******************************



    // create

    if ($url[2] === "add") {

        header('Access-Control-Allow-Methods: POST');

        $postData = file_get_contents("php://input");

        $postArr = json_decode($postData, true);

        $postArr['attributes'] = json_encode($postArr['attributes']);



        $res = $productController->add($postArr['sku'], $postArr['name'], $postArr['price'], $postArr['attributes'], $postArr['category']);

        if ($res) {

            http_response_code(201);
            $result = [
                'status' => 201,
                'message' => "data updated succefully",
            ];
        } else {
            http_response_code(400);
            $result = [
                'status' => 400,
                'message' => "data didn't updated !!!",
            ];
        }


        echo json_encode($result);
    }

    // create



    // *******************************



    // delete
    if ($url[2] === "delete") {
        header('Access-Control-Allow-Methods: POST');



        $postData = file_get_contents("php://input");

        $postArray = json_decode($postData, true);

        // print_r($postData);die();

        $res = $productController->delete($postArray['sku']);

        if ($res) {

            http_response_code(201);
            $result = [
                'status' => 201,
                'message' => "data deleted succefully",
            ];
        } else {
            http_response_code(400);
            $result = [
                'status' => 400,
                'message' => "data didn't deleted !!!",
            ];
        }


        echo json_encode($result);
    }
    // delete



    // *******************************requests
} else {
    header('HTTP/1.0 404 Not Found');
}
