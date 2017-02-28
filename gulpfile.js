////////////////////////////////////////
// Required //////////////////////////
////////////////////////////////////////

var gulp = require('gulp'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync'),
reload = browserSync.reload,
sass = require('gulp-sass'),
plumber = require('gulp-plumber'),
rename = require('gulp-rename'),
autoprefixer = require('gulp-autoprefixer');


////////////////////////////////////////
// HTML Tasks //////////////////////////
////////////////////////////////////////

gulp.task('html', function(){
    gulp.src('app/index.html')
    .pipe(gulp.dest('./app/site')).pipe(reload({stream:true}));
});


////////////////////////////////////////
// css Tasks //////////////////////////
////////////////////////////////////////

gulp.task('css', function(){
    gulp.src('app/css/**/*.css').pipe(gulp.dest('app/site/css')).pipe(reload({stream:true}));
});


////////////////////////////////////////
// bower Tasks //////////////////////////
////////////////////////////////////////

gulp.task('bower', function(){
    gulp.src('app/bower_components/**').pipe(gulp.dest('app/site/bower_components')).pipe(reload({stream:true}));
});


////////////////////////////////////////
// js Tasks //////////////////////////
////////////////////////////////////////

gulp.task('js', function(){
    gulp.src('app/js/**/*.js').pipe(gulp.dest('app/site/js')).pipe(reload({stream:true}));
});


////////////////////////////////////////
// Sass Tasks //////////////////////////
////////////////////////////////////////

gulp.task('sass', function(){
    gulp.src('app/sass/**/*.sass')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('app/css')).pipe(reload({stream:true}));
});


///////////////////////////////////////////////
// Watch Task
///////////////////////////////////////////////
gulp.task("watch", function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/bower_components/**', ['bower']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/css/**/*.css', ['css']);
    gulp.watch('app/js/**/*.js', ['js']);
});

///////////////////////////////////////////////
// BrowserSync Task
///////////////////////////////////////////////
gulp.task('browser-sync', function() {
    browserSync ({
        server:{
            baseDir: './app/site/'
        }
    })
});

////////////////////////////////////////
// defalut Task //////////////////////////
////////////////////////////////////////
gulp.task('default', ['sass', 'html','css', 'js', 'bower', 'watch', 'browser-sync']);











gulp.src('app/js/**/*.js').pipe(gulp.dest('app/site/js'));
gulp.src('app/bower_components/**').pipe(gulp.dest('app/site/bower_components'));
gulp.src('app/images/*').pipe(gulp.dest('app/site/images'));
