const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("assets/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest("assets/css"))
});

gulp.task('watch', function() {
    gulp.watch("assets/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'styles', 'server'));