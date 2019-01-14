// My scripts
var isMob;
$(function() {
	$('.faq-page').addClass('anim');

	document.body.classList.add('page-faq');
	$('.page-faq .header').addClass('anim');

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

	// Menu navigation script (toggling)
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
				$('.faq-page').addClass('leave');
				setTimeout(function() {
					window.location = window.location.origin + '/' + target;
					// window.location = target;
				}, 800);
			}
		});
	// Custom CSS
		var customCSS = function() {

			// Лого
			// var logoIconWidth = Math.floor($('.header__logo--double img:eq(0)').width());
			// $('main .fluid-content').css('padding-left', logoIconWidth + 'px');

			// Отступ слева для ответов
			$('.faq__answers').css('margin-left', $('.faq__questions').outerWidth() + 'px');

			// Ширина градиента
			var answersWidth = $('.faq__answers').outerWidth();
			$('.faq__gradient').width(answersWidth);

			// Отступ сверху для контента
			var headerFullHeight = $('.header').outerHeight() + (+$('.header').css('margin-bottom').split('px')[0]) + $('.faq-header').outerHeight();
			$('.faq-page').css('margin-top', headerFullHeight + 50 + 'px');

			// Максимальная высота вопросов (overflow)
			var questionsMaxHeight = window.innerHeight - $('.faq').offset().top;
			$('.faq__questions').css('max-height', questionsMaxHeight + 'px');

			// Максимальная ширина вопросов (link is-active)
			var questionsWidth = $('.faq__questions').outerWidth();
			$('.faq__questions').css('max-width', questionsWidth + 'px');	
		};
		customCSS();
		$(window).on('resize', customCSS);
	// Gradient
		var documentHeight = $(document).outerHeight();
		$(window).on('resize', function() {
			documentHeight = $(document).outerHeight();
		})
		$(window).on('scroll', function() {
			if (window.pageYOffset + window.innerHeight >= documentHeight) {
				$('.faq__gradient').hide();
			} else {
				$('.faq__gradient').show();
			}
		});
});

// Scroll Magic
$(function() {

	$(window).on('scroll', function() {
		var answerTop = $('.faq__answer-group:eq(0)').offset().top;
		if (window.pageYOffset < answerTop) {
			$('.faq__question-link:eq(0)').addClass('is-active');
		}
	});

	var controller = new ScrollMagic.Controller();

	$('.faq__answer-group').each(function(i, answer) {
		new ScrollMagic.Scene({
			triggerHook: 0,
			offset: -($('.header').outerHeight()),
			duration: $(answer).outerHeight(),
			triggerElement: '#' + answer.id,
		})
		.setClassToggle(".faq__question-link[href='#" + answer.id + "']", 'is-active')
		.addTo(controller);
	});
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
			var fixWidth = function() {
				$('.header__nav li').each(function(i, li) {
					if ($(li).width() !== 0) {
						$(li).width($(li).width());
						$(li).height($(li).height());

						$(li).find('span').width($(li).width());
					}
				});
			};
			fixWidth();
		  
		  extrachars = button.text();
		  var intevalzor;
		  $('.header__nav li')
		  .mouseenter(function() {
		  	fixWidth();

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