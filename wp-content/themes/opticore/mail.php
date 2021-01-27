<?php

$email = $_POST['email'];
$to = "hello@cosmos.studio";
$subject = "Send message Opticore";
$txt = "
Email: " . $email . "";
$headers = "From:  dev@example.org" . "\r\n" .
    "CC:  dev@example.org";
mail($to, $subject, $txt, $headers);
print_r('send');
