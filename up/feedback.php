<?
session_start();
header("Content-Type: text/html; charset=utf8"); 
include_once "../option/create_cfg.php";
if(!filter_var($_POST['email_f'], FILTER_VALIDATE_EMAIL)) exit('<span style="color:white">Invalid e-mail</span>');

if (isset($_POST['email_f'])) { $email=$_POST['email_f']; if ($email =='') { unset($email);} }
if (isset($_POST['text_f'])) { $text=$_POST['text_f']; if ($text =='') { unset($text);} }
// проверку на такие же данные
if (empty($text) or empty($email)) {
	exit('<span style="color:white">Fill the fields</span>');
}

$subject = 'FEKOZ, User('.$email.') SAY';
$message = 'hi, fekoz. User email:'.$email.''  . "\r\n" .
	'Say: '.$text.' ' . "\r\n" . 
	'SAY YOU? READ THIS TEXT, FEKOZ!' . "\r\n" . 'read^';

mail('admin@fjo-team.pw', $subject, $message);

$f2 = $quer->query("INSERT INTO feedback (email,text) VALUES('$email','$text')");
if($f2 == 'TRUE') {
	exit('<span style="color:white">Thank you for feedback</span>');
} else {
	exit('<span style="color:white">Return input</span>');
}
mysql_close();
?>