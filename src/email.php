<?php

$post = json_decode(stripslashes(html_entity_decode($_POST['dataUser'])) , true);

$to = "contato@henriqueviana.com.br";
$subject = ($post['subject']) ? $post['subject'] : "Contato pelo site";

$post['name'] = (empty($post['name'])) ? 'More info' : $post['name'];

$headers = "MIME-Version: 1.1" . PHP_EOL;
$headers .= "Content-type: text/html; charset=iso-8859-1" . PHP_EOL;
$headers .= "From: " . $post['name'] . "<" . $post['email'] . ">" . PHP_EOL;
$headers .= "Return-Path: " . $to . PHP_EOL; 
$headers .= "Bcc: " . $to;

$message = ($post['phone']) ? "Telefone: " . $post['phone'] : '';
$message .= "\r\n" . $post['message'];

$send_email = mail($to, $subject , $message , $headers , "-f$to");

print json_encode($post);



