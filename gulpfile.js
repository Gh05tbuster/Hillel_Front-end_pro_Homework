const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer'); //! breaks the code
// import autoprefixer from 'gulp-autoprefixer';
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// const imagemin = require('gulp-imagemin'); //! breaks the code
const browserSync = require('browser-sync').create();

function clear() {
    return gulp.src('./dist/*', {
        read: false
    })
        .pipe(clean());
}

function scss() {
    const source = './app/scss/*.scss';
    return gulp.src(source)
        .pipe(sass())
        // .pipe(autoprefixer({
        //     overrideBrowserslist: ['last 5 versions'],
        //     cascade: false
        // }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
}

function css() {
    const source = './app/css/*.css';
    return gulp.src(source)
        // .pipe(autoprefixer({
        //     overrideBrowserslist: ['last 5 versions'],
        //     cascade: false
        // }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
}

function js() {
    const source = './app/js/*.js';

    return gulp.src(source)
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.stream());
}

function img() {
    const source = './app/img/**/*';
    return gulp.src(source)
        .pipe(gulp.dest('./dist/img'))
        .pipe(browserSync.stream());
}

function watchFiles() {
    gulp.watch('./app/scss/*', scss);
    gulp.watch('./app/css/*', css);
    gulp.watch('./app/js/*', js);
    gulp.watch('./app/img/**/*', img);
}

function sync() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    });
}

exports.watch = gulp.parallel(watchFiles, sync);
exports.build = gulp.series(clear, gulp.parallel(scss, css, js, img));
exports.default = gulp.series(clear, gulp.parallel(scss, css, js, img), gulp.parallel(watchFiles, sync));