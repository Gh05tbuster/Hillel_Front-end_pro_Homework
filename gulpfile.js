// const gulp = require('gulp');
// const htmlmin = require('gulp-htmlmin');
// const cleanCSS = require('gulp-clean-css');
// const sass = require('gulp-sass')(require('sass'));
// // const cssnano = require('gulp-cssnano');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');
// const pump = require('pump');
// // const autoprefixer = require('gulp-autoprefixer');
// // import autoprefixer from 'gulp-autoprefixer';
// const browserSync = require('browser-sync').create();
// const concat = require('gulp-concat');
// const clean = require('gulp-clean');
// const imagemin = require('gulp-imagemin');
// const changed = require('gulp-changed');

import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import sass from 'gulp-sass';
// const cssnano = require('gulp-cssnano');
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import pump from 'pump';
// const autoprefixer = require('gulp-autoprefixer');
// import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import clean from 'gulp-clean';
import imagemin from 'gulp-imagemin';
import changed from 'gulp-changed';


gulp.task('minifyHTML', () => {
    return gulp.src('app/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('copyHTML', () => {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('minifyCSS', function () {
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('sassToCSS', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(gulp.series('autoPrefixCSS'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('minifyJS', async function () {
    pump([
        gulp.src('app/js/*.js'),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('dist/js/')
    ]);
});

gulp.task('autoPrefixCSS', function () {
    return gulp.src('app/css/*.min.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css/'));
});

//* app/scss -> app/css (minified?)
//* app/css -> dist/css (prefixed)

gulp.task('serve', () => {
    browserSync.init({
        server: 'dist'
    });
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

function watchAll() {
    gulp.watch('app/*.html', gulp.series('copyHTML'));
    gulp.watch('app/scss/*.scss', gulp.series('sassToCSS'));
    gulp.watch('app/css/*.min.css', gulp.series('autoPrefixCSS'));
    gulp.watch('app/js/*.js', gulp.series('minifyJS'));
}

gulp.task('default', gulp.parallel(watchAll, 'serve'));