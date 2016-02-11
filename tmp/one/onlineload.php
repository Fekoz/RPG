<?php
header("Content-Type: text/html; charset=utf8"); 
include_once "../../option/create_cfg.php";
$limit = 360;
$time = time();

$last_id = (int)$_GET['id'];

set_time_limit($limit+9);

function escape($str){ return str_replace('"','\"',$str); }

$q = date("l");

	while(time()-$time<$limit) {
		$res = $quer->fquery("SELECT * FROM test WHERE date='$q'");
		$qwe = $quer->fquery("SELECT * FROM test WHERE date='reguser'");
		echo 'self.putMessage("'.$res['poset'].'",
			"'.escape($res['date']).'",
			"'.$qwe['poset'].'");';
		flush();
		exit;
		sleep(9);
	}
echo 'exit';
mysql_close();
?>