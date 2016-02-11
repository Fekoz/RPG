$(function() {   
	var $dot, L1, L3, camera, dot, golf, render, renderer, scene, update , click = false , qqq;
	var size = {
		1:970,
		2:970
	};
	var cpos=0,
		cdate=0,
		creg=0, 
		alltime=15000;
	
	$(document).ready(function(){
		formleft();
		formright();
		consolerize();
		loading_func();
	});
	
	function consolerize(){
		//console.clear();
		//console.log("%cClose the console", "color: red; font-style: italic; font-size:38px; text-shadow: 2px 2px 5px black, 0 0 1em orange;");
		//console.log("%cEither you will have problems with the site", "color: red; font-style: italic; font-size:25px; text-shadow: 2px 2px 5px black, 0 0 1em orange;");
	}
	
	$(window).load(function () {
		consolerize();
		setTimeout(load_func,2000);
	});
	
	$(window).unload(function(){ 
		consolerize();
	});
	
	//for load
	function loading_func(){
		consolerize();
		$('#preload').css({
			'display':'block'
		});
		$('#main').css({
			'display':'none'
		});
		$('#dot').css({
			'display':'none'
		});
	};
	
	
	//for suc[?] load
	function load_func(){
		$('#preload').css({
			'display':'none'
		});
		$('#main').css({
			'display':'block'
		});
		$('#dot').css({
			'display':'block'
		});
		$(".qblock").load("tmp/one/loadphp.php");
		click = false;
		scrolling(0);
		$('section').children().css('margin-left', '-200vw').css('opacity', '0');
		displayNav();
		
		consolerize();
		
		var $i = 0;
		var $max = $('section').length - 1;
		$('body').bind('mousewheel DOMMouseScroll', function(e) {
			if(e.originalEvent.detail > 0 || e.originalEvent.deltaY == 100) {
				if ($i < $max) {
					$i++;
					scrolling($i);
				}
			} else {
				if ($i > 0) {
					$i--;
					scrolling($i);
				}
			}
		});
		fillSection($i);
		
		$('body').swipe({
			swipeStatus:function(event, phase, direction, distance, duration, fingerCount) {    
				if(phase == 'move') {
					speed = '0ms';
					if(direction == 'left') {
						//console.log('1');
					}
					else if(direction == 'right') {
						//console.log('2');
					} 
					else if(direction == 'up') {
						//console.log('3');
					}
					else if(direction == 'down') {
						//console.log('4-end/');
					}
				}
				else if (phase == 'end') {
					//console.log('end');
				}
			},
			swipeUp:function(event, direction, distance, duration, fingerCount) {
				if($i > 0) {
					scrolling($i-=1);
				}else {
					scrolling($i+1);
				}
			},
			swipeDown:function(event, direction, distance, duration, fingerCount) {
				if($i < $max) {
					scrolling($i+=1);
				}else {
					scrolling($i-1);
				}
			},
			threshold: 30,
			triggerOnTouchEnd: false,
			allowPageScroll: "vertical",
			excludedElements: "button, input, select, textarea, .noSwipe"
		});
		$.ajax({
			type: "POST",
			url:  "up/createviews.php",
			data: {'sess':'fekoztrue'},
			success: function(data) { console.log(data); }
		});
		var w=$(window).width();
		var h=$(window).height();
		if((h > 600 & h < 670) & w > 920) {
			$('.qblock').animate({
				'zoom': '94%',
			}, 400);
		}

		if(w < 800 & h < 450){
			$('body,html').animate({
				'zoom': '70%',
			}, 400);
			var q;
			q = w/80*100;
			$('section').css({
				'position':'absolute',
				'width':q,
				'height':'auto'
			});
			$('#particles-js').css('display','none');
			$('.align_center').css('display','none');
			console.log('zoom:70');
		}
		var msg = new Messanger();
	};
	
	function Messanger() {
		this.last = 0;
		this.timeout = 360;
		this.comet = 0;
		var self = this;
		this.putMessage = function(poset,date,regus) {
			self.last = 1;
			if(cpos == poset && cdate == date && creg == regus) console.log("%cREC:there is no new data", "color: red; font-style: italic; font-size:13px; text-shadow: 1px 1px 2px black, 0 0 1em white;");
			else {
				cpos = poset;
				cdate = date;
				creg = regus;		
				$('.checkonday').hide(220);
				$('.checkallusers').hide(220);
				/*********/
				$('.checkonday').html(date+':'+poset);
				$('.checkallusers').html(regus);
				/*********/
				$('.checkonday').show(450);
				$('.checkallusers').show(450);
			}
		}
		this.parseData = function(message) {
			var items = message.split(';');
			if (items.length<1) return false;
			for (var i=0;i<items.length;i++) {
				eval(items[i]);
			}
			setTimeout(self.connection,alltime);
		}
		this.connection = function() {
			self.comet = $.ajax({
					type: "GET",
					url:  "tmp/one/onlineload.php",
					data: {'id':self.last},
					dataType: "text",
					timeout: self.timeout*alltime,
					success: self.parseData,
					error: function(){
						setTimeout(self.connection,alltime);
						console.log('error:');
				   }
				});
		}
		this.init = function() {
			//connect
			self.connection();
		}
		this.init();
	}
	
	//for scroll , this load(load suc)
	function fillSection($i) {
		if($i == 1) {
			$('.align_center_to_right').animate({
				'margin-top':'65vh',
				'right':'-90%'
			},700);
		} else if($i == 0) {
			$('.align_center_to_right').animate({
				'margin':'0',
				'right':'-50%'
			},700);
		}
		
		$('section').eq($i).children().animate({
			marginLeft: 0,
			opacity: 1
		}, 300, function() {
			$('section').not($('section').eq($i)).children().css('margin-left', '-200vw').css('opacity', '0');
		});
		$('.nav').animate({
			right: "5vw"
		}, 300);
		updateNav($i);
	};

	function displayNav() {
		$('body').prepend('<ul class="nav"></ul>');
		$length = $('section').length;
		$i2 = 0;
		for ($i2; $i2 < $length; $i2++) {
			$('.nav').prepend('<li></li>');
		}
		foundreq();
	};
	
	function updateNav($i) {     
		$('.nav li').not($('.nav li').eq($i)).css('background', 'transparent');
		$('.nav li').eq($i).css('background', 'white');     
	};

	function foundreq() {
		$(".nav li").click(function() {
			var click = $(this);
			var q = click.index("li");
			scrolling(q);
		});
		
		$("#goFeedback").click(function() {
			var Sql_qury = $(".ffeedback").serialize();
			$.ajax({
				type: "POST",
				url: "up/feedback.php",
				data: Sql_qury,
				success: function(data) {
					$(".feedback_info").html(data);
				},
				error: function(xhr, str){
					$(".feedback_info").html(xhr.responseCode);
				}
			});
		});	
	};
	

	function scrolling(Fparam){
		$('body,html').animate({
			scrollTop: $('section').eq(Fparam).offset().top
		}, 900, function() {
			fillSection(Fparam);
		});
	};

	
	//other
	function formright(){
		$dot = $('#dot');

		renderer = new THREE.WebGLRenderer({
			antialias: true
		});
		camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000);
		scene = new THREE.Scene();
		scene.add(camera);
		renderer.setSize(size[1], size[2]);
		$dot.append(renderer.domElement);
		camera.position.z = 200;
		golf = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			shading: THREE.FlatShading,
			fog: false
		});
		L1 = new THREE.PointLight(0xff0000, 2);
		L1.position.x = 600;
		L1.position.y = 1500;
		L1.position.z = 2000;
			scene.add(L1);
		L3 = new THREE.PointLight(0x000000, 0);
		L3.position.z = 400;
			scene.add(L3);
		dot = new THREE.Mesh(new THREE.TetrahedronGeometry(100, 3), golf);
			scene.add(dot);
		update = function() {
			dot.rotation.x += .01;
			return dot.rotation.y += .02;
		};
		render = function() {
			requestAnimationFrame(render);
			renderer.render(scene, camera);
			return update();
		};
		render();
		
		$('#dot').click(function() {
			if(click != true) {
				qqq = new THREE.PerspectiveCamera(100, 180, 30, 100000000000000);
				requestAnimationFrame(render);
				renderer.render(scene, qqq);
				update();
				click += 1;
				$(".framevideoclick").css({
					'margin-left':'-110px',
					'display':'block'});
					
				$(".framevideoclick").animate({
					'margin':'0',
					'opacity':'0.7'
				},700);
			} else {
				return false;
			}
		});
		$('#click3').click(function() {
			scrolling(1);
		});
		$('#click4').click(function() {
			scrolling(2);
		});
	};	
	
	function formleft(){
		particlesJS("particles-js", {
		  "particles": {
			"number": {
			  "value": 26,
			  "density": {
				"enable": true,
				"value_area": 700
			  }
			},
			"color": {
			  "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
			},
			"shape": {
			  "type": "circle",
			  "stroke": {
				"width": 0,
				"color": "#000000"
			  },
			  "polygon": {
				"nb_sides": 15
			  },
			  "image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			  }
			},
			"opacity": {
			  "value": 0.5,
			  "random": false,
			  "anim": {
				"enable": false,
				"speed": 1.5,
				"opacity_min": 0.15,
				"sync": false
			  }
			},
			"size": {
			  "value": 2.78,
			  "random": true,
			  "anim": {
				"enable": true,
				"speed": 2,
				"size_min": 0.6,
				"sync": true
			  }
			},
			"line_linked": {
			  "enable": true,
			  "distance": 110,
			  "color": "#33b1f8",
			  "opacity": 0.41,
			  "width": 1
			},
			"move": {
			  "enable": true,
			  "speed": 1.6,
			  "direction": "none",
			  "random": false,
			  "straight": false,
			  "out_mode": "out",
			  "bounce": false,
			  "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
		  },
		  "interactivity": {
			"detect_on": "canvas",
			"events": {
			  "onhover": {
				"enable": false,
				"mode": "repulse"
			  },
			  "onclick": {
				"enable": false,
				"mode": "push"
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 400,
				"line_linked": {
				  "opacity": 1
				}
			  },
			  "bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			  },
			  "repulse": {
				"distance": 200,
				"duration": 0.4
			  },
			  "push": {
				"particles_nb": 4
			  },
			  "remove": {
				"particles_nb": 2
			  }
			}
		  },
		  "retina_detect": true
		});
	};	
});