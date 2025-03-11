const gulp = require ('gulp')
const sass = require('gulp-sass')(require('sass'))
const imageMin = require('gulp-imagemin')

function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'))
}

function minificaImages() {
    return gulp.src('./src/images/**/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, compilaSass)
}

exports.minificaImages = gulp.parallel(compilaSass, minificaImages)