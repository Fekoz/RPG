<?
class from_base {
	var $db_id = false;
	var $connected = false;
	var $query_num = 0;
	var $mysql_error = '';
	var $mysql_version = '';
	var $mysql_error_num = 0;
	var $MySQL_time_taken = 0;
	var $query_id = false;

	public function connect($db_user, $db_pass, $db_name, $db_location , $show_error=1) {
		if(!$this->db_id = @mysql_connect($db_location, $db_user, $db_pass)) {
			if($show_error == 1) $this->display_error(mysql_error(), mysql_errno());
			else return false;
		}
		if(!@mysql_select_db($db_name, $this->db_id)) {
			if($show_error == 1) $this->display_error(mysql_error(), mysql_errno());
			else return false;
		}
		$this->mysql_version = mysql_get_server_info();
		if(!defined('COLLATE')){ define("COLLATE", "utf8"); }
		if (version_compare($this->mysql_version, '4.1', ">=")) mysql_query("/*!40101 SET NAMES '" . COLLATE . "' */");
		$this->connected = true;
		return true;
	}
	
	public function query($query, $show_error=true) {
		$time_before = $this->get_real_time();
		if(!$this->connected) $this->connect(MySQL_USER,MySQL_PASSWORD,MySQL_DB,MySQL_HOSTNAME);
		if(!($this->query_id = mysql_query($query, $this->db_id) )) {
			$this->mysql_error = mysql_error();
			$this->mysql_error_num = mysql_errno();
			if($show_error) exit('ERROR:DB PROBLEM');
		}
		$this->MySQL_time_taken += $this->get_real_time() - $time_before;
		$this->query_num ++;
		return $this->query_id;
	}
	
	function get_row($query_id = '') {
		if ($query_id == '') $query_id = $this->query_id;
		return mysql_fetch_assoc($query_id);
	}

	function get_affected_rows() {
		return mysql_affected_rows($this->db_id);
	}

	function get_array($query_id = '') {
		if ($query_id == '') $query_id = $this->query_id;
		return mysql_fetch_array($query_id);
	}
	
	public function fquery($query, $multi = false) {
		if(!$multi) {
			$this->query($query);
			$data = $this->get_row();
			$this->free();			
			return $data;
		} else {
			$this->query($query);
			$rows = array();
			while($row = $this->get_row()) {
				$rows[] = $row;
			}
			$this->free();
			return $rows;
		}
	}
	
	public function num_rows($query_id = '') {
		if ($query_id == '') $query_id = $this->query_id;
		return mysql_num_rows($query_id);
	}
	
	public function insert_id() {
		return mysql_insert_id($this->db_id);
	}

	public function get_result_fields($query_id = '') {
		if ($query_id == '') $query_id = $this->query_id;
		while($field = mysql_fetch_field($query_id)) {
			$fields[] = $field;
		}
		return $fields;
	}

	public function free($query_id = '') {
		if ($query_id == '') $query_id = $this->query_id;
		@mysql_free_result($query_id);
	}
	
	public function get_real_time() {
		list($seconds, $microSeconds) = explode(' ', microtime());
		return ((float)$seconds + (float)$microSeconds);
	}
}
$quer = new from_base;

function strleninput($qqu,$printqqu,$f1,$f2){
	$qs = strlen($qqu);
	if($qs < $f1 OR $qs >= $f2) return true;
	return false;
}

function notlost($myrow,$qwer,$my){
	$res;
	$i=0;
	if($qwer == 'one_ch_code'){
		if(empty($myrow[$qwer])){
			$res='
			<div class="tablet qfinput loglogup" style="float:left">
				<p class="fsred">Name your char:</p>
				<form id="formcreate">
					<input class="finputc" type="text" name="createname"/>
				</form>
				<div id="roulette"></div>
				<hr>
				<a class="btn" id="createclick">CRATE</a>
			</div>';
			$i=1;
		} else {
			if($my != 'none'){
				if($my['spell'] == 1) $spell='str';
				else if($my['spell'] == 2) $spell='agi';
				else if($my['spell'] == 3) $spell='int';
				
				$res='
				<div class="tablet qfinput loglogup" style="float:left">
					<p class="fsred">Name:'.$my['name'].'</p>
					<hr>
					<p class="fsred">Str:'.$my['str'].'</p>
					<p class="fsred">Agi:'.$my['agi'].'</p>
					<p class="fsred">Int:'.$my['int'].'</p>
					<p class="fsred">Miss:'.$my['miss'].'</p>
					<p class="fsred">Crit:'.$my['critrate'].'</p>
					<p class="fsred">Spell:<img src="cont/img/'.$spell.'.png" width="37" height="37"/>, '.$spell.' </p>
					<a class="btn" id="start_game">Select</a>
				</div>';
				$i=1;
			}else {
				$res='<div class="tablet qfinput loglogup" style="float:left">
					<div id="preload">
						<div class="load"></div>
						<h4>Reload page</h4>
					</div>
				</div>';
				$i=1;
			}
		}
	}else {
		$res='
		<div class="tablet qfinput loglogup" style="float:left">
			<img src="cont/img/closed.svg" width="100" height="70"/>
			<hr>
			<p class="fsred" style="text-align:center;">Closed</p>
		</div>';
		$i=2;
	}
	echo'<div class="qwer'.$i.'">
		<div class="fg">
			<img src="cont/img/from_game_1.png" height="520" width="199"/>
		</div>
		<div class="g1"><img src="cont/img/from_game_2.png" height="210" width="206"/></div>
		<div class="g2"><img src="cont/img/from_game_3.png" height="113" width="87"/></div>
		<div class="g3"><img src="cont/img/from_game_4.png" height="110" width="118"/></div>
		<div class="g4"><img src="cont/img/from_game_5.png" height="107" width="93"/></div>
			'.$res.'
		</div>
	';	
}
?>