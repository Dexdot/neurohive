var	gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		ftp            = require('vinyl-ftp'),
		notify         = require('gulp-notify'),
		svgmin         = require('gulp-svgmin'),
		svgstore       = require('gulp-svgstore'),
		postcss        = require('gulp-postcss'),
		autoprefixer   = require('autoprefixer'),
		mqpacker       = require('css-mqpacker'),
		plumber        = require('gulp-plumber'),
		rsync          = require('gulp-rsync');


// gulp.task('kam-css', function() {
// 	return gulp.src([
// 		'style.css',
// 		])
// 	.pipe(postcss([ autoprefixer({
// 	    browsers: ['last 3 versions'],
// 	    cascade: false
// 	  }),
// 	  mqpacker()
// 	  ]))
// 	.pipe(cleanCSS())
// 	.pipe(gulp.dest('./'));
// });

// gulp.task('kam-js', function() {
// 	return gulp.src([
// 		'projects.js',
// 		])
// 	.pipe(plumber())
// 	.pipe(concat('projects.min.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('./'));
// });

gulp.task('common-js', function() {
	return gulp.src([
		'app/js/notfound.js',
		])
	.pipe(plumber())
	.pipe(concat('notfound.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'app/libs/jquery/jquery.min.js',

		'app/libs/gsap/gsap.js',
		'app/libs/split/split.js',

		'app/libs/scrollmagic/scrollmagic.js',
		'app/libs/scrollmagic/animation.gsap.js',
		
		'app/libs/pixi/pixi.js',
		'app/libs/pixi/polyfill.min.js',

		'app/libs/three/three.min.js',

		'app/js/common.min.js'
		])
	.pipe(plumber())
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			host: "192.168.0.130",
			// host: "192.168.0.134",
			// host: "172.20.10.2",
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand', precision: 5}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(postcss([ autoprefixer({
	    browsers: ['last 3 versions'],
	    cascade: false
	  }),
	  mqpacker()
	  ]))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'common-js', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['app/js/notfound.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('sprite', function() {
  return gulp.src('app/img/svg/*.svg')
  .pipe(plumber())
  .pipe(svgmin())
  .pipe(svgstore({ inlineSvg: true }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('app/img/svg/sprite/'));
});

gulp.task('build', ['removedist', 'sass', 'js'], function() {

	var buildFiles = gulp.src([
		'app/*.html',
		'app/*.php',
		'app/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	// var buildJs = gulp.src([
	// 	'app/js/scripts.min.js',
	// 	]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/**',
	'dist/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));

});

gulp.task('rsync', function() {
	return gulp.src('dist/**')
	.pipe(rsync({
		root: 'dist/',
		// hostname: 'username@yousite.com',
		// destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Скрытые файлы, которые необходимо включить в деплой
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}));
});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);