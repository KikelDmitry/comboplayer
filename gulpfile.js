var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('build', function () {
    return gulp.src('./less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less') ]
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./less/**/*.less', ['build'])
});