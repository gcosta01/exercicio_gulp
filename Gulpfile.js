const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar o SASS
gulp.task('sass', function () {
    return gulp.src('src/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir as imagens
gulp.task('imagemin', function () {
    return gulp.src('src/images')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Tarefa para comprimir o código JavaScript
gulp.task('uglify', function () {
    return gulp.src('src/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão que executa todas as tarefas
gulp.task('default', gulp.series('sass', 'imagemin', 'uglify'));

// Tarefa de watch para observar mudanças nos arquivos e executar automaticamente
gulp.task('watch', function () {
    gulp.watch('src/main.sass', gulp.series('sass'));
    gulp.watch('src/images/', gulp.series('imagemin'));
    gulp.watch('src/main.js', gulp.series('uglify'));
});
