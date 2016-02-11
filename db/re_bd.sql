-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Фев 11 2016 г., 17:05
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `re_bd`
--

-- --------------------------------------------------------

--
-- Структура таблицы `c_char_db`
--

CREATE TABLE IF NOT EXISTS `c_char_db` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `char_code` varchar(150) NOT NULL,
  `name` varchar(35) NOT NULL,
  `bg` varchar(56) NOT NULL DEFAULT 'file/img/char/char.gif',
  `speed` int(10) NOT NULL DEFAULT '700',
  `aspeed` int(10) NOT NULL DEFAULT '700',
  `spell` int(10) NOT NULL DEFAULT '1',
  `exp` int(10) NOT NULL DEFAULT '0',
  `pririos` int(10) NOT NULL DEFAULT '1',
  `charhep` int(11) NOT NULL DEFAULT '40',
  `charmana` int(11) NOT NULL DEFAULT '1',
  `str` int(11) NOT NULL DEFAULT '5',
  `agi` int(11) NOT NULL DEFAULT '5',
  `int` int(11) NOT NULL DEFAULT '5',
  `miss` int(11) NOT NULL DEFAULT '0',
  `crit` int(10) NOT NULL DEFAULT '0',
  `critrate` int(11) NOT NULL DEFAULT '0',
  `c1` int(11) NOT NULL DEFAULT '0',
  `c2` int(11) NOT NULL DEFAULT '0',
  `c3` int(11) NOT NULL DEFAULT '0',
  `c4` int(11) NOT NULL DEFAULT '0',
  `map_name` varchar(35) NOT NULL DEFAULT 'MAP_ONE',
  `code` varchar(50) NOT NULL DEFAULT 'none',
  KEY `ID` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=cp1251 AUTO_INCREMENT=49 ;

--
-- Дамп данных таблицы `c_char_db`
--

INSERT INTO `c_char_db` (`id`, `char_code`, `name`, `bg`, `speed`, `aspeed`, `spell`, `exp`, `pririos`, `charhep`, `charmana`, `str`, `agi`, `int`, `miss`, `crit`, `critrate`, `c1`, `c2`, `c3`, `c4`, `map_name`, `code`) VALUES
(36, 'fekoz/fekoz', 'fekoz', 'file/img/char/char.gif', 500, 700, 2, 2920, 21, 350, 1, 30, 70, 10, 99, 0, 0, 0, 0, 0, 0, 'MAP_ONE', ''),
(45, 'eeeeeeeeeee/eeeeeeeeeee', 'eeeeeeeeeee', 'file/img/char/char.gif', 700, 700, 2, 0, 2, 40, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 'MAP_ONE', 'none'),
(46, 'dsdsadsad/dsdsadsad', 'dsdsadsad', 'file/img/char/char.gif', 700, 700, 1, 0, 3, 40, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 'MAP_ONE', 'none'),
(47, 'wwwwww/wwwwww', 'wwwwww', 'file/img/char/char.gif', 700, 700, 0, 0, 2, 40, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 'MAP_ONE', 'none'),
(48, '5656565/5656565', '5656565', 'file/img/char/char.gif', 700, 700, 1, 0, 3, 40, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 'MAP_ONE', '520xE3XVZp79FVYCNKnkZDHMhLLViTU');

-- --------------------------------------------------------

--
-- Структура таблицы `c_item_db`
--

CREATE TABLE IF NOT EXISTS `c_item_db` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `char_code` varchar(56) NOT NULL,
  `i1` int(11) NOT NULL DEFAULT '0',
  `i2` int(11) NOT NULL DEFAULT '0',
  `i3` int(11) NOT NULL DEFAULT '0',
  `i4` int(11) NOT NULL DEFAULT '0',
  `i5` int(11) NOT NULL DEFAULT '0',
  `i6` int(11) NOT NULL DEFAULT '0',
  `i7` int(11) NOT NULL DEFAULT '0',
  `i8` int(11) NOT NULL DEFAULT '0',
  KEY `ID` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=cp1251 AUTO_INCREMENT=3 ;

--
-- Дамп данных таблицы `c_item_db`
--

INSERT INTO `c_item_db` (`id`, `char_code`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`) VALUES
(1, 'test/TEST', 8, 10, 11, 0, 0, 6, 0, 1),
(2, 'jlob/jlob', 9, 10, 11, 0, 0, 1, 0, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `c_map_db`
--

CREATE TABLE IF NOT EXISTS `c_map_db` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `width` int(10) NOT NULL DEFAULT '1000',
  `height` int(10) NOT NULL DEFAULT '1000',
  `bg` varchar(56) NOT NULL,
  `img` varchar(56) NOT NULL,
  `smob` int(10) NOT NULL,
  `sobj` int(10) NOT NULL,
  KEY `ID` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=cp1251 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `c_map_db`
--

INSERT INTO `c_map_db` (`id`, `name`, `width`, `height`, `bg`, `img`, `smob`, `sobj`) VALUES
(1, 'MAP_ONE', 2410, 2410, 'green', 'img/back.png', 30, 15);

-- --------------------------------------------------------

--
-- Структура таблицы `c_mob_db`
--

CREATE TABLE IF NOT EXISTS `c_mob_db` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `width` int(10) NOT NULL DEFAULT '62',
  `height` int(10) NOT NULL DEFAULT '94',
  `step` int(10) NOT NULL DEFAULT '40',
  `bg` varchar(56) NOT NULL,
  `speed` int(10) NOT NULL DEFAULT '600',
  `allhp` int(10) NOT NULL,
  `mobdmg` int(10) NOT NULL,
  `armor` int(10) NOT NULL,
  `mobexp` int(10) NOT NULL,
  `miss` int(10) NOT NULL,
  `mapn` varchar(25) NOT NULL,
  KEY `ID` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=cp1251 AUTO_INCREMENT=3 ;

--
-- Дамп данных таблицы `c_mob_db`
--

INSERT INTO `c_mob_db` (`id`, `name`, `width`, `height`, `step`, `bg`, `speed`, `allhp`, `mobdmg`, `armor`, `mobexp`, `miss`, `mapn`) VALUES
(1, 'Mob1', 62, 94, 40, 'file/img/mob/mob.gif', 1300, 1800, 50, 5, 100, 2, 'MAP_ONE'),
(2, 'Mob2', 62, 94, 40, 'file/img/mob/mob1.gif', 1500, 2500, 250, 15, 260, 10, 'MAP_ONE');

-- --------------------------------------------------------

--
-- Структура таблицы `c_obj_db`
--

CREATE TABLE IF NOT EXISTS `c_obj_db` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `bg` varchar(50) NOT NULL,
  `width` int(10) NOT NULL DEFAULT '50',
  `height` int(10) NOT NULL DEFAULT '50',
  `allhp` int(10) NOT NULL,
  `mapn` varchar(25) NOT NULL,
  KEY `ID` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=cp1251 AUTO_INCREMENT=11 ;

--
-- Дамп данных таблицы `c_obj_db`
--

INSERT INTO `c_obj_db` (`id`, `name`, `bg`, `width`, `height`, `allhp`, `mapn`) VALUES
(1, 'Obj1', 'file/img/obj/t1.png', 117, 150, 155, 'MAP_ONE'),
(2, 'Obj2', 'file/img/obj/t2.png', 112, 144, 250, 'MAP_ONE'),
(3, 'Obj3', 'file/img/obj/t3.png', 99, 133, 200, 'MAP_ONE'),
(4, 'Obj4', 'file/img/obj/t4.png', 112, 156, 150, 'MAP_ONE'),
(5, 'Obj5', 'file/img/obj/t5.png', 183, 155, 290, 'MAP_ONE'),
(6, 'Obj6', 'file/img/obj/t6.png', 56, 88, 30, 'MAP_ONE'),
(7, 'Obj7', 'file/img/obj/t7.png', 55, 57, 50, 'MAP_ONE'),
(8, 'Obj8', 'file/img/obj/t8.png', 71, 52, 72, 'MAP_ONE'),
(9, 'Obj9', 'file/img/obj/t9.png', 96, 121, 210, 'MAP_ONE'),
(10, 'Obj10', 'file/img/obj/t10.png', 99, 149, 130, 'MAP_ONE');

-- --------------------------------------------------------

--
-- Структура таблицы `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(35) COLLATE cp1251_bin NOT NULL,
  `text` text COLLATE cp1251_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=cp1251 COLLATE=cp1251_bin AUTO_INCREMENT=7 ;

--
-- Дамп данных таблицы `feedback`
--

INSERT INTO `feedback` (`id`, `email`, `text`) VALUES
(1, 'lolpikds@mail.ru', 'hi, My name ... I have a question for you'),
(2, 'lolpikds@mail.ru', 'dasdhi, My name ... I have a question for you'),
(3, 'lolpikds@mail.ru', 'fekoz, hellow ^^,\r\nasdsadasdsadsadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\r\nadsda'),
(4, 'lolpikds@mail.ru', 'fekoz, hellow ^^,\r\nasdsadasdsadsadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\r\nadsda'),
(5, 'dsdsadsad@fgh.gbhn', 'dsdsadsad'),
(6, 'lolpikds@mail.ru', 'aasdasdad');

-- --------------------------------------------------------

--
-- Структура таблицы `g_user_re`
--

CREATE TABLE IF NOT EXISTS `g_user_re` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(24) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `type` int(5) NOT NULL DEFAULT '0',
  `one_ch_code` varchar(50) NOT NULL,
  `two_ch_code` varchar(50) NOT NULL,
  KEY `ID` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=53 ;

--
-- Дамп данных таблицы `g_user_re`
--

INSERT INTO `g_user_re` (`id`, `name`, `email`, `pass`, `type`, `one_ch_code`, `two_ch_code`) VALUES
(50, 'dsdsadsad2', 'dsdsadsad2@fg.hgj', 'dsdsadsad2', 0, '', ''),
(51, 'wwwwww', 'wwwwww@hgj.ghjhg', 'wwwwww', 0, 'wwwwww/wwwwww', ''),
(52, '5656565', '5656565@5656565.das', '5656565', 0, '5656565/5656565', ''),
(47, 'hfgh', 'wqewqew', 'hgjghj', 0, '', ''),
(48, 'eeeeeeeeeee', 'eeeeeeeeeee@e.gbh', 'eeeeeeeeeee', 0, 'eeeeeeeeeee/eeeeeeeeeee', ''),
(49, 'dsdsadsad', 'dsdsadsad@dsdad.ru', 'dsdsadsad', 0, 'dsdsadsad/dsdsadsad', ''),
(45, 'fekoz', 'fekoz@fekoz.fekoz', 'fekoz', 0, 'fekoz/fekoz', '');

-- --------------------------------------------------------

--
-- Структура таблицы `test`
--

CREATE TABLE IF NOT EXISTS `test` (
  `id` int(10) NOT NULL,
  `poset` int(110) NOT NULL DEFAULT '100',
  `date` varchar(30) COLLATE cp1251_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=cp1251 COLLATE=cp1251_bin;

--
-- Дамп данных таблицы `test`
--

INSERT INTO `test` (`id`, `poset`, `date`) VALUES
(1, 106, 'Monday'),
(2, 109, 'Tuesday'),
(3, 185, 'Wednesday'),
(4, 106, 'Thursday'),
(5, 104, 'Friday'),
(6, 107, 'Saturday'),
(7, 122, 'Sunday'),
(8, 56, 'reguser');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
