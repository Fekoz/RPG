<?php
	//rec.fjo-team.pw | test.fjo-team.pw | other fjo-team.pw желательно по поддоменам разбить. Но проблема с сессиями тогда!
	//(у поддоменов разные сессии), запилил через гет, а там вывожу присвоенный для аккаунта код и дропаю ._,
	session_start();
	header("Content-Type: text/html; charset=utf8"); 
	include_once "../rec/option/create_cfg.php";
	if(empty($_GET['session'])) exit('<meta http-equiv="refresh" content="0;URL=http://rec.fjo-team.pw/">');
	
	$myrow = $quer->fquery("SELECT name FROM c_char_db WHERE code='$_GET[session]'");
	if(empty($myrow) or empty($myrow['name'])) die('<meta http-equiv="refresh" content="0;URL=http://rec.fjo-team.pw/">');
	$_SESSION['char_code_start_game'] = $myrow['name'];
	$quer->query("UPDATE c_char_db SET code='' WHERE name='$myrow[name]'");
?>
<!doctype html>
<html lang="en" style="height: 100%">
	<head>
		<meta charset="utf-8">
		<title>JRPG-demo-rpg</title>
		<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
		<link rel="stylesheet" href="game/file/css/style.css">
		<script>
			$(document).ready(function(){
				$(".menu-button").click(function(){
					$(".menu-bar").toggleClass( "open" );
				})
			});
		</script>
	</head>
	<body style="height: 100%">

		<ul class="menu">
			<li title="Info_char"><a href="#" class="menu-button home">Menu</a></li>
			<li title="hero"><a href="#" class="hero">hero</a></li>
			<li title="Closed_chat"><a href="#" class="cchat">chat</a></li>
			<li title="Closed_button"><a href="#" class="cbut">button</a></li>
			<li title="Clear_Global"><a href="#" class="cglobal">global</a></li>
			<li title="Clear_Log"><a href="#" class="clog">log</a></li>
			<li title="Clear_Quest"><a href="#" class="cquest">quest</a></li>
			<li title="Clear_Other"><a href="#" class="cother">other</a></li>
			<li title="map"><a href="#" class="map">map</a></li>
		</ul>			
		<ul class="menu-bar">
			<li><a href="#" class="menu-button">Menu-pages</a></li>
			<li><a href="http://rec.fjo-team.pw/">Home</a></li>
			<li><a href="#" class="_char_to_save">Save</a></li>
		</ul>
		<?php
			if(!$_SESSION['char_code_start_game']){
				echo '
				<meta http-equiv="refresh" content="2;URL=http://rec.fjo-team.pw/">
				<span style="text-align: center;">
					<h1>Games session is not founded</h1>
					<p>				
					You will bring to the site.<br> 
					Then re-try logged in or start playing.
					<br>
				';
				exit('Reload page.<br>Thank you for understanding</p></body></html>');
			}
		?>		
		<div id="qwers"></div>
		
		<div class="nump_pos_butt">
			<button type="submit" class="button" id="qclick">q</button>
			<button type="submit" class="button" id="wclick">w</button>
			<button type="submit" class="button" id="eclick">e</button>	<br><br>
			<button type="submit" class="button" id="aclick">a</button>
			<button type="submit" class="button" id="sclick">s</button>
			<button type="submit" class="button" id="dclick">d</button>	<br><br>
			<button type="submit" class="button" id="zclick">z</button>
			<button type="submit" class="button" id="cclick">c</button>	<br><br>
			<button type="submit" class="button button-bigbro" id="spaceclick">&nbspspace&nbsp</button>
		</div>
		
		<script>
			window.onload = function() {
				var wh=document.body.clientWidth + 15; // ширина  
				var hh=document.body.clientHeight + 5; // высота
						//alert ("Разрешение окна клиента: "+wh+"x"+hh); // лучше конечно фреймом, если он прогрузился то ему напплевать, даже если в нем екзит ._,
					if(wh >= 2000 && hh >= 1120) {
						$('#qwers').append('<iframe width="'+1890+'" height="'+965+'" name="ff" src="game/index.php" id="map" frameborder="0"></iframe> </div>');
					}else $('#qwers').append('<iframe width="'+wh+'" height="'+hh+'" name="ff" src="game/index.php" id="map" frameborder="0"></iframe> </div>');
				
				
				var _q=document.getElementById("map");
				var _r=false;
					$( "#dclick" ).click(function() { _q.contentWindow.engine.myy(1); return false;});
					$( "#aclick" ).click(function() { _q.contentWindow.engine.myy(2); return false;});
					$( "#wclick" ).click(function() { _q.contentWindow.engine.myy(3); return false;});
					$( "#sclick" ).click(function() { _q.contentWindow.engine.myy(4); return false;});
					$( "#eclick" ).click(function() { _q.contentWindow.engine.myy(5); return false;});
					$( "#qclick" ).click(function() { _q.contentWindow.engine.myy(6); return false;});
					$( "#zclick" ).click(function() { _q.contentWindow.engine.myy(7); return false;});
					$( "#cclick" ).click(function() { _q.contentWindow.engine.myy(8); return false;});
					$( "#spaceclick" ).click(function() { _q.contentWindow.engine.myy(9); return false; });

					$('body').keydown(function(e) {
						e.preventDefault();
						var $key = e.which;
						if ($key == 68 && (_q.contentWindow.$('.char').is(':animated') === false)) {  _q.contentWindow.engine.myy(1); }
						else if ($key == 65 && (_q.contentWindow.$('.char').is(':animated') === false)) {  _q.contentWindow.engine.myy(2); }
						else if ($key == 87 && (_q.contentWindow.$('.char').is(':animated') === false)) {  _q.contentWindow.engine.myy(3); }
						else if ($key == 83 && (_q.contentWindow.$('.char').is(':animated') === false)) {  _q.contentWindow.engine.myy(4); }
						else if ($key == 69 && (_q.contentWindow.$('.char').is(':animated') === false)) {  _q.contentWindow.engine.myy(5); }
						else if ($key == 81 && (_q.contentWindow.$('.char').is(':animated') === false)) {  _q.contentWindow.engine.myy(6); }
						else if ($key == 90 && (_q.contentWindow.$('.char').is(':animated') === false)) {  _q.contentWindow.engine.myy(7); }
						else if ($key == 67 && (_q.contentWindow.$('.char').is(':animated') === false)) {  _q.contentWindow.engine.myy(8); }
						else if ($key == 32 && (_q.contentWindow.$('.char').is(':animated') === false)) {  _q.contentWindow.engine.myy(9); }
						else if ($key >36 && $key <41 || $key >32 && $key <37 || $key == 17) { return false; }	
					});

					$('body').mousedown(function(e) {
						var $c = e.which;
						if($c == 2) { return false; }
					});	
					
					$(".hero").click(function() { _q.contentWindow.engine.closed(1); return false;});
					$(".cchat").click(function() { _q.contentWindow.engine.closed(2); return false;});
					$(".cbut").click(function() {
						if(_r != true) {
							$('.nump_pos_butt').css('display','none');
							_r=true;
						}else {
							$('.nump_pos_butt').css('display','block');
							_r=false;
						}
					});
					$(".cglobal").click(function() { _q.contentWindow.engine.closed(3); return false;});
					$(".clog").click(function() { _q.contentWindow.engine.closed(4); return false;});
					$(".cquest").click(function() { _q.contentWindow.engine.closed(5); return false;});
					$(".cother").click(function() { _q.contentWindow.engine.closed(6); return false;});
					$(".map").click(function() { _q.contentWindow.engine.closed(7); return false;});
					$("._char_to_save").click(function() { _q.contentWindow.engine.closed(8); return false;});
			};
		</script>		
	</body>
</html>