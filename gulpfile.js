var gulp = require('gulp');
var p = require('gulp-load-plugins')();

gulp.task('dev', function () {
    var server = p.livereload();
    gulp.watch('./*.html', function(evt) {
      console.log('file changed', evt);

      server.changed(evt.path);
    });
});

gulp.task('default', ['dev'], function() {
});
