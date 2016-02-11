<?
session_start();
header("Content-Type: text/html; charset=utf8"); 

$_SESSION['id'] = '';
$_SESSION['name'] = '';
$_SESSION['session'] = '';
$_SESSION['viewday'] = '';
$_SESSION['char_code_start_game'] = '';

unset($_SESSION['id']);
unset($_SESSION['name']);
unset($_SESSION['session']);
unset($_SESSION['viewday']);
unset($_SESSION['char_code_start_game']);

//session_destroy();
echo '
	<div class="lol">
		<div class="loglogup LogLog" style="display:block">
			<h2><span style="color:red">Unlog</span> this game</h2>
				You have successfully logged out<br>
				If this message persists, please click on the link:<br>
				<a class="btn" href="http://TAKE_NAME_GAME.fjo-team.pw">UPDATE</a>
		</div>
	</div>
';
?>