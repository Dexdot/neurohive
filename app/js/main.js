// My scripts
var isMob;
$(function() {

	document.body.classList.add('page-main');

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

			if ($(this).hasClass('menu-list-item')) {
				var target = $(this).find('a').attr('href')
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
					$('#sections, .footer').toggleClass('is-hidden');
					TweenMax.to(controls, 0.4, {tube: 40, ease: Power2.easeInOut, onUpdate: function() {
						controls.redraw()
					}, onComplete: function() {
							setTimeout(function() {
								$('.page-main').addClass('leave');
							}, 400);
							TweenMax.to(controls, 1, {tube: 0.1, radius: 0.1, ease: Power4.easeInOut, onUpdate: function() {
								controls.redraw()
							}})
					}})
					setTimeout(function() {
						window.location = target;
					}, 1800);
				}
			}

			$('.menu, .hamburger, #webgl-output').toggleClass('is-active');
			$('#sections, .footer').toggleClass('is-hidden');

			if (!isMob()) {

				// Анимация шара при открытии/закрытии меню
				if ($('.hamburger').hasClass('is-active')) {
					controls.prestart();
					new TimelineMax().to('.fixed-nav', 0.2, {opacity: 0, 'pointer-events': 'none'})
				} else {
					controls.prestartReverse();
					new TimelineMax().to('.fixed-nav', 0.2, {opacity: 1, 'pointer-events': 'auto'})
				}

				// Анимация ссылок при открытии/закрытии меню
				new TimelineMax().staggerTo('.menu-list-item .letter', 0.4, {x: '0%', opacity: 1}, 0.025);
			}

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
				$('#sections, .footer').toggleClass('is-hidden');
				TweenMax.to(controls, 0.4, {tube: 40, ease: Power2.easeInOut, onUpdate: function() {
					controls.redraw()
				}, onComplete: function() {
						setTimeout(function() {
							$('.page-main').addClass('leave');
						}, 400);
						TweenMax.to(controls, 1, {tube: 0.1, radius: 0.1, ease: Power4.easeInOut, onUpdate: function() {
							controls.redraw()
						}})
				}})
				setTimeout(function() {
					window.location = target;
				}, 1800);
			}
		});
	// First section
		(function() {

			var showFixedLogo = function() {
				$('.fixed-logo').addClass('is-visible');
			};
			var hideFixedLogo = function() {
				$('.fixed-logo').removeClass('is-visible');
			};


			$(window).on('scroll', function() {
				if (window.pageYOffset > $('.section-main').height()) {
					showFixedLogo();
				} else {
					hideFixedLogo();
				}
			});
			$(window).on('scroll', function() {
				if (window.pageYOffset > $('.section-main').height() / 2) {
					$('.bg-mask').addClass('is-visible');
				} else {
					$('.bg-mask').removeClass('is-visible');
				}
			});

		})();
	// Last section
		// $(window).on('scroll', function() {
		// 	if (window.pageYOffset + $('.fixed-logo').height() > $('.section--request').offset().top) {
		// 		$('.fixed-logo').removeClass('is-visible');
		// 		$('.fixed-nav, .hamburger').addClass('dark');
		// 		$('.fixed-nav__name').hide();
		// 	} else {
		// 		$('.fixed-nav, .hamburger').removeClass('dark');
		// 		$('.fixed-nav__name').show();
		// 	}
		// });
		// $(window).on('scroll', function() {
		// 	if (window.pageYOffset > ($('.section--request').offset().top - window.innerHeight)) {
		// 		$('.noise').addClass('last');
		// 	} else {
		// 		$('.noise').removeClass('last');
		// 	}
		// });
	// News slider
		(function() {
			var firstClickFlag = true;
			var timingFlag = true;
			var step = 100;

			// Кнопка назад
			$('.news-btn-prev').on('click', function() {


				var tl = new TimelineMax();
				var easing = Power2.easeInOut;

				firstClickFlag = true;
				step = 100;

				tl
					.staggerTo('.news__img', 0.4, {ease: easing, x: '0%'}, 0.05)
					.to('.news__header', 0.4, {ease: easing, y: '0%'}, '-=0.4')
					.to('.news__content', 0.4, {ease: easing, y: '0%'}, '-=0.4')
			});

			// Кнопка вперед
			$('.news-btn-next').on('click', function() {
				var tl = new TimelineMax();
				var easing = Power2.easeInOut;

				// Блокируем движение вперед
				var $lastImg = $('.news__img:last');
				var lastImgRightOffset = ($(window).width() - ($lastImg.offset().left + $lastImg.outerWidth()));

				if (lastImgRightOffset > 0) {
					return false;
				}

				// Анимация движения вперед
				if (firstClickFlag) {

					tl
						.to('.news__header', 0.4, {ease: easing, y: '-200%'}, 'sync')
						.to('.news__content', 0.4, {ease: easing, y: '140%'}, 'sync')
						.staggerTo('.news__img', 0.4, {ease: easing, x: '-126%', onComplete: function() {firstClickFlag = false}}, 0.05, '-=0.4')

				} else {
					tl.staggerTo('.news__img', 0.4,
						{ease: easing, x: '-' + (126 + step) + '%'}
						, 0.05)

					step += 80;
				}

			});

		})();
	// Main Button scroll
		$('.main__btn').on('click', function() {
	    var target = '#request';
	    var top = $(target).offset().top + parseInt($(target).css('padding-top'));
	    $('html, body').animate({
	      scrollTop: top},
	      1000)
		});
	// Убираем лишнюю высоту
		(function() {
			$('.prize-header').height($('.prize-header').height() - $('.prize-header__text').height());
			// $('.versus__header').height($('.versus__header').height() - $('.versus__header-text').height() * 2);
			$('.versus__header .section-header--up').hide();
		})();
	// Custom CSS
		var customCSS = function() {

			// Main year/header
			var mainHeaderWidth = $('.main__header').outerWidth();
			$('.main__year').width(mainHeaderWidth);

			// Плашка с этапами
			var prizeTop = $('.cover--stages .cover__inner').offset().top;
			var prizeLeft = $('.prize:first').offset().left;
			$('.cover--stages .cover__inner').offset({top: prizeTop, left: prizeLeft});

			// Новости
			var newsTop = $('.news').offset().top;
			var exampleWrapPaddingLeft = +$('.example-wrap').css('padding-left').split('px')[0];
			var exampleLeft = $('.example').offset().left - exampleWrapPaddingLeft;
			$('.news').offset({top: newsTop, left: exampleLeft});

			// Боковая навигация
			var headerLogoLeft = $('.header__logo').offset().left;
			$('.fixed-nav').offset({top: '50%', left: headerLogoLeft});

			// int-canvas-chat
			var chatTop = $('#chat .fluid--px').offset().top;
			$('.int-canvas-wrap--chat').offset({top: chatTop, left: 0})

			// News buttons
			var newsButtonsTop = $('.news-buttons').offset().top;
			var newsImagesLeft = $('.news__images').offset().left;
			if ((newsImagesLeft > window.innerWidth)) {
				newsImagesLeft = newsImagesLeft - $('.news__images').outerWidth();
				$('.news-buttons').offset({top: newsButtonsTop, left: newsImagesLeft});
			} else {
				$('.news-buttons').offset({top: newsButtonsTop, left: newsImagesLeft});
			}

			// Timer width
			$('.hud-timer__inner').width($('.hud__deadline-date').width());
		};
		customCSS();
		$(window).on('resize', customCSS);
	// Input focus
		$(function() {
			$('.request__input, .request__textarea').on('focus', function() {
				$('.request__input, .request__textarea').each(function(i, input) {
					var valueLen = $(input).val().length;
					if (valueLen === 0) {
						$(input).parent().removeClass('clicked');
					}
				});
				$(this).parent().addClass('clicked');
			});
		});

});

// Timer
$(function() {
	var time;
	time = function timer() {
		var now = new Date();

		var inputVal = $('#hidden_date_final').val();
		var deadlineDate = new Date(inputVal.replace(' ', 'T'));

		var deadline = new Date(deadlineDate);

		function DateDiff(date1, date2) {
		    this.days = null;
		    this.hours = null;
		    this.minutes = null;
		    this.seconds = null;
		    this.date1 = date1;
		    this.date2 = date2;

		    this.init();
	  }

	  DateDiff.prototype.init = function() {
	    var data = new DateMeasure(this.date1 - this.date2);
	    this.days = data.days;
	    this.hours = data.hours;
	    this.minutes = data.minutes;
	    this.seconds = data.seconds;
	  };

	  function DateMeasure(ms) {
	    var d, h, m, s;
	    s = Math.floor(ms / 1000);
	    m = Math.floor(s / 60);
	    s = s % 60;
	    h = Math.floor(m / 60);
	    m = m % 60;
	    d = Math.floor(h / 24);
	    h = h % 24;
	    
	    this.days = d;
	    this.hours = h;
	    this.minutes = m;
	    this.seconds = s;
	  };

	  Date.diff = function(date1, date2) {
	    return new DateDiff(date1, date2);
	  };

	  Date.prototype.diff = function(date2) {
	    return new DateDiff(this, date2);
	  };

		var timeLeft = Date.diff(deadline, now);

		$('.hud-timer__cell--days span').text(timeLeft.days);
		$('.hud-timer__cell--hours span').text(timeLeft.hours);
		$('.hud-timer__cell--mins span').text(timeLeft.minutes);

		window.setTimeout(function() {
			timer();
		}, 60000);

	}
	time();
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
		  $('.header__nav li')
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

var controls;
// Three.js
$(function() {

	var scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	var webGLRenderer = new THREE.WebGLRenderer({ alpha: true });
	webGLRenderer.setClearColor(0x000000, 0);

	webGLRenderer.setSize(window.innerWidth, window.innerHeight);
	webGLRenderer.shadowMapEnabled = true;

	$(window).on('resize', function() {
		webGLRenderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	});

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
		this.radialSegments = 350;

		if (!isMob()) {
			this.radialSegments = 350;
		} else {
			this.radialSegments = 100;
		}

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
			var counter = {i: controls.tube};
			controls.radius = 1;

			if (!isMob()) {

				$('.menu-list-item a, .section-header--up, .main__year span, .main__header, .section-header, .news__header').css('opacity', 1);
				$('.menu-list-item a, .section-header--up, .main__year span, .main__header, .section-header, .cover__header, .news__header').addClass('js-splitme');

				// Split
				var els = document.querySelectorAll('.js-splitme');
				els.forEach(function(el) {
					el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
				});

				setScrollMagic();

				var setGlitch = function() {
					$('.main__year, .prize-header').addClass('header-glitch');
				}

				// Main section content animation
				new TimelineMax()
					.to(controls, 3, {tube: 35, ease: Power4.easeOut, onUpdate: function() {
						controls.redraw();
					}})

					.staggerTo('.main__header .letter', 1, {x: '0%', opacity: 1}, 0.05, '-=2.4')
					.staggerTo('.main__year .letter', 1, {x: '0%', opacity: 1, onComplete: setGlitch}, 0.05, '-=2')

					.to('.main__desc', 0.8, {ease: Power1.easeInOut, y: '0%', opacity: 1}, '-=1.8')
					.to('.main__btn', 0.8, {ease: Power1.easeInOut, y: '0%', opacity: 1}, '-=1.4')

					.fromTo('.header', 1.4, {y: '-100%', opacity: 0}, {y: '0%', opacity: 1, ease: Power2.easeInOut}, '-=1.8')
					.to('.fixed-nav', 1.4, {x: '0%', opacity: 1, ease: Power2.easeInOut}, '-=1.6')
					.fromTo('.section-main .hud-bottom', 0.6, {y: '100%', opacity: 0}, {y: '0%', opacity: 1}, '-=0.9')
					.fromTo('.section-main .hud-timer', 0.6, {y: '200%', opacity: 0}, {y: '120%', opacity: 1}, '-=0.8')
			} else {
				new TimelineMax()
					.to(controls, 3, {tube: 30, ease: Power4.easeOut, onUpdate: function() {
						controls.redraw()
					}})
			}

		};

		this.prestart = function() {
			TweenMax.to(controls, 1.8, {radius: 1, ease: Power2.easeOut, onUpdate: function () {
				controls.redraw();
			}});
		};

		this.prestartReverse = function() {
			TweenMax.to(controls, 1.8, {radius: 20, ease: Power2.easeOut, onUpdate: function () {
				controls.redraw();
			}});

		};


	}

	controls.rend = render;

	// Разлет сферы на мобиле
	if (isMob()) {
			(function() {
				var controller = new ScrollMagic.Controller({
					globalSceneOptions: {
						triggerHook: 'onLeave'
					}
				})

				var $section = $('.section-main');

				var sc = new ScrollMagic.Scene({
					triggerElement: '.section-about',
					triggerHook: 'onEnter',
					offset: -($('.section-about').outerHeight() - 300)
				})
				.on('enter leave', function(e) {

					if (e.type === 'enter') {
						TweenMax
							.to(controls, 1.5, {radius: 14,
								onUpdate: function () {
									controls.redraw();
								},
							ease: Power3.easeInOut
						 });
						} else {
							controls.prestart();
						}

				})
				.addTo(controller);

			})();
	}

	// Scrollmagic
		function setScrollMagic() {
			var controller = new ScrollMagic.Controller({
				globalSceneOptions: {
					triggerHook: 'onLeave'
				}
			});

			// Sections
				$('.section').each(function(i, section) {
					var $section = $(section);

					if ($section.attr('id') === 'request') {
						return true;
					}

					new ScrollMagic.Scene({
						offset: $section.offset().top - $('.section-padding').height() - 400,
						triggerHook: 'onEnter',
						duration: $section.height()
					})
					.on('enter', function() {

						var easing = Power3.easeInOut,
								step = 7,
								myTime = 3;

						var showHamburger = function() {
							$('.hamburger').addClass('is-visible');
						};
						var hideHamburger = function() {
							$('.hamburger').removeClass('is-visible');
						};

						// Fixed nav toggling
						$('.fixed-nav__list-item').removeClass('active');
						$('.fixed-nav__list-item:eq(' + i + ')').addClass('active');

						if (i !== 0) {
							showHamburger();
							$('.section').addClass('darken');
						}
						// if (i !== 6) {
						// 	$('.fixed-logo .header__logo').html('<img class="rimg" src="img/logo-light.svg" alt="Neurohive">');
						// 	$('.fixed-nav, .hamburger').removeClass('dark');
						// }

						switch (i) {
							case 0:
								controls.prestart();
								mediaQueries(1059, showHamburger, hideHamburger);
								$('.section').removeClass('darken');
								break;
							// case 6:
							// 	$('.request').addClass('anim');
							// 	break;
							default:
								break;
						}

					})
					.addTo(controller)
				});

			// Three.js animation
				(function() {
					var $section = $('.section-main');

					var sc = new ScrollMagic.Scene({
						triggerElement: '.section-about',
						triggerHook: 'onEnter',
						offset: -($('.section-about').outerHeight() - 200)
					})
					.on('enter leave', function(e) {

						if (e.type === 'enter') {
							TweenMax
								.to(controls, 1.5, {radius: 14,
									onUpdate: function () {
										controls.redraw();
									},
								ease: Power3.easeInOut
							 });
							} else {
								controls.prestart();
							}

					})
					.addTo(controller);

				})();

			// Section headers animation
				var headers = document.querySelectorAll('.section-header');

				$(headers).each(function(i, header) {
					var parentSection = $(header).closest('.section');
					new ScrollMagic.Scene({
						offset: parentSection.offset().top - (window.innerHeight / 1.55),
						triggerHook: 'onEnter'
					})
					.on('enter', function() {
						new TimelineMax()
							.staggerTo(parentSection.find('.section-header .letter'), 0.5, {x: '0%', opacity: 1, onComplete: function() {
								if (!$(parentSection).hasClass('section-prize')) {
									parentSection.find('.section-header').addClass('header-glitch')
								}
							}}, 0.025)
							.staggerTo(parentSection.find('.section-header--up .letter'), 0.8, {x: '0%', opacity: 1}, 0.05, '-=0.8')
							.to(parentSection.find('.section-description'), 0.6, {ease: Power1.easeInOut, y: '0%', opacity: 1}, '-=1')
					})
					.addTo(controller)
				});

			// Examples animation
				if (!isMob()) {
					$('.example-wrap').each(function(i, ex) {
						new ScrollMagic.Scene({
							triggerElement: ex,
							triggerHook: 'onEnter',
							offset: -window.innerHeight / 1.5
						})
						.setTween(
							new TimelineMax()
							.fromTo($(ex).find('.example'), 1, {y: '15%'}, {y: '0%'}, 'sync')
							.to(ex, 1, {y: '-10%'}, 'sync')
						)
						.addTo(controller);
					});
				}

			// Covers animation
				if (!isMob()) {
					(function() {
						new ScrollMagic.Scene({
							triggerElement: '.cover-wrap--stages',
							triggerHook: 'onEnter',
							offset: -window.innerHeight / 1.5
						})
						.setTween(
							new TimelineMax()
							.fromTo('.cover--stages', 1, {y: '15%'}, {y: '0%'}, 'sync')
							.to('.cover-wrap--stages', 1, {y: '-10%'}, 'sync')
						)
						.addTo(controller);

						new ScrollMagic.Scene({
							triggerElement: '.cover-wrap--voting',
							triggerHook: 'onEnter',
							offset: -window.innerHeight / 1.5
						})
						.setTween(
							new TimelineMax()
							.fromTo('.cover--voting', 1, {y: '15%'}, {y: '0%'}, 'sync')
							.to('.cover-wrap--voting', 1, {y: '-10%'}, 'sync')
						)
						.addTo(controller);
					})();
				}

			// Covers header animation
				setTimeout(function() {
					$('.cover__header').each(function(i, header) {
						new ScrollMagic.Scene({
							triggerElement: header.parentNode,
							triggerHook: 'onEnter',
							offset: -window.innerHeight
						})
						.on('enter', function() {
							new TimelineMax()
								.staggerTo($(header).find('.letter'), 0.5, {x: '0%', opacity: 1}, 0.025)
								.staggerFromTo($(header).parent().find('.list__item'), 0.5, {ease: Power1.easeInOut, y: '60%', opacity: 0}, {ease: Power1.easeInOut, y: '0%', opacity: 1}, 0.1, '-=0.7')
						})
						.addTo(controller)

					});
				}, 200);

			// Prizes
				var prizesTimeline = new TimelineMax()
					.staggerTo('.prize__ring', 2, {opacity: 1, onStart: function() {
						this.target.classList.add('anim');
						var $prize = $(this.target.parentNode);
						
						new TimelineMax()
							.to($prize.find('.prize__eth'), 0.4, {y: '0%', opacity: 1})
							.to($prize.find('.prize__rub'), 0.4, {y: '0%', opacity: 1})

					}}, 0.1)

				new ScrollMagic.Scene({
					triggerElement: '.prizes',
					triggerHook: 'onEnter',
					offset: -(window.innerHeight - 100)
				})
				.setTween(prizesTimeline)
				.addTo(controller)

			// News animation

				var parentSection = $('.news').closest('.section');
				new ScrollMagic.Scene({
					offset: -window.innerHeight / 1.2,
					triggerElement: '.news',
					triggerHook: 'onEnter'
				})
				.on('enter', function() {
					new TimelineMax()
						.staggerTo(parentSection.find('.news__header .letter'), 0.5, {x: '0%', opacity: 1, onComplete: function() {
							$('.news__header').addClass('header-glitch')
						}}, 0.025)
						.to(parentSection.find('.news__desc'), 0.9, {ease: Power1.easeInOut, y: '0%', opacity: 1}, '-=1')
						.to('.news__images', 1.4, {ease: Power1.easeInOut, x: '0%'}, '-=1.5')
						.to('.news-buttons', 1, {ease: Power1.easeInOut, opacity: 1}, '-=0.8')
				})
				.addTo(controller);

		}


	// from THREE.js examples
	function generateSprite() {
		var canvas = document.createElement('canvas');
		canvas.width = 16;
		canvas.height = 16;

		var context = canvas.getContext('2d');

		var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
		gradient.addColorStop(1, 'rgba(58,54,197,1)');
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
			knot.rotation.y = step += 0.001;
		}

		// render using requestAnimationFrame
		// requestAnimationFrame(render);
		TweenMax.ticker.addEventListener('tick', render);
		webGLRenderer.render(scene, camera);
	}
});

// Perlin Noise Buttons
$(function() {
	var _createClass = function() {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {

				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}

		}
		return function(Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _asyncToGenerator(fn) {
		return function() {
			var gen = fn.apply(this, arguments);
			return new Promise(function(resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}
					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function(value) {
							step("next", value);
						}, function(err) {
							step("throw", err);
						});
					}
				}
				return step("next");
			});
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var NoiseButton = function(_PIXI$Application) {
		_inherits(NoiseButton, _PIXI$Application);

		function NoiseButton(options) {
			var _this2 = this;

			var _ret;

			_classCallCheck(this, NoiseButton);

			var _this = _possibleConstructorReturn(this, (NoiseButton.__proto__ || Object.getPrototypeOf(NoiseButton)).call(this, {
				autoStart: false,
				autoResize: true,
				transparent: true
			}));

			_this.resize = NoiseButton.debounce(_asyncToGenerator( /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {

						switch (_context.prev = _context.next) {
							case 0:
								if (_this.setSize()) {
									_this.container.removeChildren(0, _this.container.children.length - 1);

									_this.addGraphics();
									_this.createTimeLine();
									_this.render();
								}

							case 1:
							case "end":
								return _context.stop();
						}
					}

				}, _callee, _this2);
			})), _this, 100);


			_this.options = Object.assign({}, {
				backgroundColor: 0x4875cc,
				backgroundAlpha: 1,
				polygon: "0, 0, 0, 0",
				borderColor: 0x4875cc,
				borderWidth: 0,
				wavesAlpha: 1,
				displacementScale: {
					x: 30,
					y: 50
				},
				displacementMap: "../img/displace-map.jpg"
			}, options);

			// example of the received polygon string
			// '30, 0, 30, 0'
			_this.polygon = _this.options.polygon.replace(/\s/g, "").split(",").map(function(el) {
				var number = el | 0;
				return number > _this.options.borderWidth ? number - _this.options.borderWidth / 2 : number;
			});

			_this.offset = 20;
			_this.animate = false;
			return _ret = _this.createCanvas(), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(NoiseButton, [{
			key: "createCanvas",
			value: function() {
				var _ref2 = _asyncToGenerator( /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
					var wavesTexture;
					return regeneratorRuntime.wrap(function _callee2$(_context2) {
						while (1) {

							switch (_context2.prev = _context2.next) {
								case 0:
									this.options.element.classList.add("noise-container");
									this.view.classList.add("noise-canvas");
									this.options.element.appendChild(this.view);

									this.container = new PIXI.Container();
									this.stage.addChild(this.container);

									_context2.next = 7;
									// return this.loadTexture(this.options.waves);

								case 7:
									wavesTexture = _context2.sent;

									this.waves = new PIXI.Sprite(wavesTexture);
									this.noiseSprite = PIXI.Sprite.fromImage(this.options.displacementMap);

									this.setSize();
									this.addGraphics();
									this.bindEvents();
									this.render();
									if (!$(this.options.element).hasClass('main__btn')) {
										this.options.element.classList.add('canvas-ready');
									}

								case 15:
								case "end":
									return _context2.stop();
							}
						}

					}, _callee2, this);
				}));

				function createCanvas() {
					return _ref2.apply(this, arguments);
				}

				return createCanvas;
			}()
		}, {
			key: "addGraphics",
			value: function addGraphics() {
				this.container.addChild(this.getPolygon(true));

				if (this.options.waves) this.drawWaves();

				var rect = new PIXI.Graphics();
				rect.beginFill(0, 0);
				rect.drawRect(0, 0, this.width, this.width);

				this.container.addChild(rect);
				this.container.addChild(this.getPolygon());
				this.setMask();
				this.addFilter();
			}
		}, {
			key: "setMask",
			value: function setMask() {
				var mask = this.getPolygon();
				this.stage.addChild(mask);
				this.container.mask = mask;
			}
		}, {
			key: "drawWaves",
			value: function drawWaves() {
				this.waves.alpha = 1 - this.options.wavesAlpha;

				this.waves.y = this.height * this.options.wavesPos.y;
				this.container.addChild(this.waves);

				this.waves.width = this.waves.height = this.width;
			}
		}, {
			key: "setSize",
			value: function setSize() {
				var parentWidth = this.options.element.offsetWidth;
				var parentHeight = this.options.element.offsetHeight;

				this.width = parentWidth + this.offset * 2;
				this.height = parentHeight + this.offset * 2;

				if (this.oldWidth !== this.width) {
					this.renderer.resize(this.width, this.height);
					this.oldWidth = this.width;
					return true;
				} else return false;
			}
		}, {
			key: "loadTexture",
			value: function loadTexture(src) {
				return new Promise(function(resolve) {
					var loader = new PIXI.loaders.Loader();
					loader.add("waves", src);
					loader.load(function(loader, resources) {
						return resolve(resources.waves.texture);
					});
				});
			}
		}, {
			key: "addFilter",
			value: function addFilter() {
				this.container.addChild(this.noiseSprite);

				this.noiseFilter = new PIXI.filters.DisplacementFilter(this.noiseSprite);
				this.container.filters = [this.noiseFilter];
				this.noiseSprite.position.x = -this.width;
				this.noiseSprite.width = this.width * 3;
				this.noiseFilter.scale.x = 0;
				this.noiseFilter.scale.y = 0;
			}
		}, {
			key: "createTimeLine",
			value: function createTimeLine() {
				var _this3 = this;

				this.timeline = new TimelineMax({
					onUpdate: this.render.bind(this),
					paused: true,
					onStart: function onStart() {
						return _this3.animate = true;
					},
					onComplete: function onComplete() {
						return _this3.animate = false;
					}
				}).to(this.noiseFilter.scale, 0.2, {
					x: this.options.displacementScale.x,
					y: this.options.displacementScale.y
				}).fromTo(this.noiseSprite, 0.5, {
					x: -(this.noiseSprite.width * 0.66)
				}, {
					x: 0
				}, "-=.2").to(this.noiseFilter.scale, 0.2, {
					x: 0,
					y: 0
				}, "-=.2");
			}
		}, {
			key: "play",
			value: function play() {
				if (!this.animate) this.timeline.play(0);
			}
		}, {
			key: "bindEvents",
			value: function bindEvents() {
				this.createTimeLine();
				this.options.element.addEventListener("mouseenter", this.play.bind(this));
				// window.addEventListener("resize", this.resize.bind(this));
			}
		}, {
			key: "getPolygon",
			value: function getPolygon(background) {
				var points = this.polygon;
				var graphics = new PIXI.Graphics();
				var width = this.width - this.offset * 2 - this.options.borderWidth;
				var height = this.height - this.offset * 2 - this.options.borderWidth;

				graphics.position.x = this.offset + this.options.borderWidth / 2;
				graphics.position.y = this.offset + this.options.borderWidth / 2;

				var arrayLines = [
					[0, points[0]],
					[points[0], 0],
					[width - points[1], 0],
					[width, points[1]],
					[width, height - points[2]],
					[width - points[2], height],
					[points[3], height],
					[0, height - points[3]],
					[0, points[0]]
				];

				graphics.lineStyle(this.options.borderWidth, this.options.borderColor);

				graphics.beginFill(this.options.backgroundColor, background ? 1 - this.options.backgroundAlpha : 0);

				for (var i = 0, prevCoords = []; i < arrayLines.length; i++) {

					if (prevCoords.length && prevCoords[0] === arrayLines[i][0] && prevCoords[1] === arrayLines[i][1]) continue;
					if (i === 0) {
						graphics.moveTo(arrayLines[i][0], arrayLines[i][1]);
						prevCoords = arrayLines[i];
						continue;
					}

					prevCoords = arrayLines[i];
					graphics.lineTo(arrayLines[i][0], arrayLines[i][1]);
				}


				graphics.endFill();

				return graphics;
			}
		}], [{
			key: "debounce",
			value: function debounce(func, context, wait, immediate) {
				var _arguments = arguments;

				var timeout = void 0;

				return function() {
					var args = _arguments;

					var later = function later() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};

					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
			}
		}]);

		return NoiseButton;
	}(PIXI.Application);

	new NoiseButton({
		element: document.querySelector('.main__btn'),
		polygon: '23, 0, 23, 0',
		wavesPos: {
			y: 0,
			x: 0
		},
		borderWidth: 2,
		borderColor: '0xb836c6',
		backgroundAlpha: 1,
		wavesAlpha: 0.8,

		waves: "../img/ex/ex1.jpg",

		displacementMap: '../img/displace-map.jpg'
	});
	new NoiseButton({
		element: document.querySelector('.chat__btn--tg'),
		polygon: '20, 0, 20, 0',
		wavesPos: {
			y: 0,
			x: 0
		},
		borderWidth: 2,
		borderColor: '0xb836c6',
		backgroundAlpha: 1,
		wavesAlpha: 0.8,
		displacementMap: '../img/displace-map.jpg'
	});
	new NoiseButton({
		element: document.querySelector('.chat__btn--slack'),
		polygon: '20, 0, 20, 0',
		wavesPos: {
			y: 0,
			x: 0
		},
		borderWidth: 2,
		borderColor: '0xb836c6',
		backgroundAlpha: 1,
		wavesAlpha: 0.8,
		displacementMap: '../img/displace-map.jpg'
	});
	new NoiseButton({
		element: document.querySelector('.request__btn'),
		polygon: '20, 0, 20, 0',
		wavesPos: {
			y: 0,
			x: 0
		},
		borderWidth: 2,
		borderColor: '0xc5c5c5',
		backgroundAlpha: 1,
		wavesAlpha: 0.8,
		displacementMap: '../img/displace-map.jpg'
	});
	new NoiseButton({
		element: document.querySelector('.request__form-btn'),
		polygon: '20, 0, 20, 0',
		wavesPos: {
			y: 0,
			x: 0
		},
		borderWidth: 2,
		borderColor: '0xb836c6',
		backgroundAlpha: 1,
		wavesAlpha: 0.8,
		displacementMap: '../img/displace-map.jpg'
	});
});

// Examples Tilt
$(function() {

	if (!isMob()) {
		var $example = $('.example-wrap');

		function initTilt() {
			TweenMax.set([$example], { transformStyle: "preserve-3d" });

			$example.mousemove(function(e) {
				var self = $(this);
				var sxPos = e.pageX / self.width() * 100 - 100;
				var syPos = (e.pageY - $(this).offset().top) / self.height() * 100 - 100;

				TweenMax.to(self, 2, {
					rotationY: 0.03 * sxPos,
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

// Interactive image nodes
$(function() {
	function Nodes(params) {

	  // Settings
	  this.density = params.density;
	  
	  this.drawDistance = 28;
	  this.baseRadius = 2;
	  this.maxLineThickness = 1;
	  this.reactionSensitivity = 2;
	  this.lineThickness = 1;

	  this.points = [];
	  this.mouse =  { x: -1000, y: -1000, down: false };

	  this.animation = null;

	  this.canvas = params.canvas;
	  this.context = null;

	  this.imageInput = null;
	  this.bgImage = null;
	  this.bgCanvas = null;
	  this.bgContext = null;
	  this.bgContextPixelData = null;
	  this.imgData = params.data;
	}

	Nodes.prototype.init = function() {
	  this.context = this.canvas.getContext('2d');
		this.context.globalCompositeOperation = "lighter";
		
	  this.canvas.width = 768;
	  this.canvas.height = 768;

	  this.canvas.style.display = 'block';

		var self = this;
	  this.canvas.addEventListener('mousemove', function(event) {
			TweenMax.ticker.addEventListener('tick', self.draw, self);

			self.mouse.x = event.offsetX || (event.layerX - self.canvas.offsetLeft);
			self.mouse.y = event.offsetY || (event.layerY - self.canvas.offsetTop);
		});
		this.canvas.addEventListener('mouseout',  function(event) {
			self.mouse.x = -1000;
			self.mouse.y = -1000;
			self.mouse.down = false;

			setTimeout(function() {
				TweenMax.ticker.removeEventListener('tick', self.draw);
			}, 1200);
		});
		
	  this.loadData(this.imgData);	  
	};

	Nodes.prototype.preparePoints = function() {

	  // Clear the current points
	  this.points = [];
	  
	  var width, height, i, j;

	  var colors = this.bgContextPixelData.data;

	  for( i = 0; i < this.canvas.height; i += this.density ) {

	    for ( j = 0; j < this.canvas.width; j += this.density ) {

	      var pixelPosition = ( j + i * this.bgContextPixelData.width ) * 4;

	      // Dont use whiteish pixels
	      if ( colors[pixelPosition] > 200 && (colors[pixelPosition + 1]) > 200 && (colors[pixelPosition + 2]) > 200 || colors[pixelPosition + 3] === 0 ) {
	        continue;
	      }
	      
	      var color = 'rgba(' + colors[pixelPosition] + ',' + colors[pixelPosition + 1] + ',' + colors[pixelPosition + 2] + ',' + '1)';
	      this.points.push( { x: j, y: i, originalX: j, originalY: i, color: color } );

	    }
	  }
	};

	Nodes.prototype.updatePoints = function() {

	  var i, currentPoint, theta, distance;
	  
	  for (i = 0; i < this.points.length; i++ ){

	    currentPoint = this.points[i];

	    theta = Math.atan2( currentPoint.y - this.mouse.y, currentPoint.x - this.mouse.x);

	    if ( this.mouse.down ) {
	      distance = this.reactionSensitivity * 200 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
	       (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
	    } else {
	      distance = this.reactionSensitivity * 100 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
	       (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));  
	    }
	    

	    currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * 0.05;
	    currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * 0.05;

	  }
	};

	Nodes.prototype.drawLines = function() {
	  var i, j, currentPoint, otherPoint, distance, lineThickness;

	  for ( i = 0; i < this.points.length; i++ ) {

	    currentPoint = this.points[i];

	    // Draw the dot.
	    this.context.fillStyle = currentPoint.color;
	    this.context.strokeStyle = currentPoint.color;

	    for ( j = 0; j < this.points.length; j++ ){

	      // Distaqnce between two points.
	      otherPoint = this.points[j];

	      if ( otherPoint == currentPoint ) {
	        continue;
	      }

	      distance = Math.sqrt((otherPoint.x - currentPoint.x) * (otherPoint.x - currentPoint.x) +
	       (otherPoint.y - currentPoint.y) * (otherPoint.y - currentPoint.y));

	      if (distance <= this.drawDistance) {

	        this.context.lineWidth = (1 - (distance / this.drawDistance)) * this.maxLineThickness * this.lineThickness;
	        this.context.beginPath();
	        this.context.moveTo(currentPoint.x, currentPoint.y);
	        this.context.lineTo(otherPoint.x, otherPoint.y);
	        this.context.stroke();
	      }
	    }
	  }
	};

	Nodes.prototype.drawPoints = function() {

	  var i, currentPoint;

	  for ( i = 0; i < this.points.length; i++ ) {

	    currentPoint = this.points[i];

	    // Draw the dot.
	    this.context.fillStyle = currentPoint.color;
	    this.context.strokeStyle = currentPoint.color;

	    this.context.beginPath();
	    this.context.arc(currentPoint.x, currentPoint.y, this.baseRadius ,0 , Math.PI*2, true);
	    this.context.closePath();
	    this.context.fill();

	  }
	};

	Nodes.prototype.clear = function() {
	  this.canvas.width = this.canvas.width;
	};

	Nodes.prototype.draw = function() {
		
	  this.clear();
	  this.updatePoints();
	  this.drawLines();
	  this.drawPoints();

	};

	// Image is loaded... draw to bg canvas
	Nodes.prototype.drawImageToBackground = function() {

	  this.bgCanvas = document.createElement('canvas');
	  this.bgCanvas.width = this.canvas.width;
	  this.bgCanvas.height = this.canvas.height;

	  var newWidth, newHeight;

	  // If the image is too big for the screen... scale it down.
	  if (this.bgImage.width > this.bgCanvas.width - 100 || this.bgImage.height > this.bgCanvas.height - 100) {

	    var maxRatio = Math.max( this.bgImage.width / (this.bgCanvas.width - 100) , this.bgImage.height / (this.bgCanvas.height - 100) );
	    newWidth = this.bgImage.width / maxRatio;
	    newHeight = this.bgImage.height / maxRatio;

	  } else {
	    newWidth = this.bgImage.width;
	    newHeight = this.bgImage.height;
	  }

	  // Draw to background canvas
	  this.bgContext = this.bgCanvas.getContext( '2d' );
	  this.bgContext.drawImage( this.bgImage, Math.floor((this.canvas.width - newWidth) / 2), Math.floor((this.canvas.height - newHeight) / 2), newWidth, newHeight);
	  this.bgContextPixelData = this.bgContext.getImageData( 0, 0, this.bgCanvas.width, this.bgCanvas.height );

	  this.preparePoints();
	  this.draw();
	};

	// The filereader has loaded the image... add it to image object to be drawn
	Nodes.prototype.loadData = function(data) {
	  
	  this.bgImage = new Image;
	  this.bgImage.src = data;

	  var self = this;

	  this.bgImage.onload = function() {

	    //this
	    self.drawImageToBackground();
	  }
	};

	Nodes.prototype.mouseDown = function( event ){
	  this.mouse.down = true;
	};

	Nodes.prototype.mouseUp = function( event ){
	  this.mouse.down = false;
	};
	
	Nodes.prototype.mouseMove = function(event){
	  this.mouse.x = event.offsetX || (event.layerX - this.canvas.offsetLeft);
	  this.mouse.y = event.offsetY || (event.layerY - this.canvas.offsetTop);
	};
	
	Nodes.prototype.mouseOut = function(event){
	  this.mouse.x = -1000;
	  this.mouse.y = -1000;
	  this.mouse.down = false;
	};

	// Resize and redraw the canvas.
	Nodes.prototype.onWindowResize = function() {
	  cancelAnimationFrame( this.animation );
	  this.drawImageToBackground();
	}

	var brain = new Nodes({
		density: 14,
		canvas: document.querySelector('.int-canvas--brain'),
		data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAHKCAYAAAAtqh1dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTU2ODgyRTM4MjkxMUU4QjM0MEUzNzU5RjI0MkQ1NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MTU2ODgyRjM4MjkxMUU4QjM0MEUzNzU5RjI0MkQ1NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxNTY4ODJDMzgyOTExRThCMzQwRTM3NTlGMjQyRDU0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxNTY4ODJEMzgyOTExRThCMzQwRTM3NTlGMjQyRDU0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dHA/gAAAxNRJREFUeNrsvQeY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'
	});
	brain.init();

	var cup = new Nodes({
		density: 22,
		canvas: document.querySelector('.int-canvas--cup'),
		data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJDQjgxRjEzODJDMTFFOEIyQjlDM0VFNEM1Rjk3Q0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJDQjgxRjAzODJDMTFFOEIyQjlDM0VFNEM1Rjk3Q0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QURGQkIxQzMzODIwMTFFODk4QzBGMDQ4QkU0MjVEQjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QURGQkIxQzQzODIwMTFFODk4QzBGMDQ4QkU0MjVEQjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7r6AXAAAAwNklEQVR42uyd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'
	});
	cup.init();

	var chat = new Nodes({
		density: 16,
		canvas: document.querySelector('.int-canvas--chat'),
		data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REJCMjZCMzczODI5MTFFOEFDRURDNkFEMTU4M0RDMjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REJCMjZCMzYzODI5MTFFOEFDRURDNkFEMTU4M0RDMjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUZBNjFEQzkzODIxMTFFOEIwNDQ5QkVFM0M3ODM0MDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUZBNjFEQ0EzODIxMTFFOEIwNDQ5QkVFM0M3ODM0MDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4R1+9YAABWpUlEQVR42ux9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'
	});
	chat.init();

});

// Glitch examples
$(function() {

	function Slide(el) {
		this.DOM = {el: el};
		this.DOM.slideImg = this.DOM.el.querySelector('.example__img');
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
	  this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.example'));

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

	var slideshow = new GlitchSlideshow(document.querySelector('.examples'));
	
});

// Add member
$(function() {
	var index = 2;

	var focusHandler = function() {
		$('.request__input, .request__textarea').each(function(i, input) {
			var valueLen = $(input).val().length;
			if (valueLen === 0) {
				$(input).parent().removeClass('clicked');
			}
		});
		$(this).parent().addClass('clicked');
	};

	var memberTemplate = document.querySelector('#member-template').content.querySelector('.request__member');
	
	$('.request__form-member').on('click', function() {

		if (index < 10) {
			memberTemplate.querySelector('.member-num').textContent = '0' + index;
		} else {
			memberTemplate.querySelector('.member-num').textContent = index;
		}

		$('.request__form-member').before(memberTemplate.outerHTML);

		$('.request__form-member').prev().find('input[name="member-name"], input[name="member-role"]').on('focus', focusHandler);

		// Удаление инпутов
		$('.request__form-member').prev().find('.member-delete').on('click', function() {
			$(this).parent().parent().remove();
			index--;

			$('.member-num').each(function(i, el) {
				i++;

				if (i < 10) {
					$(el).text('0' + i);
				} else {
					$(el).text(i);
				}				

			});

		});

		index++;

	});
	
});

// Noise
$(function() {
	var noise = function() {
		var canvas, ctx;

		var wWidth, wHeight;

		var noiseData = [];
		var frame = 0;

		var loopTimeout;


	    // Create Noise
			var createNoise = function() {
				var idata = ctx.createImageData(wWidth, wHeight);
				var buffer32 = new Uint32Array(idata.data.buffer);
				var len = buffer32.length;

				for (var i = 0; i < len; i++) {
				    if (Math.random() < 0.5) {
				        buffer32[i] = 0xff000000;
				    }
				}

				noiseData.push(idata);
			};

	    // Play Noise
	    var paintNoise = function() {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
	    };

	    // Loop
	    var loop = function() {
	        paintNoise(frame);

	        loopTimeout = window.setTimeout(function() {
	            window.requestAnimationFrame(loop);
	        }, (1000 / 25));
	    };

	    // Setup
	    var setup = function() {
	        wWidth = window.innerWidth;
	        wHeight = window.innerHeight;

	        canvas.width = wWidth;
	        canvas.height = wHeight;

	        for (var i = 0; i < 10; i++) {
	            createNoise();
	        }

	        loop();
	    };

	    // Reset
	    var resizeThrottle;
	    var reset = function() {
	        window.addEventListener('resize', function() {
	            window.clearTimeout(resizeThrottle);

	            resizeThrottle = window.setTimeout(function() {
	                window.clearTimeout(loopTimeout);
	                setup();
	            }, 200);
	        }, false);
	    };

	    // Init
	    var init = (function() {
	        canvas = document.getElementById('noise');
	        ctx = canvas.getContext('2d');

	        setup();
	    })();
	};

	noise();
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