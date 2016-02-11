<?php 
session_start();
if (empty($_SESSION['name']) or empty($_SESSION['id'])) { 
	exit('error: session_problem');
} else {
	if(isset($_POST['char_to_save'])) {
		$cart = json_decode($_POST['char_to_save'], true );
		$fid = $cart["id"];
		$f1 = $cart["speed"];
		$f2 = $cart["aspeed"];

		$f3 = $cart["hp"];
		$f4 = $cart["mp"];
		
		$f5 = $cart["str"];
		$f6 = $cart["agi"];
		$f7 = $cart["int"];
		
		$f8 = $cart["miss"];
		$f9 = $cart["crit"];
			$f10 = $cart["critrate"];
		$f11 = $cart["exp"];
		
		$res = $quer->query("UPDATE `c_char_db` SET `speed`='$f1', 
													`aspeed`='$f2', 
													`charhep`='$f3',
													`charmana`='$f4', 
													`str`='$f5', 
													`agi`='$f6', 
													`int`='$f7', 
													`miss`='$f8', 
													`crit`='$f9', 
													`critrate`='$f10',
													`exp`='$f11' WHERE `name`='$fid'");
			if($res = true) echo 'connect to bd:',$res,'\n';
			else echo 'Error:problem_connect_',$res,'\n';
	}else exit('error: no_save_query / Return game');
}
?>