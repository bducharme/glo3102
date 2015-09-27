'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');

gulp.task('default', function () {
    var target = gulp.src('./public/index.html');
    var sources = gulp.src(['./public/bower_components/**/*.min.css',
            './public/css/*.css',
            './public/bower_components/jquery/dist/**/*.min.js',
            './public/bower_components/bootstrap/dist/**/*.min.js',
            '!./public/bower_components/angular-bootstrap/ui-bootstrap.min.js',
            './public/bower_components/angular*/**/*.min.js',
            './public/bower_components/bootstrap/fonts/**.*',
            './public/app/**/*.js'],
            {read: false});

    var injectOptions = {
        ignorePath: 'public',
        addRootSlash: false
    };

    return target.pipe(inject(sources, injectOptions))
        .pipe(gulp.dest('./public'));
});

gulp.task('jshint', function() {
    return gulp.src('./public/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

