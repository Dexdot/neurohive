// My scripts
var isMob;
$(function() {

	document.body.classList.add('page-preview');

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
			var hasElement = $(target).length !== 0;

			if (hasElement) {
				event.preventDefault();
				var top = $(target).offset().top + parseInt($(target).css('padding-top'));
				$('html, body').animate({
					scrollTop: top - 5},
					1000);
			}
		});
	// Custom CSS
		var customCSS = function() {

			// Project name max-width
			$('.preview__name').css('max-width', $('.preview__social').outerWidth());

			if (!$('.preview-info__video').length) {
				$('.preview-info').css('margin-top', '5em');
			}

		};
		customCSS();
		$(window).on('resize', customCSS);
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

// Scrollmagic
$(function() {
	if (!isMob()) {
			var controller = new ScrollMagic.Controller();

			new ScrollMagic.Scene({
				triggerElement: '.preview-info__video-wrap',
				triggerHook: 'onLeave',
				offset: -window.innerHeight,
				duration: '100%'
			})
			.setTween(
				new TimelineMax()
				.fromTo('.preview-info__video-wrap', 1, {y: '20%'}, {y: '-25%'})
			)
			.addTo(controller);
	} 
});


// Perlin Noise Buttons
var NoiseButton;
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

	NoiseButton = function(_PIXI$Application) {
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
	if ($('.preview__link--github').length) {
		new NoiseButton({
			element: document.querySelector('.preview__link--github'),
			polygon: '23, 0, 23, 0',
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
	}
	if ($('.preview__link--site').length) {
		new NoiseButton({
			element: document.querySelector('.preview__link--site'),
			polygon: '23, 0, 23, 0',
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
	}
	if ($('.preview__publish-btn').length) {
		new NoiseButton({
			element: document.querySelector('.preview__publish-btn'),
			polygon: '23, 0, 23, 0',
			wavesPos: {
				y: 0,
				x: 0
			},
			borderWidth: 2,
			backgroundColor: '0x882a91',
			borderColor: '0x882a91',
			backgroundAlpha: 0,
			wavesAlpha: 0.8,
			displacementMap: '../img/displace-map.jpg'
		});
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