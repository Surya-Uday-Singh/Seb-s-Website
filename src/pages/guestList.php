<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
session_start();
$user = $_POST['name'];
$numG = $_POST['guests'];
$dtd = $_POST['date'];

echo '<td>'.$user.'</td><td>'.$numG.'</td><td>'.$dtd.'</td>';
?>
