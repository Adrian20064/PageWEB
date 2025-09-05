<?php
//header
header("Content-Type: application/json");

//mongo connection
$mongo_connection = new MongoDB\Driver\Manager("mongodb://localhost:27017");

//data and get city from request
$data = json_decode(file_get_contents("php://input"), true);
$city = $data['city'];

//insert city into mongo
$inserting = new MongoDB\Driver\BulkWrite;
$inserting->insert(['name' => $city]);

//save in mongo

$mongo_connection->executeBulkWrite('cities.collection', $inserting);

//reponse
echo "city stored", $city
?>