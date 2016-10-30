var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = () => gulp.src('./dist/js/package.js')
                           .pipe(sourcemaps.init())
                           .pipe(uglify({
                               preserveComments: 'license'
                           }))
                           .pipe(rename({ suffix: '.min' }))
                           .pipe(sourcemaps.write('./'))
                           .pipe(gulp.dest('./dist/js'))
