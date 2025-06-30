<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');
    if ($name && $email && $message) {
        echo "Thank you, $name! Your message has been received.";
    } else {
        echo "Please fill in all fields.";
    }
} else {
    echo "Invalid request.";
} 