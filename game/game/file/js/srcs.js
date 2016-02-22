jQuery(function($) {
	"use strict";
	var quck_load_f = (function() {
		jQuery.cachedScript = function(url, options) {
			options = $.extend(options || {}, {
				dataType: "script",
				cache: true,
				url: url
			});
			return jQuery.ajax(options);
			};
		jQuery.cachedScript('js/en/engine.js').done(function(script, textStatus) {
			console.log( textStatus );
		});
		jQuery.cachedScript('js/en/log.js').done(function(script, textStatus) {
			console.log( textStatus );
		});
	});
	quck_load_f();
});//this file for more protection of objects from the console (It can be used in conjunction with onload)
//этот файл для более детальной защиты объектов от консоли (можно использовать в связке с onload)
