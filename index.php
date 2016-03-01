<?php
	header("Content-Type: text/html; charset=utf8");
?>
<!DOCTYPE html>
<html>
	
	<head>
		
		<meta charset="UTF-8">
			
		<link href='http://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
		
		<link rel="stylesheet" href="cont/css/style.css">
		<script src='cont/js/jq.js'></script>
		<script src='cont/js/tsw.js'></script>
		<script src="cont/js/part.js"></script>
		<script src='cont/js/three.js'></script>
		<script src="cont/js/index.js"></script>
		
	</head>
	
	<body><body>
		<div id="header">
			<div style="transform: matrix(1, 0, 0, 1, 0, -200); display: block;" class="header_bar"></div>
			<div style="visibility: inherit; opacity: 1;" class="cta-btn cta-logo cta-logo-center">
				<img style="display: block;" class="logo-white" src="cont/img/logo.png">
				<img style="visibility: hidden; opacity: 0;" class="logo-color" src="cont/img/logo.png">
			</div>
		</div>
		
		<div id="preload">
			<div class="load"></div>
			<h4>
				loading<span class="dot">.</span>
				<span class="dot">.</span>
				<span class="dot">.</span>
			</h4>
		</div>
		
		<div class="align_center">
			<div class="align_center_to_left">
				<div class="align_center_to_right">
					<div id="dot" style="display:none">
						<img src="cont/img/click.png" alt="click" width="100" height="80">
						<div class="framevideoclick">
							<svg class="svgbutt" id="facebook" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg"><path d="M17.996 32H12V16H8v-5.514l4-.002-.006-3.248c0-4.5 1.22-7.236 6.518-7.236h4.412v5.515h-2.757c-2.063 0-2.163.77-2.163 2.21l-.008 2.76h4.96l-.586 5.513L18 16l-.004 16z"/></svg>
							<svg class="svgbutt" viewBox="0 0 33 33" id="twitter" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 32,6.076c-1.177,0.522-2.443,0.875-3.771,1.034c 1.355-0.813, 2.396-2.099, 2.887-3.632 c-1.269,0.752-2.674,1.299-4.169,1.593c-1.198-1.276-2.904-2.073-4.792-2.073c-3.626,0-6.565,2.939-6.565,6.565 c0,0.515, 0.058,1.016, 0.17,1.496c-5.456-0.274-10.294-2.888-13.532-6.86c-0.565,0.97-0.889,2.097-0.889,3.301 c0,2.278, 1.159,4.287, 2.921,5.465c-1.076-0.034-2.088-0.329-2.974-0.821c-0.001,0.027-0.001,0.055-0.001,0.083 c0,3.181, 2.263,5.834, 5.266,6.438c-0.551,0.15-1.131,0.23-1.73,0.23c-0.423,0-0.834-0.041-1.235-0.118 c 0.836,2.608, 3.26,4.506, 6.133,4.559c-2.247,1.761-5.078,2.81-8.154,2.81c-0.53,0-1.052-0.031-1.566-0.092 c 2.905,1.863, 6.356,2.95, 10.064,2.95c 12.076,0, 18.679-10.004, 18.679-18.68c0-0.285-0.006-0.568-0.019-0.849 C 30.007,8.548, 31.12,7.392, 32,6.076z"/></svg>
							<svg class="svgbutt" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 17.471,2c0,0-6.28,0-8.373,0C 5.344,2, 1.811,4.844, 1.811,8.138c0,3.366, 2.559,6.083, 6.378,6.083 c 0.266,0, 0.524-0.005, 0.776-0.024c-0.248,0.475-0.425,1.009-0.425,1.564c0,0.936, 0.503,1.694, 1.14,2.313 c-0.481,0-0.945,0.014-1.452,0.014C 3.579,18.089,0,21.050,0,24.121c0,3.024, 3.923,4.916, 8.573,4.916 c 5.301,0, 8.228-3.008, 8.228-6.032c0-2.425-0.716-3.877-2.928-5.442c-0.757-0.536-2.204-1.839-2.204-2.604 c0-0.897, 0.256-1.34, 1.607-2.395c 1.385-1.082, 2.365-2.603, 2.365-4.372c0-2.106-0.938-4.159-2.699-4.837l 2.655,0 L 17.471,2z M 14.546,22.483c 0.066,0.28, 0.103,0.569, 0.103,0.863c0,2.444-1.575,4.353-6.093,4.353 c-3.214,0-5.535-2.034-5.535-4.478c0-2.395, 2.879-4.389, 6.093-4.354c 0.75,0.008, 1.449,0.129, 2.083,0.334 C 12.942,20.415, 14.193,21.101, 14.546,22.483z M 9.401,13.368c-2.157-0.065-4.207-2.413-4.58-5.246 c-0.372-2.833, 1.074-5.001, 3.231-4.937c 2.157,0.065, 4.207,2.338, 4.58,5.171 C 13.004,11.189, 11.557,13.433, 9.401,13.368zM 26,8L 26,2L 24,2L 24,8L 18,8L 18,10L 24,10L 24,16L 26,16L 26,10L 32,10L 32,8 z"/></svg>
							<svg class="svgbutt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 451"><g><path d="M3.675 147.275l92.784-1.157v303.83l-92.785 1.18V147.274zM174.14 147.275l88.66-1.126v38.645l.02 10.947c26.255-25.744 53.32-45.2 96.563-45.2 51.017 0 100.362 21.38 100.362 91.034V450.01l-90 1.342V292.12c0-35.103-8.796-57.733-50.72-57.733-36.935 0-52.397 6.615-52.397 55.214V450l-92.478 1.116v-303.84h-.01zM101.836 51.45c0 28.05-22.74 50.79-50.79 50.79S.256 79.5.256 51.447c0-28.05 22.738-50.79 50.79-50.79 28.05 0 50.79 22.738 50.79 50.79z"/></g></svg>
							<svg class="svgbutt" id="meneame" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504.97239 459.62054"><path d="M470.83 102.068c-36.315 36.83-101.886 35.77-126.272 85.513-20.804 58.995 28.19 153.25 48.642 207.03 13.855 27.77-108.224 54.54-93.292 61.415 86.148-.975 122.885-32.413 112.548-70.992-9.892-36.915-54.544-110.595-54.544-169.468 1.25-44.467 50.988-58.122 83.023-76.243 37.223-16.687 72.04-53.92 62.416-97.594-.41-15.405-27.24-66.692-16.285-26.937 5.974 29.35 8.845 65.574-16.235 87.28z"/><path d="M358.795 35.787c-46.882-24.185-98.97-38.83-153.5-26.078-29.3 5.413-63.807 21.416-83.436 48.22-25.74 30.74-26.743 75.452-9.86 110.6 13.12 27.083 33.064 57.214 65.378 61.73 27.79 4.17 58.325.403 81.934-15.646-28.07 4.827-60.586 14.805-85.795-3.956-42.248-27.02-62.792-88.34-37.142-133.1 20.604-39.023 62.108-50.017 106.02-51.948 58.56-2.577 114.682 30.833 136.216 38.97 20.75 6.534 50.508 14.808 65.27-7.22 8.63-10.234 5.18-38.43-1.835-41.046 2.027 19.753-12.46 44.598-35.008 38.12-16.842-3.978-32.337-12.055-48.24-18.647z"/><path d="M44.55 210.44C17.394 253.246-7.414 303.377 2.057 355.55c8.708 54.54 61.475 93.01 113.943 99.86 53.872 6.272 107.63 4.68 161.635.794 9.106-8.806-44.07-8.566-66.468-11.793-51.09-5.784-106.516-6.843-150.32-37.183-40.808-30.535-46.157-90.43-26.59-134.58 16.407-41.66 40.895-81.925 66.656-116.73-20.087 16.686-38.646 29.13-56.362 54.525z" /><path d="M178.715 345.086c31.823 2.46 84.634-.772 109.44 16.57 8.878 13.353-7.642 87.263-1.95 95.796 12.674 3.73 27.17-86.602 19.146-109.047-6.075-17.135-113.964-8.023-126.634-3.32z"/></svg>
							<br><br>
								<div class="loglogup Feed">
									<form class="ffeedback" action="javascript:void(null);" method="post" enctype="multipart/form-data">    
										<p class="email"> 
											<label class="flabel" for="email" style="color:white">&middot;Email:</label> 
											<input class="finput" type="email" name="email_f" id="email"/> 
										</p>
										<p class="text"> 
											<label class="flabel" for="text" style="color:white">&middot;Text:</label> 
											<textarea class="finput" type="text" name="text_f" id="text"/>hi, My name ... I have a question for you</textarea>
											
										</p>
										<a class="btn" id="goFeedback">Feedback</a>
										<span class="feedback_info">&middot;</span>
									</form>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
		<div id="main" style="display:none">			
			<section class="head">
				<div id="particles">
					<div class="intro">
						<h1>
							<span style="color:red">REC:</span>
							Game
						</h1>
						<p>J-RPG Rec: has finally been released! <br>Once in this country, you will find hundreds items scattered around the world.</p>
						<p>Views for <span class="checkonday" style="color:red">Loading views</span> Times</p>
						<a id="click3" class="btn">ABOUT</a>
					</div>
				</div>
			</section>
			
			<section class="main">
				<div class="wrap">
					<div class="wrap-inner">
						<div class="text-wrap">
							<h2><span style="color:red">About</span> this game</h2>
							<span>
								We already: <span class="checkallusers" style="color:red">Loading data</span> users<br>
							</span>
							<span>
								J-RPG Rec:has finally been released! Once in this country, you will find hundreds items scattered around the world. By seducing you and your companions, they become even more powerful allies! Prove yourself worth of their affection and become the strongest in all worlds.
							</span>
							<a id="click4" class="btn">START</a>
							<br>
						</div>
					</div>
				</div>
			</section>
			
			<section class="other">
				<div class="qblock"></div>
			</section>	
			
			<section class="footer">
				<footer>
					<div>
						<h1>FJOTeam&nbsp;&copy;&nbsp;2015</h1>
						<p>
							Rec:the Game <br>
							We already:<span class="checkallusers" style="font-size:1.6em;color:red">Loading data</span> users
						</p>
						<p>
							<strong>designing & create:&nbsp;Fekoz</strong> 
							&lt;lolpikds@hotmail.com&gt;
						</p>
					</div>

					<div class="license">
						<h1>Game&nbsp;:&nbsp;v&nbsp;af43_04_06</h1>
						<p>&lt;html5,&nbsp;jq&gt;,</p>
						<p>&lt;WebGl,&nbsp;Canvas,&nbsp;Css3&gt;,</p>
						<p>&lt;none&gt;,</p>
						<p>&lt;none&gt;,</p>
						<p>&lt;none&gt;,</p>
					</div>
					
					<div>
						<img class="logo" src="cont/img/logo.png" alt="Logo">
					</div>
				</footer>
			</section>
		</div>	
		<div id="particles-js"></div>
	</body></body>
</html>
