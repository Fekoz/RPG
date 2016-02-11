var engine;
engine = (function(){
	//console.clear();
	//console.log("%cClose the console", "color: red; font-style: italic; font-size:38px; text-shadow: 2px 2px 5px black, 0 0 1em orange;");
	//console.log("%cEither you will have problems with the site", "color: red; font-style: italic; font-size:25px; text-shadow: 2px 2px 5px black, 0 0 1em orange;");
	/**********MAP*******************/
	var map = {
		'name':'Map',
		'width': 2410,
		'height': 2410,
		'slotSize': 40,
		'bg': 'green',
		'back_n': 'file/img/map/back_n.png',
		'markup': [
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]		
		]
	};
	/**********HERO****************/
	var char = {
		'id': 'load_name..',
		'width': 67,
		'height': 94,
		'step': 40,
		'bg': 'file/img/mob/mob1.gif',
		'angle': 4,
		'speed': 700,
		'aspeed': 700,
		'position': [getRandomInt(5,50), getRandomInt(5,50)],
		'spell': 1,
		'prirost': 1,
		
		'death': 3,
		'attack': 0,
		'skills': 1,
		'inventory': 1,
		
		'hp': 1,
		'mp': 1,
		'allhp':0,
		'allmp':0,
	
		'str': 5,
		'agi': 1,
		'int': 1,
		'dmg': 0,
		'armor': 0,
		'miss': 0,
	
		'critrate': 0,
		'crit': 0,
		'exp': 0,
		
		'death': 0,
		'p1': 1,
		'p2': 0,
		'p3': 0,
		'p4': 0
	};
	char.death = 3;
	
	$positionY = char.position[0];
	$positionX = char.position[1];

	$('.from_name').html(char.id);
	$char = $('.char');
	$char.css({
		'width': char.width,
		'height': char.height,
		'position': 'absolute',
		'left': char.step * $positionX,
		'top': char.step * $positionY,
		'marginTop': -char.height + (map.slotSize / 2),
		'backgroundImage': 'url(' + char.bg + ')'
	});
	/*******************************/
	$(".log").ajaxError(
		function(){
			console.log('connect db:error/down');
		}
	);
	
	$(".log").ajaxSuccess(
	  function(){
		console.log('connect db:success');
	  }
	);
	
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	$mob = $('.mob');
	var fmob = [];
	
	$obj = $('.obj');
	var obj =[];
	
	var MAX_MOBS=0;
	
	$.getJSON('json_game.php', function(data) {
		MAX_MOBS=data.map.smob;
		map.name = data.map.name;
		loadchar(data);
		var 
			a=5,	b=50,
			c=50,
		q,w;
		
		for(var i=1; i<=data.map.smob; i++) {
			q = getRandomInt(a,b);
			w = getRandomInt(a,c);
			
			if(map.markup[q][w] != 0) {
				continue;
			} else {
				var rd;
				if(map.name='MAP_ONE') rd = getRandomInt(1,3);
				else rd = getRandomInt(1,3);
				fmob[i] = {
					'id': data.mobs[rd].name+i,
					'width': new Number(data.mobs[rd].width),
					'height': new Number(data.mobs[rd].height),
					'step': new Number(data.mobs[rd].step),
					'bg': data.mobs[rd].bg,
					'speed': new Number(data.mobs[rd].speed),
					'pos': [q, w],
					'allhp': new Number(data.mobs[rd].allhp),
					'heal': new Number(data.mobs[rd].allhp),
					'dmg': new Number(data.mobs[rd].dmg),
					'armor': new Number(data.mobs[rd].armor),
					'agr': 0,
					'miss': new Number(data.mobs[rd].miss),
					'angle': 0,
					'death': 0,
					'magr': 0,
					'mgo': 0,
					'type':rd
				};
				$mob.append('<div class="mob'+i+' click_mob"><div style="position:absolute;top:-30px;color:red;">Mob'+i+'<div class="progbarr progressmob'+i+'"><div></div></div></div></div>');
				$mob[i] = $('.mob'+i);
				$mob[i].css({
					'width': fmob[i].width,
					'height': fmob[i].height,
					'position': 'absolute',
					'left': fmob[i].step * fmob[i].pos[1],
					'top': fmob[i].step * fmob[i].pos[0],
					'marginTop': -fmob[i].height + (map.slotSize / 2),
					'backgroundImage': 'url(' + fmob[i].bg + ')',
					'z-index': fmob[i].pos[0]
				});
				map.markup[fmob[i].pos[0]][fmob[i].pos[1]] = fmob[i].id;
				hpbarmob(i);
			}
		}
		
		for(var i=1; i<=data.map.sobj; i++) {			
			q = getRandomInt(a,b);
			w = getRandomInt(a,c);
			
			if(map.markup[q][w] != 0) {
				continue;
			} else {
				if(map.name='MAP_ONE') rd = getRandomInt(1,11);
				else rd = getRandomInt(1,3);
				obj[i] = {
					'id': data.object[rd].name+i,
					'pos': [q,w],
					'bg': data.object[rd].backg,
					'width': new Number(data.object[rd].width),
					'height': new Number(data.object[rd].height),
					'allhp': new Number(data.object[rd].allhp)
				};
				$obj.append('<div class="obj'+i+'"></div>');
				$obj[i] = $('.obj'+i);
				$obj[i].css({
					'width': obj[i].width,
					'height': obj[i].height,
					'position': 'absolute',
					'left': 40 * obj[i].pos[1],
					'top': 40 * obj[i].pos[0],
					'marginTop': -obj[i].height + (map.slotSize / 2),
					'backgroundImage': 'url(' + obj[i].bg + ')',
					'z-index': obj[i].pos[0]
				});
				var lmap = data.object[rd].width/40;
				map.markup[obj[i].pos[0]][obj[i].pos[1]] = obj[i].id;		
				if(lmap <= 3.6 && lmap > 2.4) map.markup[obj[i].pos[0]][obj[i].pos[1]+1] = obj[i].id;
				else if(lmap > 3.6) map.markup[obj[i].pos[0]][obj[i].pos[1]+1] = obj[i].id, map.markup[obj[i].pos[0]][obj[i].pos[1]-1] = obj[i].id;
			}
		}
	}).complete(function() {
		maps("#mark1");
		setcam();
		moveProgressBar();
		char.death=0;
		setInterval(main, 5000);/**6500 OR 3500**/
		in_load_game();
		charPosition();
	});
	
		function loadchar(data){
			char.id = data.char.name;
				$('.from_name').html(char.id);
			char.bg = data.char.bg;
			char.str =
				new Number(data.char.str);
			char.agi =
				new Number(data.char.agi);
			char.int =
				new Number(data.char.int);
			char.spell =
				new Number(data.char.spell);
			char.prirost =
				new Number(data.char.prirost);
			char.skills =
				new Number(data.char.skills);
			char.hp =
				new Number(data.char.hp);
			char.mp =
				new Number(data.char.mp);
			char.miss =
				new Number(data.char.miss);
			char.critrate =
				new Number(data.char.critrate);
			char.crit =
				new Number(data.char.crit);
			char.speed =
				new Number(data.char.speed);
			char.aspeed =
				new Number(data.char.aspeed);
			char.exp =
				new Number(data.char.exp);
			
				$char.css({
					'backgroundImage': 'url(' + char.bg + ')',
					'z-index':$positionY
				});
			
			if(char.spell == 1) char.dmg = char.str*char.prirost;
			else if(char.spell == 2) char.dmg = char.agi*char.prirost;
			else if(char.spell == 3) char.dmg = char.int*char.prirost;
			else char.dmg = char.agi*char.prirost;

			char.allhp = char.str*13;
			char.allmp = char.int*13;

			char.armor = char.agi*0.15;
			
			map.markup[char.position[0]][char.position[1]] = char.id;
		}
	
	
	/***********CRATEMAP**************/
	function maps(selector) {
		if (selector === "#mark1") {
			$(selector).append("<div style='width: 2700px; height: 2700px; float: left; background: green; background-image:url(" + map.back_n + ");' name='back'></div>");
		}
	}
	/*******************************/
	function ddmg(txt,color,size,pos) { 
		switch(size) {
				case 1: 
				size = 340; 
					break;
				case 2: 
					size = 300; 
					break;	
				case 3: 
					size = 260; 
					break;
		}

		switch(pos) {
				case 1: 
					pos = 60; 
					break;
				case 2: 
					pos = -15; 
					break;	
				case 3: 
					pos = -150; 
					break;
		}
		$('#dmglog').css({
			'position':'absolute',
			'font-weight':size,
			'left': $positionX * 40+pos,
			'top': $positionY * 40-150,
			'color': color,
		});
		$('#dmglog').html(txt);
		$('#dmglog').fadeIn(400, function() {
			$(this).fadeOut(950, function() {
				$(this).html('');
			});
		});
		$('#dmglog').fadeToggle("slow");
		return false;
	}

	
	function hpchar(hp) {
		char.hp-=hp;
		moveProgressBar();
		if((char.hp==0 || char.hp < 0)) { 
			char.death = 3;
			char.hp=0;
			log_chat(2,'<p><span style="color:blue"> You dead!</span></p>');
			$char.css({ 'backgroundPosition': '0px ' + '0px'});
			char_save();
		}
	}
	
	function log_chat(a,f) {
		switch(a) {
			case 1:
				$('#tab-1').append(f);
				var scr = $('#tab-2').scrollTop();
					scr = scr + 30;
					$('#tab-2').animate({
						scrollTop: scr
					}, 200);
				break;
			case 2:
				$('#tab-2').append(f);
				var scr = $('#tab-2').scrollTop();
					scr = scr + 30;
					$('#tab-2').animate({
						scrollTop: scr
					}, 200);
				break;
			case 3:
				$('#tab-3').append(f);
				var scr = $('#tab-3').scrollTop();
					scr = scr + 30;
					$('#tab-3').animate({
						scrollTop: scr
					}, 200);
				break;
			case 4:
				$('#tab-4').append(f);
				var scr = $('#tab-4').scrollTop();
					scr = scr + 30;
					$('#tab-4').animate({
						scrollTop: scr
					}, 200);
				break;
		}
	}
	
	function cpoint(x, y, r) {
		var ox, oy;
		var tx, ty;
		ox = $positionX;
		oy = $positionY;
		tx = ox-x;
		ty = oy-y;
		if (((tx < r) && (tx > -r)) && ((ty < r) && (ty > -r))) {
			return true;
		}
		return false;
	};
	
	function checkposmobs() {
		for(var i=1;i<=MAX_MOBS;i++) {
			if(fmob[i] == undefined) continue;
			if(fmob[i] !== undefined && cpoint(fmob[i].pos[1],fmob[i].pos[0],4)) {
				if(fmob[i].mgo != 1) movemobs(0,$positionX,$positionY,fmob[i].pos[1],fmob[i].pos[0],i);
			}
		}
		return false;
	};
	
	function mpoint(i, x, y, r) {
		var ox, oy;
		var tx, ty;
		ox = fmob[i].pos[1];
		oy = fmob[i].pos[0];
		tx = ox-x;
		ty = oy-y;
		if (((tx < r) && (tx > -r)) && ((ty < r) && (ty > -r))) {
			return true;
		}
		return false;
	};
	
	function mobposmobs(id) {
		var q = [1];
		for(var j=1;j<=MAX_MOBS;j++) {
			if(fmob[j] == undefined) continue;
			if(fmob[j] !== undefined && mpoint(id,fmob[j].pos[1],fmob[j].pos[0],4)) {
				if(fmob[id].type != fmob[j].type && fmob[j].mgo != 1 && !cpoint(fmob[j].pos[1],fmob[j].pos[0],4) && !cpoint(fmob[id].pos[1],fmob[id].pos[0],4)){					
					movemobs(id, fmob[id].pos[1], fmob[id].pos[0], fmob[j].pos[1], fmob[j].pos[0], j);
					//movemobs(j, fmob[j].pos[1], fmob[j].pos[0], fmob[id].pos[1], fmob[id].pos[0], id);
				}
			}
		}
		return false;
	};
	
	function movemobs(imob,xg,yg,xm,ym,id) {
		if(fmob[id].mgo !=1 && char.death !=3 && fmob[id].death != 3 && fmob[id].heal>0) {
			var x0=Math.sqrt((xg-xm)*(xg-xm)+(yg-ym)*(yg-ym));
			var f=0,z=0;
			var min=x0;
			var imin=0;
			var jmin=0;
			var x1=0,y1=0;
			var tmp=0;
			for (var i=-1;i<=1;i++) {
				for (var j=-1;j<=1;j++) {
					x1=xm+i;
					y1=ym+j;
					if(map.markup[y1][x1] == 0) {
							tmp=Math.sqrt((xg-x1)*(xg-x1)+(yg-y1)*(yg-y1));
						if (tmp<min) {
							min=tmp;
							imin=i;
							jmin=j;
						}
					}
				}
			}
			xm=xm+imin;
			ym=ym+jmin;
			if(imin == 0 && jmin == -1) animatemob(id,3);
				else if(imin == 1 && jmin == -1) animatemob(id,6);
				else if(imin == 1 && jmin == 0) animatemob(id,1);
				else if(imin == 1 && jmin == 1) animatemob(id,8);
				else if(imin == 0 && jmin == 1) animatemob(id,4);
				else if(imin == -1 && jmin == 1) animatemob(id,7);
				else if(imin == -1 && jmin == 0) animatemob(id,2);
				else if(imin == -1 && jmin == -1) animatemob(id,5);
				else {
				delete imin;
				delete jmin;
				return false;
			}
			delete imin;
			delete jmin;
			
			map.markup[fmob[id].pos[0]][fmob[id].pos[1]] = 0;
			fmob[id].pos[0]= ym;
			fmob[id].pos[1]= xm;
			map.markup[ym][xm] = fmob[id].id;
			
			if(cpoint(fmob[id].pos[1],fmob[id].pos[0],2)) {
				fmob[id].mgo=1;
				setTimeout(function() { 
					fmob[id].mgo=0; 
					mobattack(id);
				}, fmob[id].speed);
			}else movemobs(imob,xg,yg,xm,ym,id);
			
			if(imob != 0 && !cpoint(fmob[id].pos[1],fmob[id].pos[0],4) && !cpoint(fmob[imob].pos[1],fmob[imob].pos[0],4)) {
				if(mpoint(imob,fmob[id].pos[1],fmob[id].pos[0],2) && mpoint(id,fmob[imob].pos[1],fmob[imob].pos[0],2)){

						fmob[id].mgo=1, fmob[imob].mgo=1;
						var allspeed =fmob[id].speed>=fmob[id].speed ? fmob[imob].speed : fmob[id].speed;
						setTimeout(function() { 
							fmob[id].mgo=0, fmob[imob].mgo=0; 
							mobattackmob(id,imob);
							mobattackmob(imob,id);
						},allspeed);
				}else movemobs(imob,xg,yg,xm,ym,id);
			}
		}else return false;
	};
	
	
	function mobattackmob(i,id){
		if(fmob[i].death != 3 && fmob[id].death != 3) {
			var s = fmob[i].dmg - fmob[id].armor;
			var j = fmob[i].dmg/100 * 10;
			var z = getRandomInt(0,j);
			s=(s+z)/2;
			s=s.toFixed(1);
			mobhp(s,id);
			log_chat(4,'<p>MOB['+i+'] (attack) MOB['+id+']: <span style="color:blue">'+s+'</span></p>');
			fmob[i].mgo=1;
			var mx=0 , my=0;
			my = fmob[i].pos[1] - fmob[id].pos[1]; 
			mx = fmob[i].pos[0] - fmob[id].pos[0];
				if(my== -1 && mx== -1) { $mob[i].css({ 'backgroundPosition': '-147px ' + '-192px'}); }
					else if(my== -1 && mx== 0) { $mob[i].css({ 'backgroundPosition': '-147px ' + '-192px'}); }
					else if(my== -1 && mx== 1) { $mob[i].css({ 'backgroundPosition': '-147px ' + '-288px'}); }
					/****/
					else if(my== 0 && mx== -1) { $mob[i].css({ 'backgroundPosition': '-145px ' + '0px'}); }
					else if(my== 0 && mx== 0) { $mob[i].css({ 'backgroundPosition': '-145px ' + '0px'}); }
					else if(my== 0 && mx== 1) { $mob[i].css({ 'backgroundPosition': '-147px ' + '-288px'}); }
					/****/
					else if(my== 1 && mx== -1) { $mob[i].css({ 'backgroundPosition': '-145px ' + '0px'}); }
					else if(my== 1 && mx== 0) { $mob[i].css({ 'backgroundPosition': '-145px ' + '-96px'}); }
					else if(my== 1 && mx== 1) { $mob[i].css({ 'backgroundPosition': '-145px ' + '-96px'}); }
					else { $mob[i].css({ 'backgroundPosition': '0px' + '0px'}); }
					setTimeout(function() {
						fmob[i].mgo=0;
						mobattackmob(i,id);
					}, fmob[i].speed);
			if(!cpoint(fmob[id].pos[1],fmob[id].pos[0],4) && !cpoint(fmob[i].pos[1],fmob[i].pos[0],4)) {
				if(!mpoint(i,fmob[id].pos[1],fmob[id].pos[0],2) && mpoint(id,fmob[i].pos[1],fmob[i].pos[0],4)){
					movemobs(id,fmob[id].pos[1],fmob[id].pos[0],fmob[i].pos[1],fmob[i].pos[0],i);
					movemobs(i,fmob[i].pos[1],fmob[i].pos[0],fmob[id].pos[1],fmob[id].pos[0],id);
				}
			}else { $mob[i].css({ 'backgroundPosition': '0px ' + '0px'}); log_chat(4,'<p>MOB (phrase): I can not see it.. Where did it go?</p>'); fmob[i].mgo=0; return false; }
		}else {
			if(($mob[i].is(':animated') === false)){
				$mob[i].css({ 'backgroundPosition': '0px ' + '0px'});
				fmob[i].mgo=0;
			}
			return false;
		}
	};
	
	function mobattack(i) {
		if(char.death !=3){
			if(fmob[i].death != 3) {
				var m = getRandomInt(0,100);
				if(m <= char.miss) {
					ddmg('MISS','red',2,2);
					log_chat(2,'<p>MOB['+i+'] (attack): <span style="color:red">MISS</span> by you</p>');
				}else {
					var s = fmob[i].dmg - char.armor;
					var j = fmob[i].dmg/100 * 10;
					var z = getRandomInt(0,j);
						s= s+z;
						s=s.toFixed(1);
						ddmg('-'+s,'red',3,2);
						hpchar(s);
						log_chat(2,'<p>MOB['+i+'] (attack): <span style="color:blue">'+s+'</span> by you</p>');
				}
				
				if(cpoint(fmob[i].pos[1],fmob[i].pos[0],2)) {
					fmob[i].mgo=1;
					var mx=0 , my=0;
					my = fmob[i].pos[1] - $positionX;
					mx = fmob[i].pos[0] - $positionY;
					if(my== -1 && mx== -1) { $mob[i].css({ 'backgroundPosition': '-147px ' + '-192px'}); }
						else if(my== -1 && mx== 0) { $mob[i].css({ 'backgroundPosition': '-147px ' + '-192px'}); }
						else if(my== -1 && mx== 1) { $mob[i].css({ 'backgroundPosition': '-147px ' + '-288px'}); }
						/****/
						else if(my== 0 && mx== -1) { $mob[i].css({ 'backgroundPosition': '-145px ' + '0px'}); }
						else if(my== 0 && mx== 0) { $mob[i].css({ 'backgroundPosition': '-145px ' + '0px'}); }
						else if(my== 0 && mx== 1) { $mob[i].css({ 'backgroundPosition': '-147px ' + '-288px'}); }
						/****/
						else if(my== 1 && mx== -1) { $mob[i].css({ 'backgroundPosition': '-145px ' + '0px'}); }
						else if(my== 1 && mx== 0) { $mob[i].css({ 'backgroundPosition': '-145px ' + '-96px'}); }
						else if(my== 1 && mx== 1) { $mob[i].css({ 'backgroundPosition': '-145px ' + '-96px'}); }
						else { $mob[i].css({ 'backgroundPosition': '0px' + '0px'}); }
					setTimeout(function() { 
						fmob[i].mgo=0;
						mobattack(i);
					}, fmob[i].speed);/*********2.4********/
					
				}else if(!cpoint(fmob[i].pos[1],fmob[i].pos[0],2) && cpoint(fmob[i].pos[1],fmob[i].pos[0],4)) {
					movemobs(0,$positionX,$positionY,fmob[i].pos[1],fmob[i].pos[0],i);
				}else { 
					$mob[i].css({ 'backgroundPosition': '0px ' + '0px'}); 
					log_chat(4,'<p>MOB (phrase): I can not see it.. Where did it go?</p>'); 
					fmob[i].mgo=0; 
					return false; 
				}
			}else { 
				$mob[i].css({ 'backgroundPosition': '0px ' + '0px'}); 
				log_chat(4,'<p>MOB (phrase): I can not see it.. Where did it go?</p>'); 
				fmob[i].mgo=0; 
				return false; 
			}
		}else { 
			$mob[i].css({ 'backgroundPosition': '0px ' + '0px'}); 
			log_chat(4,'<p>MOB (phrase): I can not see it.. Where did it go?</p>'); 
			fmob[i].mgo=0; 
			return false; 
		}
	};
	
	function animatemob(i,id) {
		switch (id) {
			case 1:
				$mob[i].animate({
					'marginLeft': '-=' + -fmob[i].step
				}, fmob[i].speed);
				$mob[i].css({ 
					'backgroundPosition': '-71px ' + '-580px',
					'z-index': fmob[i].pos[0]
				});
				break;
				
			case 2:
				$mob[i].animate({
					'marginLeft': '+=' + -fmob[i].step
				}, fmob[i].speed);
				$mob[i].css({ 
					'backgroundPosition': '-71px ' + '-192px',
					'z-index': fmob[i].pos[0]
				});
				break;
				
			case 3:
				$mob[i].animate({
					'marginTop': '+=' + -fmob[i].step
				}, fmob[i].speed);
				$mob[i].css({ 
					'backgroundPosition': '-71px ' + '-384px',				
					'z-index': fmob[i].pos[0]
				});
				break;
				
			case 4:
				$mob[i].animate({
					'marginTop': '-=' + -fmob[i].step
				}, fmob[i].speed);
				$mob[i].css({ 
					'backgroundPosition': '-71px ' + '0px',
					'z-index': fmob[i].pos[0]
				});
				break;
				
			case 5:
				$mob[i].animate({
					'marginTop': '+=' + -fmob[i].step,
					'marginLeft': '+=' + -fmob[i].step
				}, fmob[i].speed);
				$mob[i].css({ 
					'backgroundPosition': '-71px ' + '-288px',
					'z-index': fmob[i].pos[0]
				});
				break;
				
			case 6:
				$mob[i].animate({
					'marginTop': '+=' + -fmob[i].step,
					'marginLeft': '-=' + -fmob[i].step
				}, fmob[i].speed);
				$mob[i].css({ 
					'backgroundPosition': '-71px ' + '-480px',
					'z-index': fmob[i].pos[0]
				});
				break;			
				
			case 7:
				$mob[i].animate({
					'marginTop': '-=' + -fmob[i].step,
					'marginLeft': '+=' + -fmob[i].step
				}, fmob[i].speed);
				$mob[i].css({ 
					'backgroundPosition': '-71px ' + '-96px',
					'z-index': fmob[i].pos[0]
				});
				break;
				
			case 8:
				$mob[i].animate({
					'marginTop': '-=' + -fmob[i].step,
					'marginLeft': '-=' + -fmob[i].step,
				}, fmob[i].speed);
				$mob[i].css({ 
					'backgroundPosition': '-71px ' + '-677px',
					'z-index': fmob[i].pos[0]
				});
				break;			
				
			default: return false;
		}
	}
	
	$('body').mousedown(function(e) {
		var $c = e.which;
		if($c == 2) { return false; }
	});
	
	$('body').keydown(function(e) {
		e.preventDefault();
		var $key = e.which;
		/**>**/
		if ($key == 68 && ($char.is(':animated') === false)) { gochar(1); }
		/**<**/
		else if ($key == 65 && ($char.is(':animated') === false)) { gochar(2); }
		/**^**/
		else if ($key == 87 && ($char.is(':animated') === false)) { gochar(3); }
		/**v**/
		else if ($key == 83 && ($char.is(':animated') === false)) { gochar(4); }
		/**>^*/
		else if ($key == 69 && ($char.is(':animated') === false)) { gochar(5); }
		/*^<**/
		else if ($key == 81 && ($char.is(':animated') === false)) { gochar(6); }
		/*v<**/
		else if ($key == 90 && ($char.is(':animated') === false)) { gochar(7); }
		/**>v*/
		else if ($key == 67 && ($char.is(':animated') === false)) { gochar(8); }
		/**o**/
		else if ($key == 32 && ($char.is(':animated') === false)) { gochar(9); }

		else if ($key >36 && $key <41 || $key >32 && $key <37 || $key == 17) { return false; }
	});
	
	function gochar(id) {
		if(char.attack == 0  && ($char.is(':animated') === false)  && char.death !== 3) {
			switch(id) {
				case 1:
					if (map.markup[$positionY][$positionX + 1] === 0 && ($char.is(':animated') === false)) {
						map.markup[$positionY][$positionX] = 0;
						$positionX = ++$positionX;
						map.markup[$positionY][$positionX] = char.id;
						$char.animate({
							'marginLeft': '-=' + -char.step,
						}, char.speed);
						$char.css({ 'backgroundPosition': '-71px ' + '-580px'});
						charPosition();
						char.attack=1;
						setTimeout(gocf, char.speed);
						char.angle = id;
					}else $char.css({ 'backgroundPosition': '0px ' + '-580px'});
					break;
				case 2:
					if (map.markup[$positionY][$positionX - 1] === 0 && ($char.is(':animated') === false)) {
						map.markup[$positionY][$positionX] = 0;
						$positionX = --$positionX;
						map.markup[$positionY][$positionX] = char.id;
						$char.animate({
							'marginLeft': '+=' + -char.step,
						}, char.speed);
						$char.css({ 'backgroundPosition': '-71px ' + '-192px'});
						charPosition();
						char.attack=1;
						setTimeout(gocf, char.speed);
						char.angle = id;
					}else $char.css({ 'backgroundPosition': '0px ' + '-192px'});
					break;
				case 3:
					if (map.markup[$positionY - 1][$positionX] === 0 && ($char.is(':animated') === false)) {
						map.markup[$positionY][$positionX] = 0;
						$positionY = --$positionY;
						map.markup[$positionY][$positionX] = char.id;
						$char.animate({
							'marginTop': '+=' + -char.step,
						}, char.speed);
						$char.css({ 'backgroundPosition': '-71px ' + '-384px'});
						charPosition();
						char.attack=1;
						setTimeout(gocf, char.speed);
						$char.css({'z-index':$positionY});
						char.angle = id;
					}else $char.css({ 'backgroundPosition': '0px ' + '-384px'});
					break;
				case 4:
					if (map.markup[$positionY + 1][$positionX] === 0 && ($char.is(':animated') === false)) {
						map.markup[$positionY][$positionX] = 0;
						$positionY = ++$positionY;
						map.markup[$positionY][$positionX] = char.id;
						$char.animate({
							'marginTop': '-=' + -char.step,
						}, char.speed);
						$char.css({ 'backgroundPosition': '-71px ' + '0px'});
						charPosition();
						char.attack=1;
						setTimeout(gocf, char.speed);
						$char.css({'z-index':$positionY});
						char.angle = id;
					}else $char.css({ 'backgroundPosition': '0px ' + '0px'});
					break;
				case 5:
					if (map.markup[$positionY - 1][$positionX] === 0 && map.markup[$positionY][$positionX + 1] === 0 && ($char.is(':animated') === false)) {
						map.markup[$positionY][$positionX] = 0;
						$positionY = --$positionY;
						$positionX = ++$positionX;
						map.markup[$positionY][$positionX] = char.id;
						$char.animate({
							'marginTop': '+=' + -char.step,
							'marginLeft': '-=' + -char.step,
						}, char.speed);/**+257**/
						$char.css({ 'backgroundPosition': '-71px ' + '-480px'});
						charPosition();
						char.attack=1;
						setTimeout(gocf, char.speed);/**+257**/
						$char.css({'z-index':$positionY});
						char.angle = id;
					}else $char.css({ 'backgroundPosition': '0px ' + '-480px'});
					break;
				case 6:
					if (map.markup[$positionY - 1][$positionX] === 0 && map.markup[$positionY][$positionX - 1] === 0 && ($char.is(':animated') === false)) {
						map.markup[$positionY][$positionX] = 0;
						$positionY = --$positionY;
						$positionX = --$positionX;
						map.markup[$positionY][$positionX] = char.id;
						$char.animate({
							'marginTop': '+=' + -char.step,
							'marginLeft': '+=' + -char.step,
						}, char.speed);
						$char.css({ 'backgroundPosition': '-71px ' + '-288px'});
						charPosition();
						char.attack=1;
						setTimeout(gocf, char.speed);
						$char.css({'z-index':$positionY});
						char.angle = id;
					}else $char.css({ 'backgroundPosition': '0px ' + '-288px'});
					break;
				case 7:
					if (map.markup[$positionY + 1][$positionX] === 0 && map.markup[$positionY][$positionX - 1] === 0 && ($char.is(':animated') === false)) {
						map.markup[$positionY][$positionX] = 0;
						$positionY = ++$positionY;
						$positionX = --$positionX;
						map.markup[$positionY][$positionX] = char.id;
						$char.animate({
							'marginTop': '-=' + -char.step,
							'marginLeft': '+=' + -char.step,
						}, char.speed);
						$char.css({ 'backgroundPosition': '-71px ' + '-96px'});
						charPosition();
						char.attack=1;
						setTimeout(gocf, char.speed);
						$char.css({'z-index':$positionY});
						char.angle = id;
					}else $char.css({ 'backgroundPosition': '0px ' + '-96px'});
					break;
				case 8:
					if (map.markup[$positionY + 1][$positionX] === 0 && map.markup[$positionY][$positionX + 1] === 0 && ($char.is(':animated') === false)) {
						map.markup[$positionY][$positionX] = 0;
						$positionY = ++$positionY;
						$positionX = ++$positionX;
						map.markup[$positionY][$positionX] = char.id;
						$char.animate({
							'marginTop': '-=' + -char.step,
							'marginLeft': '-=' + -char.step,
						}, char.speed);
						$char.css({ 'backgroundPosition': '-71px ' + '-677px'});
						charPosition();
						char.attack=1;
						setTimeout(gocf, char.speed);
						$char.css({'z-index':$positionY});
						char.angle = id;
					}else $char.css({ 'backgroundPosition': '0px ' + '-677px'});
					break;
				case 9:
					var x=0 , y=0;
					for(var i=1;i<=MAX_MOBS;i++) {
						if(cpoint(fmob[i].pos[1],fmob[i].pos[0],2)) {
							y = $positionX - fmob[i].pos[1];
							x = $positionY - fmob[i].pos[0];
							charattack(i);
							if(y== -1 && x== -1) { attsp(4); return false; }
								else if(y== -1 && x== 0) { attsp(8); return false; }
								else if(y== -1 && x== 1) { attsp(5); return false; }
								/****/
								else if(y== 0 && x== -1) { attsp(2); return false; }
								else if(y== 0 && x== 0) { attsp(char.angle); return false; }
								else if(y== 0 && x== 1) { attsp(1); return false; }
								/****/
								else if(y== 1 && x== -1) { attsp(7); return false; }
								else if(y== 1 && x== 0) { attsp(6); return false; }
								else if(y== 1 && x== 1) { attsp(3); return false; }
						}else { attsp(char.angle); } 
					}
					break;
			}
		}
	}
	
	function attsp(i){
		switch(i){
			case 1: case 5:/**^**/
				$char.css({ 'backgroundPosition': '-147px ' + '-288px'});
				char.attack=1;
				setTimeout(gocf, char.aspeed);
				break;
			case 2: case 7:/**v**/
				$char.css({ 'backgroundPosition': '-145px ' + '0px'});
				char.attack=1;
				setTimeout(gocf, char.aspeed);
				break;
			case 3: case 6:/**^<**/
				$char.css({ 'backgroundPosition': '-145px ' + '-96px'});
				char.attack=1;
				setTimeout(gocf, char.aspeed);
				break;
			case 4: case 8:/**>v**/
				$char.css({ 'backgroundPosition': '-147px ' + '-192px'});
				char.attack=1;
				setTimeout(gocf, char.aspeed);
				break;
		}
		return false;
	}
	
	function charattack(i) {
			var q = getRandomInt(1,10);
			var w = (char.dmg/100) * q;
			var e = char.dmg - w;
			var s = e - fmob[i].armor;
			var z = getRandomInt(1,100);
				if(z <= char.crit) {
					var j = ((char.critrate - 100) / 100) * char.crit;
					var f = (s/100)*j;
					var s = s + f;
					s = s.toFixed(0);				
					ddmg('CRIT : '+s,'WHITE',1,1);
					log_chat(2,'<p>You hit (CRIT): <span style="color:red">'+s+'</span> on MOB['+i+']</p>');
				} else {
					s = s.toFixed(0);		
					log_chat(2,'<p>You hit: <span style="color:#d59595">'+s+'</span> MOB['+i+']</p>');
				}
			mobhp(s,i);
			return false;
	}
	
	function mobhp(hp,i) {
		fmob[i].heal-=hp;
		hpbarmob(i);
		if(fmob[i].heal == 0 || fmob[i].heal < 0) {
			fmob[i].death = 3;
			fmob[i].agr=0; 
			if(cpoint(fmob[i].pos[1],fmob[i].pos[0],5)){
				log_chat(2,'<p>You kill this Mob. Take drop ? (active button: <span style="color:blue">`F`</span>)</p>');
				ddmg('EXP:'+10,'white',2,2);
				char.exp += 10;
				char_save();
			}
			map.markup[fmob[i].pos[0]][fmob[i].pos[1]]=0;
			fmob[i].pos[0]=0;
			fmob[i].pos[1]=0;
			$mob[i].css('display','none');
		}
		return false;
	}
	
	
	
	function gocf() { 
		char.attack=0;
		setTimeout(gocf2, 100);
		if(char.hp == 0) char.attack=1, hpchar(0);
	}
		
	function gocf2() {
		if(char.attack != 1 ) {
			switch(char.angle) {
				case 1:
					$char.css({ 'backgroundPosition': '0px ' + '-580px'});
					break;
				case 2:
					$char.css({ 'backgroundPosition': '0px ' + '-192px'});
					break;
				case 3:
					$char.css({ 'backgroundPosition': '0px ' + '-384px'});
					break;
				case 4:
					$char.css({ 'backgroundPosition': '0px ' + '0px'});
					break;
				case 5:
					$char.css({ 'backgroundPosition': '0px ' + '-480px'});
					break;
				case 6:
					$char.css({ 'backgroundPosition': '0px ' + '-288px'});
					break;
				case 7:
					$char.css({ 'backgroundPosition': '0px ' + '-96px'});
					break;
				case 8:
					$char.css({ 'backgroundPosition': '0px ' + '-677px'});
					break;
			}
			setcam();
		}
	}
	
	function setcam(){
		var o = $char.offset();
		
		var r1 = o.top-470;
		var r2 = o.left-600;
		
		var f1 = o.top-r1;
		var f2 = o.left-r2;
		
		$('body,html').animate({
			scrollTop: r1,
			scrollLeft: r2
		}, 500);
		return false;
	}
	
	/**END CSS MOB**/
	function charPosition() {
		checkposmobs();
		return false;
	}
	
	function hpbarmob(i){
		var q = fmob[i].heal*100;
		var c = q/fmob[i].allhp;
		$('.progressmob'+i+' div').animate({width: c+'%'}, 500);
	}
		

	function moveProgressBar() {
		var crat = char.hp*100;
		var publ = crat/char.allhp;
		progressTotal = publ/2;
		
		if(progressTotal <=20/2) {
			$(".progress-wrap").css("background", "red");
		} else if(progressTotal >=80/2) {
			$(".progress-wrap").css("background", "green");
		} else {
			$(".progress-wrap").css("background", "yellow");
		}
        $('.progress-bar').stop().animate({
            left: (progressTotal).toFixed(0)
        },1500);
		return false;
	}
	
	function main(){
		var im,rnd = [1],j1,j2,jj;
		
		rnd[0] = getRandomInt(-5,5);
		rnd[1] = getRandomInt(-5,5);
		
		j1 = rnd[0];
		j2 = rnd[1];
		if(0>j1) j1*=-1;
		if(0>j2) j2*=-1;
		
		if(j1> j2) jj=j1;
		else jj=j2;
		
		im = getRandomInt(1,MAX_MOBS);
		if(fmob[im] == undefined) console.log(im);
		else {			
			rnd[0] += fmob[im].pos[1];
			rnd[1] += fmob[im].pos[0];
			
			if(fmob[im].death != 3) {
				if(fmob[im].mgo != 1) {
					movemobs(0,rnd[0],rnd[1],fmob[im].pos[1],fmob[im].pos[0],im);
					rnd[0]=false,rnd[1]=false;
					setTimeout(function() { 
						fmob[im].mgo=0;
						mobposmobs(im);
						$mob[im].css({ 'backgroundPosition': '0px ' + '0px'});
					}, jj * fmob[im].speed/2.5);
				}else return false;
			}else return false;
		}
	};
	
	function char_save(){
		var parse=JSON.stringify(char);
		$.ajax({
			type: "POST",
			url: 'save_char.php',
			data: "char_to_save="+parse,
			success: function(data){
				console.log(data);
			}
		});
	}
	
	function in_load_game(){
		$(".click_mob").click(function() {
			var click = $(this);
			var q = click.index()+1;
			if(fmob[q].death != 3){
				$('#open_window').html('<div id="tooltip"><span>Name: '+fmob[q].id+'<br><h2 style="color:red"> HP: '+fmob[q].heal+'|'+fmob[q].allhp+'</h2>Speed:'+fmob[q].speed+'<br>Dmg:'+fmob[q].dmg+'<br>Armor:'+fmob[q].armor+'<br>Miss:'+fmob[q].miss+'<br></span></div>');
				$('#tooltip').css({
					'left': 40 * fmob[q].pos[1]-50,
					'top': 40 * fmob[q].pos[0]-170,	
				});
				$('#tooltip').show(500);
				setTimeout('$("#tooltip").hide(600);',4000);
			}
		});
		$(".char").click(function() {
			in_space(1);
		});
	};
	
	function in_space(id){
		if(id == 1){
			if(char.death != 3){
				$('#open_window').html('<div id="tooltip">\
					<span>\
						Name: '+char.id+'<br>\
						<h2 style="color:red"> HP: '+char.hp.toFixed(1)+'|'+char.allhp+'</h2>\
						Speed:'+char.speed+'<br>\
						Attack Speed:'+char.aspeed+'<br>\
						Dmg:'+char.dmg+'<br>\
						Armor:'+char.armor+'<br>\
						Miss:'+char.miss+'<br>\
						Str:'+char.str+'<br>\
						Agi:'+char.agi+'<br>\
						Int:'+char.int+'<br>\
						Exp:'+char.exp+'<br>\
						Crit:'+char.crit+'|'+char.critrate+'<br></span></div>');
				$('#tooltip').css({
					'left': 40 * $positionX-50,
					'top': 40 * $positionY-200,	
				});
				$('#tooltip').show(500);
				setTimeout('$("#tooltip").hide(600);',4000);
			} else {
				$('#open_window').html('<div id="tooltip">\
					<span>\
						Name: '+char.id+'<br>\
						<h2 style="color:red"> HP: '+char.hp.toFixed(1)+'|'+char.allhp+'<br>\
						You dead<br></h2></span></div>');
				$('#tooltip').css({
					'left': 40 * $positionX-50,
					'top': 40 * $positionY-200,	
				});
				$('#tooltip').show(500);
				setTimeout('$("#tooltip").hide(600);',4000);
			}
		}else {
			$('#open_window').html('<div id="tooltip2">\
				<span style="line-height:18px;">\
				Map: '+map.name+'<br>\
				Char point: <img src="file/img/map/maps2.png" width="8px" height="8px"><br>\
				Mob, Object, Guard point: <img src="file/img/map/maps3.png" width="8px" height="8px"><br>\
				<hr style="border:1px solid black; width:170px;"></span><div class="tooltip2"></div>\
				</div>');
			var tt = char.id;
			for ($i = 0; $i < map.markup[0].length; $i++) {
				for ($j = 0; $j < map.markup[1].length; $j++) {
					if(map.markup[$i][$j] == 0 || map.markup[$i][$j] == 1) $('.tooltip2').append("<img src='file/img/map/maps.png' width='10px' height='10px'>");
					else if(map.markup[$i][$j] == tt) $('.tooltip2').append("<img src='file/img/map/maps2.png' width='10px' height='10px'>");
					else if(map.markup[$i][$j][0] == 'M') $('.tooltip2').append("<img src='file/img/map/maps3.png' width='10px' height='10px'>");
					else if(map.markup[$i][$j][0] == 'O') $('.tooltip2').append("<img src='file/img/map/maps4.png' width='10px' height='10px'>");
				}
				$('.tooltip2').append("<br>");
			}
			$('#tooltip2').css({
				'left': 40 * $positionX-50,
				'top': 40 * $positionY-200,	
			});
			$('#tooltip2').show(500);
			setTimeout('$("#tooltip2").hide(600);$("#tooltip2").html("");',6000);		
		}
	};
	
	
	function _session_new(){
		$.ajax({
			type: "POST",
			url: 'http://YOU_SITE_DIR/site/up/createsession.php',// jump quey to https://github.com/Fekoz/JRPG/blob/master/up/createsession.php
			data: "sgstart="+char.id,
			success: function(data){
				console.log('Reload page '+data);
			}
		});
	};	
	/**RETURN**/
	return {
		myy: function (i) {
			gochar(i);
		},
		closed: function(i){
			if(i==1){
				in_space(1);
			}else if(i==2){
				$('.log').css({'display':'none'});
				$('.closedlog').css({'bottom':'15px'});
				$('#closeds').html('Open');
			}else if(i==3){
				$('#tab-1').html('Chat clear');
			}else if(i==4){
				$('#tab-2').html('Chat clear');
			}else if(i==5){
				$('#tab-3').html('Chat clear');
			}else if(i==6){
				$('#tab-4').html('Chat clear');
			}else if(i==7){
				in_space(2);
			}else if(i==8){
				char_save();
			}else if(i==9){
				_session_new();
			}
		}
	};
})();
