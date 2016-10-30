var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = () => gulp.src(['./src/css/**/*.css'])
                           .pipe(sourcemaps.init())
                           .pipe(concat('package.css'))
                           .pipe(sourcemaps.write('./'))
                           .pipe(gulp.dest('./dist/css'));
