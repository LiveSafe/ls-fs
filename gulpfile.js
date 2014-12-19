'use strict';

var _ = require('ls-lodash'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    mocha = require('gulp-mocha'),
    mergeStream = require('merge-stream'),
    lsConfigs = require('ls-default-configs');

gulp.task('default', _.noop);

gulp.task('test', function() {
    gulp.start('lint', 'mocha');
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], {read: false})
        .pipe(mocha());
});

gulp.task('lint', function() {
    var jshintTestConfig = _.safeMerge(lsConfigs.jshintrc, {
            globals: {
                describe: true,
                it: true
            }
        }),
        jscsLint = gulp.src(['lib/**/*.js', 'test/**/*.js', './*.js'])
            .pipe(jscs(lsConfigs.jscsrc)),
        testLint = gulp.src(['test/*.js'])
            .pipe(jshint(jshintTestConfig))
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail')),

        otherLint = gulp.src(['./*.js', 'lib/*.js'])
            .pipe(jshint(lsConfigs.jshintrc))
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));

    return mergeStream(testLint, otherLint, jscsLint);
});
