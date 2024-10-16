<?php
// Connect to your database
$conn = new mysqli();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);   

}


$currentUsername = $_SESSION['username'];


$sql = "SELECT title, issued_by FROM books";
$result = $conn->query($sql);


$books = array();
while ($row = $result->fetch_assoc()) {
    $books[] = $row;
}


$filteredBooks = array_filter($books, function($book) use ($currentUsername) {
    return $book['issued_by'] !== $currentUsername;
});

echo json_encode($filteredBooks);

$conn->close();
?>