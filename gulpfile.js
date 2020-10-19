var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss    = require ('gulp-concat-css');
var ftp          = require ('gulp-ftp');

gulp.task('serve', function(done) {
// Запуск статического сервера
	browserSync.init({
			server: "src/", // Путь сервера
			browser: "chrome" // Запуск через google chrome
	});

// Просматривает(отслеживает) sass/html файлы
	gulp.watch("src/sass/*.sass", gulp.series ('sass')); // Если в файле *.sass обнаружены изменения, запускается функция 'sass' (компиляция)
	gulp.watch("src/*.html").on('change', () => {
		browserSync.reload();
		done();
	}); // При изменении файла *.html, браузер перезагружается

	done();
});

// Автоматическая компиляция Sass файлов в CSS и обновление страницы
gulp.task('sass', function(done) {
	gulp.src("src/sass/*.sass") // 'достает' файлы в папке
		.pipe(sass().on('error', sass.logError)) // 'передает' файлы (pipe) и выполняет функцию компиляции, проверяет на наличие ошибок в файле Sass
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(concatCss("style.css"))
		.pipe(gulp.dest("src/css")) // передает файлы и с помощью функции 'gulp.dest' кладет откомпилированные файлы в папку 'css'
		.pipe(browserSync.stream()); // перезагружает браузер

		done();
});

gulp.task('ftp', function(){
	return gulp.src('src/*')
	.pipe(ftp({
		host: 'website.com', 					// хостинг			
		user: 'jonny', 								// логин
		pass: '1234', 								// пароль
		remotePath: 'www/serg.ru/progect' 		// путь папки сохранения 
	}))
});

gulp.task('default',  gulp.series ('serve')); // задача по умолчанию 