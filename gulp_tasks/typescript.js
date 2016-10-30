var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject('./config/tsconfig.json'),
    tsResult = gulp.src('./src/ts/**/*.ts')
                   .pipe(sourcemaps.init())
                   .pipe(tsProject());

module.exports = () => tsResult.js
                               .pipe(sourcemaps.write('./'))
                               .pipe(gulp.dest('./src/js/built'));
