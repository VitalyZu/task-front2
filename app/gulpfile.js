var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    browserSync  = require('browser-sync').create();

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: "../app"
        }
    });
})
    
gulp.task('sass', function(){
    return gulp.src('misc/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('misc/css'))
    .pipe(browserSync.reload({stream: true}));
})
gulp.task('code', function() {
    return gulp.src('../app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function(){
    gulp.watch('misc/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('misc/**/*.html',gulp.parallel('code'));
})

gulp.task('default',gulp.parallel('sass','server','watch'))
