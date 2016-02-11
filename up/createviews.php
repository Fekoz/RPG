<?
session_start();
header("Content-Type: text/html; charset=utf8"); 
include_once "../option/create_cfg.php";
$q = date("l");
if($_POST['sess'] == 'fekoztrue'){
	if($_SESSION['viewday'] != $q){
		$_SESSION['viewday'] = $q;
		$s = $quer->fquery("SELECT * FROM test WHERE date='$q'");
		$g = $s['poset']+1;
		$quer->query("UPDATE `test` SET `poset`='$g' WHERE `date`='$q'");
		echo 'Create session on :';
	}else echo 'You have a session on : ';
	mysql_close();
}
echo $_SESSION['viewday'];
?>