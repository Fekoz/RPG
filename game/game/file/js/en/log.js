var clcs=false;
$('#closeds').click(function() {
	if(clcs == false){
		$('.log').css({'display':'none'});
		$('.closedlog').css({'bottom':'15px'});
		clcs = true;
		$('#closeds').html('Open');
	}else {
		$('.log').css({'display':'block'});
		$('.closedlog').css({'bottom':'280px;'});
		clcs = false;
		$('#closeds').html('Closed');
	}
});

var Tabs = {
	init: function() {
		this.bindUIfunctions();
		this.pageLoadCorrectTab();
	},
	
	bindUIfunctions: function() {
		$(document)
		.on("click", ".t_log a[href^='#']:not('.active')", function(event) {
			Tabs.changeTab(this.hash);
			event.preventDefault();
		})
		.on("click", ".t_log a.active", function(event) {
			Tabs.toggleMobileMenu(event, this);
			event.preventDefault();
		});		
	},
	
	changeTab: function(hash) {
		var anchor = $("[href=" + hash + "]");
		var div = $(hash);
		anchor.addClass("active").parent().siblings().find("a").removeClass("active");
		div.addClass("active").siblings().removeClass("active");
		anchor.closest("ul").removeClass("open");
	},
	
	pageLoadCorrectTab: function() {
		this.changeTab(document.location.hash);
	},
	
	toggleMobileMenu: function(event, el) {
		$(el).closest("ul").toggleClass("open");
	}
	
}
Tabs.init();


$(window).swipe({
	swipeStatus:function(event, phase, direction, distance, duration, fingerCount) {
		if(phase == 'move') {
			speed = '0ms';
			if(direction == 'left') {}
			else if(direction == 'right') {} 
			else if(direction == 'up') {}
			else if(direction == 'down') {}
		}
		else if (phase == 'end') {}
	},
	swipeLeft:function(event, direction, distance, duration, fingerCount) {
		engine.myy(2);// dir engine.js > move char to left
	},
	swipeRight:function(event, direction, distance, duration, fingerCount) {
		engine.myy(1);// dir engine.js > move char to right
	},
	swipeUp:function(event, direction, distance, duration, fingerCount) {
		engine.myy(3);// dir engine.js > move char to top
	},
	swipeDown:function(event, direction, distance, duration, fingerCount) {
		engine.myy(4);// dir engine.js > move char to bot
	},
	threshold: 30,
	triggerOnTouchEnd: false,
		allowPageScroll: "vertical",
		excludedElements: "button, input, select, textarea, .noSwipe"
});//engine.myy(id) - can be used anywhere where adjacent connected script of the game\
//можно использовать везде, где указан скрипт игры, можно вынести и свои функции на повтор.
