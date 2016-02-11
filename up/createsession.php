<?
session_start();
header("Content-Type: text/html; charset=utf8"); 
include_once "../option/create_cfg.php";

function genccode($number) {
	$arr = array('a','b','c','d','e','f',
				'g','h','i','j','k','l',
				'm','n','o','p','r','s',
				't','u','v','x','y','z',
				'A','B','C','D','E','F',
				'G','H','I','J','K','L',
				'M','N','O','P','R','S',
				'T','U','V','X','Y','Z',
				'1','2','3','4','5','6',
				'7','8','9','0');
	$pass = "";
	for($i = 0; $i < $number; $i++) {
		$index = rand(0, count($arr) - 1);
		$pass .= $arr[$index];
	}
	return $pass;
}

if(!empty($_POST['sgstart'])){
	$r = rand(8,35);
	$Q = genccode(intval($r));
	
	$quer->query("UPDATE c_char_db SET code='$Q' WHERE name='$_POST[sgstart]'");
	$_POST['sgstart'];
	echo 'Session Created:'.$_POST['sgstart'].'<br>';
	echo $Q;
	echo '<script>location.href="http://game.fjo-team.pw?session='.$Q.'";</script>';//лакация
	exit ('<a href="http://game.fjo-team.pw?session='.$Q.'">START</a>');
}else exit('error:Reload page;');
?>