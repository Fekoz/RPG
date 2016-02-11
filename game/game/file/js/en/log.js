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
		// Delegation
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
		
		// activate correct anchor (visually)
		anchor.addClass("active").parent().siblings().find("a").removeClass("active");
		
		// activate correct div (visually)
		div.addClass("active").siblings().removeClass("active");
		
		// update URL, no history addition
		// You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
		// window.history.replaceState("", "", hash);
		
		// Close menu, in case mobile
		anchor.closest("ul").removeClass("open");
		
	},
	
	// If the page has a hash on load, go to that tab
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
		engine.myy(2);
	},
	swipeRight:function(event, direction, distance, duration, fingerCount) {
		engine.myy(1);
	},
	swipeUp:function(event, direction, distance, duration, fingerCount) {
		engine.myy(3);
	},
	swipeDown:function(event, direction, distance, duration, fingerCount) {
		engine.myy(4);
	},
	threshold: 30,
	triggerOnTouchEnd: false,
		allowPageScroll: "vertical",
		excludedElements: "button, input, select, textarea, .noSwipe"
});