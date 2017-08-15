import * as gulp from 'gulp';
import Config from '../../config';

export = () => {
    return gulp.src(Config.CSS_FONTS_SRC)
        .pipe(gulp.dest(Config.CSS_FONTS_DEST));
};
