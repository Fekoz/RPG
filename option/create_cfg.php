<?
/**BD**/
define("MySQL_HOSTNAME","localhost"); 
define("MySQL_USER","root");
define("MySQL_PASSWORD","pass");
define("MySQL_DB","re_bd");

require_once 'qu_mysql.php';
$quer->connect(MySQL_USER,MySQL_PASSWORD,MySQL_DB,MySQL_HOSTNAME);
?>
