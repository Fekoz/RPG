<?php 
	session_start();
	header("Content-Type: text/html; charset=utf8"); 
	include_once "../../rec/option/create_cfg.php";
	
	$hero = $_SESSION['char_code_start_game'];
	//char
	$char = $quer->fquery("SELECT * FROM c_char_db WHERE name='$hero'");
	//map
	$allmap = $char['map_name'];
	
	$map = $quer->fquery("SELECT * FROM c_map_db WHERE name='$allmap'");
	
	$quert = $map['name'];//identific map_name for map
	
	//mob
	$mi = 1;
	$mob = $quer->query("SELECT * FROM c_mob_db WHERE mapn='$quert'");
	while($mob = $quer->get_row()){
		$mobs[$mi] = array(
			'name' => $mob['name'],
			'width' => $mob['width'],
			'height' => $mob['height'],
			'step' => $mob['step'],
			'bg' => $mob['bg'],
			'speed' => $mob['speed'],
			'allhp' => $mob['allhp'],
			'dmg' => $mob['mobdmg'],
			'armor' => $mob['armor'],
			'exp' => $mob['mobexp'],
			'miss' => $mob['miss']
		);
		$mi++;
	}
	
	//obj
	$oi=1;
	$obj = $quer->query("SELECT * FROM c_obj_db WHERE mapn='$quert'");
	while($obj = $quer->get_row()){
		$object[$oi] = array(
			'name' => $obj['name'],
			'width' => $obj['width'],
			'height' => $obj['height'],
			'allhp' => $obj['allhp'],
			'backg' => $obj['bg']
		);
		$oi++;
	}
	
	//echo	
	$f = array(	
		'map' => array(
			'name' => $map['name'],
			'width' => $map['width'],
			'height' => $map['height'],
			'bg' => $map['bg'],
			'back_n' => $map['img'],
			'smob' => $map['smob'],
			'sobj' => $map['sobj']
		),
		'char' => array(
			'name' => $char['name'],
			'bg' => $char['bg'],
			'speed' => $char['speed'],
			'aspeed' => $char['aspeed'],
			'spell' => $char['spell'],
			'prirost' => $char['pririos'],
			'exp' => $char['exp'],
			'hp' => $char['charhep'],
			'mp' => $char['charmana'],
			'str' => $char['str'],
			'agi' => $char['agi'],
			'int' => $char['int'],
			'miss' => $char['miss'],
			'crit' => $char['crit'],
			'critrate' => $char['critrate'],
			'p1' => $char['c1'],
			'p2' => $char['c2'],
			'p3' => $char['c3'],
			'p4' => $char['c4']
		),
		'mobs' => $mobs,
		'object' => $object,
	);
	$q = json_encode($f);
	echo $q;
	unset($_SESSION['char_code_start_game']);
?>