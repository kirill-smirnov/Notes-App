const gulp    = require('gulp');
const sass    = require('gulp-sass');
const concat  = require('gulp-concat');

gulp.task('sass', () => {
  return gulp.src('src/sass/main.sass')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('src/sass/*.sass', ['sass']);
  gulp.watch('src/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);