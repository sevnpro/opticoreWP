<?php

$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$to = "info@opticore.online";
$subject = "Send message Opticore";
$txt = "
Name: " . $name . "
Email: " . $email . "
Phone: " . $phone . "
";
$headers = "From:  noreply@opticore.online";
mail($to, $subject, $txt, $headers);
print_r('send');
