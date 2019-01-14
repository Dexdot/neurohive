// My scripts
var isMob;
$(function() {

	document.body.classList.add('page-projects');

	// Mobile Browser
	isMob = function() {
		var isMobile = (function(a){var det = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));if(det){return true}else{return false}})(navigator.userAgent||navigator.vendor||window.opera);
		
		if (isMobile) {
			$('body').addClass('mob');
		}

		return isMobile;
	};
	isMob();

	// IOS
	var isIos = function() {
		var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		if (isIOS) {
			$('body').addClass('ios');
		}
		return isIOS;
	};
	isIos();

	var isOsx = function() {

		var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;

		if (mac) {
			$('body').addClass('osx');
		}
		return mac;
	};
	isOsx();

	// IE
	(function() {
		var version = detectIE();

		if (version === false) {
		  $('body').removeClass('ie');
		} else if (version >= 12) {
			$('body').addClass('ie');
		} else {
			$('body').addClass('ie');
		}

		function detectIE() {
		  var ua = window.navigator.userAgent;

		  var msie = ua.indexOf('MSIE ');
		  if (msie > 0) {
		    // IE 10 or older => return version number
		    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		  }

		  var trident = ua.indexOf('Trident/');
		  if (trident > 0) {
		    // IE 11 => return version number
		    var rv = ua.indexOf('rv:');
		    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		  }

		  var edge = ua.indexOf('Edge/');
		  if (edge > 0) {
		    // Edge (IE 12+) => return version number
		    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		  }

		  // other browser
		  return false;
		}
	})();

	// Menu toggling
		$('.hamburger, .menu-list-item').click(function() {
			$('.menu, .hamburger').toggleClass('is-active');
		});
	// Smooth scroll
		$("a[href]").on('click', function(event) {

			if ($(this).parents('#panel').length === 1) {
				return false;
			}
			
			var target = $(this).attr('href');

			if (target[0] === '/') {
				target = target.slice(1);
			}

			var hasElement = $(target).length !== 0;

			if (hasElement) {
				event.preventDefault();
				var top = $(target).offset().top + parseInt($(target).css('padding-top'));
				$('html, body').animate({
					scrollTop: top - 5},
					1000);
			} else {
				event.preventDefault();
				$('.projects-page').toggleClass('is-hidden');
				TweenMax.to(controls, 0.4, {tube: 40, ease: Power2.easeInOut, onUpdate: function() {
					controls.redraw()
				}, onComplete: function() {
						setTimeout(function() {
							$('.page-projects').addClass('leave');
						}, 400);
						TweenMax.to(controls, 1, {tube: 0.1, radius: 0.1, ease: Power4.easeInOut, onUpdate: function() {
							controls.redraw()
						}})
				}})
				setTimeout(function() {
					window.location = window.location.origin + '/' + target;
				}, 1800);
				// event.preventDefault();
				// $('.projects-page').toggleClass('is-hidden');
				// TweenMax.to(controls, 1, {tube: 0.2, ease: Power4.easeInOut, onUpdate: function() {
				// 	controls.redraw()
				// }})
				// setTimeout(function() {
				// 	window.location = target;
				// }, 600);
			}
		});
	// Custom CSS
		var customCSS = function() {
		};
		customCSS();
		$(window).on('resize', customCSS);
	// Projects button
		$('.projects-button').on('click', function() {
			$('.projects-button').removeClass('is-active');
			$(this).addClass('is-active');

			var filter = $(this).attr('data-filter');

			if (filter === 'voted') {
				$('.project:not(.project.is-voted)').hide();
			} else {
				$('.project').show();
			}

		});
});

var controls;
// Three.js
$(function() {

	var scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	var webGLRenderer = new THREE.WebGLRenderer({ alpha: true });
	webGLRenderer.setClearColor(0x000000, 0);

	webGLRenderer.setSize(window.innerWidth, window.innerHeight);
	webGLRenderer.shadowMapEnabled = true;

	camera.position.x = -60;
	camera.position.y = 60;
	camera.position.z = 60;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	$("#webgl-output").append(webGLRenderer.domElement);

	var step = 0;
	var knot;

	controls = new function () {

		// we need the first child, since it's a multimaterial
		this.radius = 1;
		this.tube = 1;
		this.radialSegments = 400;
		this.tubularSegments = 12;
		this.p = 5;
		this.q = 4;
		this.heightScale = 4;
		this.asParticles = true;
		this.rotate = true;

		var easing = Power3.easeInOut;

		this.redraw = function () {

			// remove the old plane
			if (knot) scene.remove(knot);

			// create a new one
			var geom = new THREE.TorusKnotGeometry(controls.radius, controls.tube, Math.round(controls.radialSegments), Math.round(controls.tubularSegments), Math.round(controls.p), Math.round(controls.q), controls.heightScale);

			if (controls.asParticles) {
				knot = createParticleSystem(geom);
			} else {
				knot = createMesh(geom);
			}

			// add it to the scene.
			scene.add(knot);
		};

		this.start = function () {
			controls.radius = 1;
			new TimelineMax()
			.to(controls, 3, {radius: 14, tube: 35,
					onUpdate: function () {
						controls.redraw();
					},
				ease: Power4.easeOut
			 })
			.staggerTo('.project', 1.2, {opacity: 1}, 0.1, '-=2.5')

		};

		this.prestart = function() {
			var counter = {i: controls.radius};

			TweenMax
				.to(counter, 1.8, {i: 1,
					onUpdate: function () {
						controls.radius = counter.i;
						controls.redraw();
					},
				ease: Power2.easeOut
			});
		};

		this.prestartReverse = function() {

			var counter = {i: controls.radius};

			TweenMax
				.to(counter, 1.8, {i: 20,
					onUpdate: function () {
						controls.radius = counter.i;
						controls.redraw();
					},
				ease: Power2.easeOut
			});

		};
	}

	setTimeout(function() {
		controls.redraw();
		render();
		controls.start();
	}, 200);


	// from THREE.js examples
	function generateSprite() {
		var canvas = document.createElement('canvas');
		canvas.width = 16;
		canvas.height = 16;

		var context = canvas.getContext('2d');

		var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
		gradient.addColorStop(0.8, 'rgba(63,63,224,1)');
		gradient.addColorStop(1, 'rgba(0,0,0,0)');

		context.fillStyle = gradient;
		context.fillRect(0, 0, canvas.width, canvas.height);

		var texture = new THREE.Texture(canvas);
		texture.needsUpdate = true;

		return texture;
	}

	function createParticleSystem(geom) {
		var material = new THREE.ParticleBasicMaterial({
			color: 0xffffff,
			size: 0.5,
			transparent: true,
			blending: THREE.AdditiveBlending,
			map: generateSprite()
		});

		var system = new THREE.ParticleSystem(geom, material);
		system.sortParticles = true;
		return system;
	}

	function createMesh(geom) {

		// assign two materials
		var meshMaterial = new THREE.MeshNormalMaterial({});
		meshMaterial.side = THREE.DoubleSide;

		// create a multimaterial
		var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

		return mesh;
	}

	function render() {

		if (controls.rotate) {
			knot.rotation.y = step += 0.0003;
		}

		// render using requestAnimationFrame
		requestAnimationFrame(render);
		webGLRenderer.render(scene, camera);
	}
});

// Links Glitch
$(function() {
	if (!isMob()) {
			var charPool = "!<>-_\\/[]{}—=+*^?#________";
		  var button = $('.text-code-hover-feel');
			
			button.each(function(i, link) {
				$(link).attr('data-text-scramble-original', $(link).text());
			});

			// Фиксация ширины, чтобы не прыгали
			$('.header__nav li').each(function(i, li) {
				if ($(li).width() !== 0) {
					$(li).width($(li).width());
					$(li).height($(li).height());

					$(li).find('span').width($(li).width());
				}
			});

			$('.example__link').each(function(i, link) {
				if ($(link).width() !== 0) {
					$(link).width($(link).width());
					$(link).height($(link).height());
				}
			});
		  
		  extrachars = button.text();
		  var intevalzor;
		  $('.header__nav li:not(.authorized)')
			  .mouseenter(function() {

			  	var self = $(this).find('a');
			  	var len = self.text().length;

			  	var i = 1;
			  	myTimer();
			  	intevalzor = setInterval(function() {
			  		if (i > 2) {
			  			self.text(self.attr("data-text-scramble-original"));
			  			clearInterval(intevalzor);
			  			return false;
			  		}
				  	myTimer();
				  	i++;
			  	}, 150);

				  function myTimer() {
					self.text(createRandomText(extrachars, len));
				  }
			  })
			  .mouseleave(function() {
			  	var self = $(this).find('a')
					$(self).text($(self).attr("data-text-scramble-original"));
					clearInterval(intevalzor);
			  });
		  $('.example__link')
			  .mouseenter(function() {

			  	var self = $(this);
			  	var len = self.text().length;

			  	var i = 1;
			  	myTimer();
			  	intevalzor = setInterval(function() {
			  		if (i > 2) {
			  			self.text(self.attr("data-text-scramble-original"));
			  			clearInterval(intevalzor);
			  			return false;
			  		}
				  	myTimer();
				  	i++;
			  	}, 150);

				  function myTimer() {
					self.text(createRandomText(extrachars, len));
				  }
			  })
			  .mouseleave(function() {
			  	var self = $(this);
					$(self).text($(self).attr("data-text-scramble-original"));
					clearInterval(intevalzor);
			  });
		  
		  function createRandomText(extrachars, len) {
			var text = "";
			var possible = "!<>-_\\/[]{}—=+*^?#________"+extrachars;

			for (var i=0; i < len; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}

			return text;
			}
		  
		  var lengthOfText = getLenghtOfString(button.text());
		  var lengthOfPool = getLenghtOfString(charPool);
		  
		  for (i = 0; i < lengthOfText; i++) { 
			var randomIntIndexText = selectRandomFrom(lengthOfText)
			var randomIntIndexPool = selectRandomFrom(lengthOfPool)
			var poolChar = getCharAtPosition(charPool,randomIntIndexPool);
			}
		  
		  getCharAtPosition(charPool,selectRandomFrom(lengthOfPool));
		  
		  function getCharAtPosition(str, position){
			return str.charAt(position+1);
		  }
		  
		  function replaceCharInString(index, char){
			return str.substr(0, index) + 'char' + str.substr(index + 1);
		  }

		  function getLenghtOfString(element) {
			return element.length;
		  }
		  
		  
		  function selectRandomFrom(number) {
			//1 is the start number
			//"number" is the number of possible results (1 + start (number) - end (1))
			return Math.floor(Math.random() * number) + 1; 
		  }

		  // usage str = str.replaceAt(3, "a");
		  function replaceLetterAt(index, character) {
			return this.substr(0, index) + character + this.substr(index+character.length);
		  } 
	} 
});


// Glitch works
$(function() {

	function Slide(el) {
		this.DOM = {el: el};
		this.DOM.slideImg = this.DOM.el.querySelector('.project__img');
		this.bgImage = this.DOM.slideImg.style.backgroundImage;
		this.layout();
	}

	Slide.prototype.layout = function() {

		for (var j = 0; j < 5; j++) {
			this.DOM.slideImg.innerHTML += "<div class='glitch__img' style='background-image:" + this.DOM.slideImg.style.backgroundImage + "'></div>";
		}
		this.DOM.glitchImgs = Array.from(this.DOM.slideImg.querySelectorAll('.glitch__img'));
	}


	function GlitchSlideshow(el) {
	  this.DOM = {el: el};
	  this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.project'));

	  this.slides = [];

	  var self = this;
	  this.DOM.slides.forEach(function(slide) {
	  	self.slides.push(new Slide(slide))
	  });

	  this.DOM.slides.forEach(function(slide, i) {
	  	self.slides[i].DOM.slideImg.addEventListener('mouseover', function() {
	  		self.slides[i].DOM.slideImg.classList.add('glitch--animate');
	  	});
	  	self.slides[i].DOM.slideImg.addEventListener('mouseout', function() {
	  		self.slides[i].DOM.slideImg.classList.remove('glitch--animate');
	  	});

	  });
	}

	var slideshow = new GlitchSlideshow(document.querySelector('.projects'));
	
});

$(function() {

	if (!isMob()) {
		var $example = $('.project__img');

		function initTilt() {
			TweenMax.set([$example], { transformStyle: "preserve-3d" });

			$example.mouseleave(function() {
				TweenMax.killAll();
				$example.css('transition', '400ms ease-out');
				$example.css('transform', 'unset');
			});

			$example.mouseenter(function() {
				$example.css('transition', '400ms ease-out');
				setTimeout(function() {
					$example.css('transition', 'unset');
				}, 400);
			});

			$example.mousemove(function(e) {
				var self = $(this);
				var sxPos = e.pageX / self.width() * 100 - 100;
				var syPos = (e.pageY - $(this).offset().top) / self.height() * 100 - 100;

				TweenMax.to(self, 2, {
					scale: 1.1,
					rotationY: 0.01 * sxPos,
					rotationX: -0.03 * syPos,
					transformPerspective: 500,
					transformOrigin: "center center -400",
					ease: Expo.easeOut
				});
			});
			
		};

		initTilt();
	}
});

function mediaQueries(width, matchCallback, callback) {
	var handleMatchMedia = function (mediaQuery) {
		if (mediaQuery.matches) {
			matchCallback();
		} else {
			callback()
		}
	};
	mql = window.matchMedia('all and (max-width: ' + width + 'px)');
	handleMatchMedia(mql);
	mql.addListener(handleMatchMedia);
}