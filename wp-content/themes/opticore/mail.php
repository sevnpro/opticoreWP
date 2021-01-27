<?php

$email = $_POST['email'];
$to = "info@opticore.online";
$subject = "Send message Opticore Newletter";
$txt = "
Email: " . $email . "";
$headers = "From:  noreply@opticore.online";
mail($to, $subject, $txt, $headers);
print_r('send');
