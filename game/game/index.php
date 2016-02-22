<?php
	session_start();
	if(!$_SESSION['char_code_start_game']) die("Error, no START char");
?>
	<!DOCTYPE html>
	<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
			<link rel="stylesheet" href="file/css/style.css" media="screen" type="text/css" />
			<link href="http://fonts.googleapis.com/css?family=Bowlby+One+SC" rel="stylesheet" type="text/css" />
			<script src="file/js/jq.js"></script>
			<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js'></script>
		</head>
		<body>
			<div class="map">
				<div id="mark1" style="position: absolute; width: 2400px; z-index:1;"></div>
				<div id="mark2" style="position: absolute; width: 2400px; z-index:2;">
				<div id="dmglog" style="display:none;"></div>
					<div class="char">
						<div style="position:absolute;top:-37px;text-align: center;color:red;" class="from_name"></div>
						<div class="progress-wrap progress">
							<div class="progress-bar progress"></div>
						</div>
					</div>
					<div class="mob"></div>
					<div class="obj"></div>					
					<div id="open_window"></div>
				</div>
			</div>			


			<div class="closedlog">
				<button id="closeds" class="button">Closed</button>
			</div>
			
			<div class="log">
				<nav role="navigation" class="t_log">
					<ul>
						<li><a href="#tab-1">Global<</a></li>
						<li><a href="#tab-2" class="active">Log<</a></li>
						<li><a href="#tab-3">Quest<</a></li>
						<li><a href="#tab-4">Other<</a></li>
					</ul>
				</nav>
				
				<div id="tab-1">
					<p>location : <mapname></p>
				</div>

				<div id="tab-2" class="active">
					<p>!!!!!!!test!!!!!</p>
					<p>!!!!!!!test!!!!!</p>
					<p>!!!!!!!test!!!!!</p>
					<p>!!!!!!!test!!!!!</p>
					<p>!!!!!!!test!!!!!</p>
					<p>!!!!!!!test!!!!!</p>
					<p>!!!!!!!test!!!!!</p>
					<p>!!!!!!!test!!!!!</p>
					<p>!!!!!!!test!!!!!</p>
					<p>!!!!!!!test!!!!!</p>
				</div>

				<div id="tab-3">
					<p>lol3</p>
				</div>

				<div id="tab-4">
					<p>lol4</p>
				</div>
			</div>
		<!-----JQUERY---->
	</body>
	<script src="file/js/en/engine.js"></script>
	<script src="file/js/en/log.js"></script>
</html>
