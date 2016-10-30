var gulp = require('gulp'),
    clean = require('gulp-clean');

module.exports = () => gulp.src(['./src/css/built', './src/js/built', './dist'], { read: false })
                           .pipe(clean());
