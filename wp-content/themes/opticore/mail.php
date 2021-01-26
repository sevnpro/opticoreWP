<?php

$email = $_POST['email'];
$to = "dev@example.org";
$subject = "Send message Opticore";
$txt = "
Email: " . $email . "";
$headers = "From:  dev@example.org" . "\r\n" .
    "CC:  dev@example.org";
mail($to, $subject, $txt, $headers);
print_r('send');
