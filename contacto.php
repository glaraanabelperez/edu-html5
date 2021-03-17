<?php

$usuario=$_POST['usuario'];
$email=$_POST['email'];
$mensaje=$_POST['mensaje'];

$body = "Usuario: $usuario\nEmail: $email\nMensaje: $mensaje";

$destinatario = "glaraanabelperez@gmail.com";
$asunto = "Nuevo contacto de la Web";
$headers = "From: Garcia Lara<glaraanabelperez@gmail.com>\r\n";//aca va la direccion desde donde enviamos el servidor ...php mailer

mail($destinatario, $asunto, utf8_decode($body), $headers);

echo 'mensaje enviado correctamente';

?>