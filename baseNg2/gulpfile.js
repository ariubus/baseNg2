/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var _ = require('lodash');

var ng2 = ['node_modules/angular2/bundles/*.*',
           'node_modules/systemjs/dist/*.*',
           'node_modules/rxjs/bundles/*.*',
           'node_modules/es6-shim/es6-shim.js'];



gulp.task('lib-copy2', function () {

    _.forEach(ng2, function (file) {
        gulp.src(file).pipe(gulp.dest("content/lib/ng2"));
    });

});