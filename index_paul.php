


<?php 
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');
?>


<?php 
require_once('admin/config.php'); 
?>

<?php 
$selectPosts = @mysql_query("SELECT * FROM posts ORDER BY postTitle ASC"); /// selecting all posts from mysql database
//// showing mysql data

$result = array();

while($showpost = @mysql_fetch_array($selectPosts)){

$urlImage = $showpost['fileName'];
$postTitle = $showpost['postTitle'];
$postDetail = $showpost['postDetail'];
$twitter = $showpost['twitter'];
$linkedIn = $showpost['linkedIn'];
$website = $showpost['webLink'];

array_push($result, $urlImage);
array_push($result, $postTitle);
array_push($result, $postDetail);
array_push($result, $twitter);
array_push($result, $linkedIn);
array_push($result, $website);


}
?>

<?php

echo json_encode($result);

?>