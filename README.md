# JRPG:REC
<h3>KEY:af43_04_06</h3><br>
Hi!<br>
This light RPG game made on DHTML.<br>
It includes tools AJAX@JSON>PHP+HTML@HTML5+CSS+JS@JQUERY.<br>
<hr>
<img src="https://github.com/Fekoz/JRPG/blob/master/cont/img/img_title.png?raw=true" height="400">
#© 2015 Artem Fekoz
<div class="intro">
  <article>
		<h1>Fokus</h1>
		<p>
			Fokus uses JavaScript to emphasize anything you select by covering the rest of the page with semi-transparent black.
		</p>
		<p>
			Try it out by selecting this paragraph or the sample content below. You'll see the entire page fade out while this text is highlighted.
		</p>
		<p>
			If you want to use Fokus on your site you just need to include the <a href="https://github.com/hakimel/Fokus/blob/master/js/fokus.min.js">fokus.min.js</a> script (3kb, no dependencies).
		</p>
		<p>
			Fokus is also available as a <a href="https://chrome.google.com/webstore/detail/flkkpmjbbpijiedjdgnhkcgopgnflehe">Chrome extension</a>.
		</p>
		<small>
			Created by <a href="http://twitter.com/hakimel">@hakimel</a> / <a href="http://hakim.se/">http://hakim.se</a>
		</small>
	</article>
</div>

<style>
* {
  margin: 0;
  padding: 0;
}

::selection { 
	background: #d1edf8;
}

html, 
body {
	height: 100%;
}

body {
	background: #eee;
	font-family: 'Lato', Helvetica, sans-serif;
	font-size: 16px;
	color: #222;
}

a {
	color: #c2575b;
	text-decoration: none;

	-webkit-transition: 0.15s color ease;
	   -moz-transition: 0.15s color ease;
	    -ms-transition: 0.15s color ease;
	     -o-transition: 0.15s color ease;
	        transition: 0.15s color ease;
}
	a:hover {
		color: #f76f76;
	}

h1, 
h2 {
	font-size: 24px;
}

.intro {
	display: inline-block;
	background: #eee;
	padding: 40px 60px;
	overflow-y: auto;

	-webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	        box-sizing: border-box;
}
	.intro h1 {
		position: relative;
	}
	.intro h1:after {
		content: '';
		position: absolute;
		display: inline-block;
		width: 48px;
		height: 48px;
		top: -9px;
		margin-left: 7px;
		
		background-image: url( 'http://lab.hakim.se/fokus/css/fokus48.png' );
		background-repeat: no-repeat;
	}
	.intro>article {
		width: 400px;
	}
	.intro p {
		margin: 10px 0 10px 0;
		font-size: 16px;
		line-height: 1.5em;
	}
	.intro small {
		display: block;
		margin-top: 10px;
		padding-top: 10px;
		color: #333;
		font-size: 0.85em;
		border-top: 1px dashed #ccc;

		-webkit-text-size-adjust: none;
	}
	.intro .sharing {
		margin-top: 20px;
	}

.demo {
	border-top: 1px solid #ccc;
	padding: 40px 60px;
	background: #fff;
}
	.demo>article {
		display: inline-block;
		max-width: 320px;
		vertical-align: top;
		margin: 0 20px 20px 0;
		line-height: 1.5em;
	}
	.demo>article.double {
		max-width: 640px;
	}
	.demo>article img {
		max-width: 100%;
		margin-bottom: 10px;
	}
	.demo>article h2 {
		margin-bottom: 10px;
	}
	.demo>article .image-link {
		display: block;
	}
</style>

