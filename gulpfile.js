const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function compilaSass() {
    return gulp.src('./source/css/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/css'))
}

function comprimeImagens() {
    return gulp.src('./source/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imgs'))
}

function comprimeJavascript() {
    return gulp.src('./source/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
}

exports.default = function () {
    gulp.watch('./source/css/*.scss', { ignoreInitial: false }, gulp.series(compilaSass))
    gulp.watch('./source/imgs/*', { ignoreInitial: false }, gulp.series(comprimeImagens))
    gulp.watch('./source/js/*.js', { ignoreInitial: false }, gulp.series(comprimeJavascript))
}