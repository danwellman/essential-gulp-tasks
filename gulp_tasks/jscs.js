var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    reporter = require('gulp-jscs-stylish');

module.exports = () => gulp.src('./src/**/*.js')
                           .pipe(jscs({ configPath: './config/.jscsrc', fix: true }))
                           .pipe(reporter())
                           .pipe(gulp.dest('src'));
