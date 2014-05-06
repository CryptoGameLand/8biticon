var gulp = require('gulp');
var p = require('gulp-load-plugins')();

gulp.task('dev', function () {
    var server = p.livereload();
    gulp.watch('**').on('change', function (file) {
      console.log('changed');
      server.changed(file.path);
    });
});
