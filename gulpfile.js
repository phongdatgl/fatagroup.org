var gulp  = require('gulp');
var $     = require('gulp-load-plugins')();

var PLUGINS_SCRIPTS = [
    './bower_components/bootstrap/dist/js/bootstrap.js',
    './bower_components/magnific-popup/dist/jquery.magnific-popup.js',
    './bower_components/owl.carousel/dist/owl.carousel.js',
];

// Compile LESS
gulp.task('styles', function () {
    return gulp.src(['./assets/less/main.less'])
        .pipe($.less({ compress: true }))
        .on('error', console.error.bind(console))
        .pipe($.autoprefixer())
        .pipe(gulp.dest('./assets/css'))
        .pipe($.size());
});

//
gulp.task('scripts:plugins', function () {
    return gulp.src(PLUGINS_SCRIPTS)
        .pipe($.uglify({ preserveComments: 'some' }))
        .pipe($.concat('plugins.js', { newLine: '\n\n' }))
        .pipe(gulp.dest('./assets/js'))
        .pipe($.size());
});

//
gulp.task('fonts', function () {
    return gulp.src('./bower_components/fontawesome/fonts/*.{otf,eot,svg,ttf,woff}')
        .pipe(gulp.dest('./assets/fonts/'));
});

// Watch for changes
gulp.task('watch', function () {
    gulp.watch('./assets/less/**/*.less', ['styles']);
});

// Default tasks
gulp.task('build', ['styles', 'scripts:plugins', 'fonts']);
gulp.task('default', ['build', 'watch']);
