var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = () => gulp.src(['./src/vendor/**/*.js', './src/js/**/*.js', '!./src/js/lint-test.js'])
                           .pipe(sourcemaps.init())
                           .pipe(concat('package.js'))
                           .pipe(sourcemaps.write('./'))
                           .pipe(gulp.dest('./dist/js'));
