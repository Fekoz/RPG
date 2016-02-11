<?php
session_start();
header("Content-Type: text/html; charset=utf8"); 
include_once "../../option/create_cfg.php";

if(empty($_SESSION['name']) or empty($_SESSION['id'])) {
	echo '
	<div class="lol">
		<div class="loglogup LogLog" style="display:block">
			<h2><span style="color:red">Register</span> this game</h2>
			<form class="fform" action="javascript:void(null);" method="post" enctype="multipart/form-data" id="forms">
				<p class="name"> 
					<label class="flabel" for="name">&middot;Name:</label> 
					<input class="finput" type="text" name="regname" id="name" /> 
				</p>    
				<p class="email"> 
					<label class="flabel" for="email">&middot;Email:</label> 
					<input class="finput" type="email" name="regemail" id="email" /> 
				</p>    
				<p class="pass"> 
					<label class="flabel" for="pass">&middot;Password:</label>
					<input class="finput" type="text" name="regpass" id="pass" />  
				</p>
				<a class="btn" id="goReg">Register</a>
				<span style="color:red;font-size:28px;margin-left:35px;">OR</span><br>
				<a class="btn2" id="clickLogin">Login?</a><br>
			</form>
		</div>
		<div class="loglogup LogReg" style="display:none">
			<h2><span style="color:red">Login</span> this game</h2>
			<form class="fform" action="javascript:void(null);" method="post" enctype="multipart/form-data" id="formd">       
				<p class="name"> 
					<label class="flabel" for="name">&middot;Name:</label> 
					<input class="finput" type="text" name="logname" id="name" /> 
				</p>    
				<p class="pass"> 
					<label class="flabel" for="pass">&middot;Password:</label>
					<input class="finput" type="text" name="logpass" id="pass" />  
				</p>
				<a class="btn" id="goLog">Login</a>
				<span style="color:red;font-size:28px;margin-left:35px;">OR</span><br>
				<a class="btn2" id="clickRegister">Register?</a><br>
			</form>
		</div>
		<br><br>
		<div class="messageseg">&nbsp;<br>&nbsp;</div>
	</div>
	
	
	<div class="qwo">
			<img src="cont/img/img_title.png" height="986" width="721"/>
	</div>';
}else {		
		$flog=$_SESSION['name'];
		
		$myrow = $quer->fquery("SELECT * FROM g_user_re WHERE name='$flog'");

		echo '<div class="block_h">';
		
		$qwero1='one_ch_code';
		$qwero2='two_ch_code';
		
		if(!empty($myrow[$qwero1])) {
			$sel = $myrow[$qwero1];
			$my = $quer->fquery("SELECT * FROM c_char_db WHERE char_code='$sel'");
		} else $my = 'none';
		
		if(!empty($myrow[$qwero2])){
			$sel = $myrow[$qwero2];
			$tmy = $quer->fquery("SELECT * FROM c_char_db WHERE char_code='$sel'");
		} else $tmy = 'none';

		notlost($myrow,$qwero1,$my);
		notlost($myrow,$qwero2,$tmy);
		echo'
				<div class="zcex">
					<a class="btn" id="clickExit">Exit</a><br><br>
					<div class="Error_log"></div>
				</div>
		</div>
		<script>
			$("#start_game").click(function() {
				$.ajax({
					type: "POST",
					url: "up/createsession.php",
					data: "sgstart='.$myrow['name'].'",
					success: function(data) {
						$(".Error_log").html(data);
					},
					error: function(xhr, str){
						$(".Error_log").html(xhr.responseCode);
					}
				});
			});
		</script>
		';
	}
	
//-----------SCRYPT-------
	echo'
		<script>
		$(".fg").show(200);
		for(var i=1;i<=4;i++){
			$(".g"+i).show(600);
		}
			$("#clickLogin").click(function() {
				$(".LogLog").css({"display":"none"});
				$(".LogReg").css({"display":"block"});
				//$(".qwo").animate({"opacity":"0.0"},600);
				$(".qwo").html("<img src=\"cont/img/img_title2.png\" height=\"986\" width=\"721\" /> ");
				$(".messageseg").html("&nbsp;<br>&nbsp;");
			});
			$("#clickRegister").click(function() {
				$(".LogReg").css({"display":"none"});
				$(".LogLog").css({"display":"block"});
				$(".qwo").html("<img src=\"cont/img/img_title.png\" height=\"986\" width=\"721\" /> ");
				$(".messageseg").html("&nbsp;<br>&nbsp;");
			});			
			$("#goReg").click(function() {
				var Sql_qury = $("#forms").serialize();
				$.ajax({
					type: "POST",
					url: "up/reguser.php",
					data: Sql_qury,
					success: function(data) {
						$(".messageseg").html(data);
					},
					error: function(xhr, str){
						$(".messageseg").html(xhr.responseCode);
					}
				});
			});
			$("#goLog").click(function() {
				var Sql_qury = $("#formd").serialize();
				$.ajax({
					type: "POST",
					url: "up/loginuser.php",
					data: Sql_qury,
					success: function(data) {
						$(".messageseg").html(data);
					},
					error: function(xhr, str){
						$(".messageseg").html(xhr.responseCode);
					}
				});
			});	
				
			$("#clickExit").click(function() {
				$(".qblock").load("up/unlog.php");
				$(".qblock").load("tmp/one/loadphp.php");
			});

			var preloads = [],
			images = {
				"type" :[
					"Agi",
					"Int",
					"Str"
					],
				"img" :[ 
					"cont/img/agi.png",
					"cont/img/int.png",
					"cont/img/str.png"
				]
			};
			
			function sup(){ $(".Error_log").html("*Fill in the username.<br>error: no_name"); }

			$.when.apply($, preloads).done(function() {
				var roulette = new Roulette;
				$("#createclick").click(roulette.start);
			});

			function Roulette() {
				var index = 0,
					  image = new Image,
					  speed = 50,
					  isStarting = false,
					  isStopping = false,
					  isStop = false,
					  qwe=false,
					  rqwe=false;
					  
				init();
				
				function init() {
					image.src = images.img[0];
					image.width = 150;
					image.height = 150;
					$("#roulette").append(image);
				};
				
				function change() {
					if (index >= images.img.length) index = 0;
					image.src = images.img[index];
					rqwe = images.type[index];
					if (isStop === false) {
						index++;
						setTimeout(change, speed);
					} else {
						images.img.splice(index, 1);
						isStarting = false;
						var sql_qury = $("#formcreate").serialize();
						if(sql_qury != "createname=" || sql_qury != "") {
							quert(rqwe,sql_qury);
						}else {
							sup();
						}
					}
				};
				
				function start() {
					var sql_qury = $("#formcreate").serialize();
					if(sql_qury != "createname=" && sql_qury != "") {
						if(qwe != true){
							if (isStarting === true) return;
							isStop = false;
							isStarting = true;
							change();
							var q;
							q = gr(0,50);
							setTimeout(stop, speed*q);
							qwe=true;
						}else sup();
					}else sup();
				};
				
				function stop() {
					if (isStopping === true) return;

					isStopping = true;
					speed = 200;
					setTimeout(function() {
						speed = 500;
					}, 2500);
					setTimeout(function() {
						speed = 50;
						isStop = true;
						isStopping = false;
					}, 3500);
				};
				
				function quert(i,qu){
					$.ajax({
						type: "POST",
						url: "up/createchar.php",
						data: qu+"&type="+i,
						success: function(data) {
							$(".Error_log").html(data);
						},
						error: function(xhr, str){
							$(".Error_log").html(xhr.responseCode);
						}
					});
				};
				
				function gr(min, max) {
					return Math.floor(Math.random() * (max - min + 1)) + min;
				};

				return {
					start: start
				};
			};
		</script>
	';
	mysql_close();
?>