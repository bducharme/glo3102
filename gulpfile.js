'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function () {
    var target = gulp.src('./public/index.html');
    var sources = gulp.src(['./public/bower_components/**/*.min.css', './public/css/*.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./public'));
});