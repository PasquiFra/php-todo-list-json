<?php
header('Content-Type: application/json');

$source_path = __DIR__ . '\..\data\tasks.json';

$json_data = file_get_contents($source_path);

$tasks = $json_data;

$tasks = json_decode($tasks, true);

$result = $_POST['task'] ?? '';

if($result){

    $new_task = [
    "id"=> count($tasks) + 1,
    "text"=> $result,
    "done"=> false
    ];
    
    $tasks[] = $new_task;
    
    $tasks = json_encode($tasks);

    file_put_contents($source_path, $tasks);
}
    



header('Content-Type: application/json');

echo json_encode($tasks);

?>