const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');


gulp.task('sassToCSS', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(gulp.series('autoPrefixCSS'))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('mt', (cb) => {
    console.log('hell');
    cb();
})