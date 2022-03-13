const final_folder = 'build', //Папка готовой сборки
      src_folder = 'src'; //Папка исходников

// Пути к файлам проекта
const path = {
  build: {
    html: final_folder + '/',
    css: final_folder + '/css/',
    js: final_folder + '/js/',
    img: final_folder + '/img/',
    fonts: final_folder + '/fonts/',
    files: final_folder + '/files/',
  },
  src: {
    html: [src_folder + '/**/*.html', '!' + src_folder + '/**/_*.html'],
    css: src_folder + '/scss/*.scss',
    js: [src_folder + '/js/**/*.js', '!' + src_folder + '/**/_*.js'],
    img: src_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    fonts: src_folder + '/fonts/*.ttf',
    files: src_folder + '/files/**/*',
  },
  watch: {
    html: src_folder + '/**/*.html',
    css: src_folder + '/scss/**/*.scss',
    js: src_folder + '/js/**/*.js',
    img: src_folder + '/img/*.{jpg,png,svg,gif,ico,webp}',
    fonts: src_folder + '/fonts/*.ttf',
    files: src_folder + '/files/**/*',
  },
  clean: './' + final_folder + '/',
};


//Импорт установленных плагинов (зависимостей)
const { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  fileinclude = require('gulp-file-include'),
  del = require('del'),
  sass = require('gulp-sass')(require('sass')),
  autoprefixer = require('gulp-autoprefixer'),
  group_media = require('gulp-group-css-media-queries'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'), //сжатие js файлов
  imagemin = require('gulp-imagemin'),
  imageminPngquant = require('imagemin-pngquant'),
  webp = require('gulp-webp'),
  newer = require('gulp-newer'),
  ttf2woff = require('gulp-ttf2woff'),
  ttf2woff2 = require('gulp-ttf2woff2'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  svgSprite = require('gulp-svg-sprite'),
  webpack = require('webpack-stream'),
  webpcss = require('gulp-webpcss'),
  babel = require('gulp-babel');


// Функции выполняемых задач
function browserSync () {
    browsersync.init({
      server: {
        baseDir: './' + final_folder + '/'
      },
      notify: false,
    })
}

function html () {
  return src(path.src.html)
    .pipe(plumber(notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
  return src(path.src.css)
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(group_media())
    .pipe(
      webpcss({
        webpClass: '.webp',
        noWebpClass: '.no-webp',
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ['Last 5 versions'],
        cascade: false,
      })
    )
    // раскомментировать если нужен не сжатый дубль файла стилей
    // .pipe(dest(path.build.css))
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
  return src(path.src.js)
    .pipe(plumber(notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    // .pipe(webpack({
    //   mode:  'development',
    //   output: {
    //     filename: 'main.js',
    //   },
    //   module: {
    //     rules: [{
    //       test: /\.m?js$/,
    //       exclude: /node_modules/,
    //       use: {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: [
    //             ['@babel/preset-env', {
    //               targets: "defaults"
    //             }]
    //           ]
    //         }
    //       }
    //     }]
    //   },
    // }))
    .pipe(uglify())
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images() {
  return src(path.src.img)
    .pipe(plumber(notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			}))
		)
    .pipe(newer(path.build.img))
    .pipe(webp())
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(newer(path.build.img))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 70 }),
        imagemin.svgo(),
        imageminPngquant({ quality: [0.8, 0.9] })
      ])
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream());
}

function fonts () {
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
  return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
}


function createSprite () {
  return gulp
    .src([src_folder + '/img/svg/*.svg'])
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg',
          },
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  {
                    removeAttrs: {
                      attrs: ['class', 'data-name', 'fill'],
                    },
                  },
                ],
              },
            },
          ],
        },
      })
    )
    .pipe(dest([final_folder + '/img/svg/']));
}

function files () {
  return src(path.src.files)
    .pipe(dest(path.build.files))
}



function watchFiles () {
  gulp.watch([path.watch.html], html)
  gulp.watch([path.watch.css], css)
  gulp.watch([path.watch.js], js)
  gulp.watch([path.watch.img], images)
}

function clean () {
  return del(path.clean)
}

//Серийное и паралельное выполнение задач
let sprite = createSprite;
let build = gulp.series(clean, gulp.parallel(files, images, sprite, fonts, js, css, html))
let watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

//Экспорт функций в переменные
exports.files = files;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

//ВЫполнение скриптов "yarn start, yarn build, ..."
gulp.task('svg', sprite);
gulp.task('build', build);
gulp.task('start', watch);
