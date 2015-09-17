'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function () {
    var target = gulp.src('./public/index.html');
    var sources = gulp.src(['./public/bower_components/**/*.min.css', './public/css/*.css',
                            './public/bower_components/angular*/**/*.min.js', './public/app/**/*.js'],
                            {read: false});

    var injectOptions = {
        ignorePath: 'public',
        addRootSlash: false
    };

    return target.pipe(inject(sources, injectOptions))
        .pipe(gulp.dest('./public'));
});

