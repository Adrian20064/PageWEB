<?php
//header
header("Content-Type: application/json");

//mongo connection
$mongo_connection = new MongoDB\Driver\Manager("mongodb://54.242.54.105:27017");

//data and get city from request
$data = json_decode(file_get_contents("php://input"), true);
$city = $data['city'] ?? null;

//validation city
if (!$city) {
    echo json_encode(['success' => false, 'message' => 'No city provided']);
    exit;
}

//insert city into mongo
$inserting = new MongoDB\Driver\BulkWrite;
$inserting->insert(['name' => $city]);

//save in mongo with try catch
try {
$mongo_connection->executeBulkWrite('cities.collection', $inserting);
echo json_encode(['success' => true, 'message' => "City stored: $city"]);
} catch (Exception $e) {
echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}

?>
