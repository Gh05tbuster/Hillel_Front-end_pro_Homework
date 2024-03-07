const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// const imagemin = require('gulp-imagemin'); //! it will break the code

gulp.task('autoPrefixCSS', function () {
    return gulp.src('app/css/*.min.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css/'));
});

gulp.task('sassToCSS', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('minifyCSS', function () {
    return gulp.src('app/css/*.css')
        // .pipe(gulp.series('autoPrefixCSS'))
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