var gulp = require('gulp'),
    jshint = require('gulp-jshint');

module.exports = () => gulp.src(['./src/**/*.js', '!./src/vendor/**/*.js'])
                           .pipe(jshint('./config/.jshintrc'))
                           .pipe(jshint.reporter(require('jshint-stylish')));
