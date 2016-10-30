var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = () => gulp.src('./src/sass/**/*.scss')
                           .pipe(sourcemaps.init())
                           .pipe(sass().on('error', sass.logError))
                           .pipe(sourcemaps.write('./'))
                           .pipe(gulp.dest('./src/css/built'));
