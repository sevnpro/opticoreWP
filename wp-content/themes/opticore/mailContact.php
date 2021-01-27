<?php

$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$to = "dev@example.org";
$subject = "Send message Opticore";
$txt = "
Name: " . $name . "
Email: " . $email . "
Phone: " . $phone . "
";
$headers = "From:  dev@example.org" . "\r\n" .
    "CC:  dev@example.org";
mail($to, $subject, $txt, $headers);
print_r('send');
