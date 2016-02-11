<?
session_start();
header("Content-Type: text/html; charset=utf8"); 
include_once "../option/create_cfg.php";

strleninput($_POST['createname'],'<span class="err">Incorrectly name! [5-25]<script>
	$(".qblock").load("tmp/one/loadphp.php");
</script>',5,25);

if(isset($_POST['createname'])) { $login = $_POST['createname']; if ($login == '') { unset($login);} }
if(isset($_POST['type'])) { $type = $_POST['type']; if ($type == '') { unset($type);} }

if (empty($login) or empty($type)) {
	echo '<span class="err">You do not have entered all the information<br>';
	exit('error: crate_problem');
}

$login = stripslashes($login); 
$login = htmlspecialchars($login);
$login = trim($login);

$type = stripslashes($type); 
$type = htmlspecialchars($type);
$type = trim($type);

if(!empty($_SESSION['name']) or !empty($_SESSION['id'])) {
	$q = $_SESSION['name'];
	$rescode=''.$q.'/'.$login.'';

	if($type == 'Str') $spell=1;
	else if($type == 'Agi') $spell=2;
	else if($type == 'Int') $spell=3;

	$prirost = rand(1,4);
	
	$f1 = $quer->query("UPDATE g_user_re SET one_ch_code='$rescode' WHERE name='$q'");	
	$f2 = $quer->query("INSERT INTO c_char_db (char_code,name,spell,pririos) VALUES('$rescode','$login','$spell','$prirost')");
	
	if($f1 == 'TRUE' AND $f2 == 'TRUE') {
		echo 'Creation successful!<br>
		Hero nick: '.$login.' <br>
		Basic characteristic('.$type.'): <img src="cont/img/'.$type.'.png" width="20" height="20"><br>
		<script>
			setTimeout("$(\".qblock\").load(\"tmp/one/loadphp.php\")",1700);
		</script>';
		exit('congratulations!');
	} else {
		echo '<span class="err">Try to enter the data again<br>';
		exit('error : return_input</span>');
	}
}
mysql_close();
?>