const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/*scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function images() {
    return gulp.src('./src/imagens/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/imagens'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/script/*.js', gulp.parallel(scripts))
}