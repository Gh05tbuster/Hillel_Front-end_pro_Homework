const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer'); //! breaks the code
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// const imagemin = require('gulp-imagemin'); //! breaks the code
const browserSync = require('browser-sync').create();

gulp.task('autoPrefixCSS', function () {
    return gulp.src('app/css/*.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('sassToCSS', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('minifyCSS', function () {
    return gulp.src('app/css/*.css')
        .pipe(autoPrefixCSS())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('minifyJS', function () {
    return gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('concatCSS', function () {
    return gulp.src('app/css/*.css')
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist/css/'))
})

gulp.task('concatJS', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/js/'))
})

gulp.task('copyImages', function () {
    return gulp.src('app/img/**/*').pipe(gulp.dest('dist/img'))
})

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});


function watchAll() {
    gulp.watch('app/scss/*.scss', gulp.series('sassToCSS'));
    gulp.watch('app/css/*.css', gulp.series('minifyCSS'));
    // gulp.watch('app/css/*.css', gulp.series('autoPrefixCSS'));
    gulp.watch('app/js/*.js', gulp.series('minifyJS'));
    gulp.watch('app/img/**/*', gulp.series('copyImages'));
}

// gulp.task('default', gulp.parallel(watchAll, 'serve'));
gulp.task('default', gulp.parallel(watchAll));