var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    fs = require('fs');

module.exports = () => fs.readFile('./src/css/built/styles.css.map', 'utf8', function (err, contents) {
    return gulp.src('./dist/css/package.css')
               .pipe(sourcemaps.init())
               .pipe(cleanCSS({
                   sourceMap: contents
               }))
               .pipe(rename({ suffix: '.min' }))
               .pipe(sourcemaps.write('./'))
               .pipe(gulp.dest('./dist/css'))
});
