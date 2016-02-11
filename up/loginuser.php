<?
session_start();
header("Content-Type: text/html; charset=utf8"); 
include_once "../option/create_cfg.php";
	
if(isset($_POST['logname'])) { $login = $_POST['logname']; if ($login == '') { unset($login);} }
if(isset($_POST['logpass'])) { $password= $_POST['logpass']; if ($password =='') { unset($password);} }

if (empty($login) or empty($password)){
	echo '<span class="err">You do not have entered all the information<br>';
	exit('error : login_form</span>');
}

$login = stripslashes($login);
$login = htmlspecialchars($login);
$password = stripslashes($password);
$password = htmlspecialchars($password);
$login = trim($login);
$password = trim($password);

$myrow = $quer->fquery("SELECT * FROM g_user_re WHERE name='$login'");
if(empty($myrow['pass'])) {
	echo '<span class="err">You entered the wrong username or password.<br>Please try again.';
		exit('error : login_incorrect</span>');
}else {
	if($myrow['pass']==$password AND $myrow['name']==$login){
		$_SESSION['name']=$login;
		$_SESSION['id']=$myrow['id'];
		echo 'Hi '.$login.' welcome.<br>';
		echo '<script>$(".qblock").load("tmp/one/loadphp.php");</script>';
	} else {
		echo '<span class="err">Your username or password incorrect<br>Please try again. ';
		exit('error : login_or_password_incorrect</span>');
	}
}
mysql_close();
?>