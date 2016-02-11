<?
session_start();
header("Content-Type: text/html; charset=utf8"); 
include_once "../option/create_cfg.php";

if(!filter_var($_POST['regemail'], FILTER_VALIDATE_EMAIL)) exit('Invalid e-mail, you enter: '.$_POST['regemail'].'<br>Return input in form: mail@site.domain');

strleninput($_POST['regname'],'<span class="err">Incorrectly entered the necessary characters: <br>Name [5-22], Return input Name</span>',5,22);
strleninput($_POST['regpass'],'<span class="err">Incorrectly entered the necessary characters: <br>Password [5-36], Return input Password</span>',5,36);
strleninput($_POST['regemail'],'<span class="err">Incorrectly entered the necessary characters: <br>E-mail [5-34], Return input Email</span>',5,35);


if (isset($_POST['regname'])) { $login = $_POST['regname']; if ($login == '') { unset($login);} }
if (isset($_POST['regpass'])) { $password=$_POST['regpass']; if ($password =='') { unset($password);} }
if (isset($_POST['regemail'])) { $email=$_POST['regemail']; if ($email =='') { unset($email);} }

if (empty($login) or empty($password) or empty($email)) {
	echo'<span class="err">You do not have entered all the information<br>';
	exit('error : reg_form</span>');
}

$login = stripslashes($login); $login = htmlspecialchars($login);
$password = stripslashes($password); $password = htmlspecialchars($password); 
$login = trim($login);
$password = trim($password);

$myrow = $quer->fquery("SELECT * FROM g_user_re WHERE name='$login'");

if (!empty($myrow['email']) AND !empty($myrow['name'])) {
	echo '<span class="err">Username you entered is already registered. Please enter a different username.<br>';
	exit('error : reg_form_incorrect</span>');
}else {
	$f2 = $quer->query("INSERT INTO g_user_re (name,email,pass) VALUES('$login','$email','$password')");
}
if($f2 == 'TRUE') {
	$s = $quer->fquery("SELECT * FROM test WHERE date='reguser'");
	$g = $s['poset']+1;
	$quer->query("UPDATE `test` SET `poset`='$g' WHERE `date`='reguser'");
	echo 'You have successfully logged in! Now you can log in to the site. <br>';
	exit('click Login button');
} else {
	echo '<span class="err">Try to enter the data again<br>';
	exit('error : return_input</span>');
}
mysql_close();
?>