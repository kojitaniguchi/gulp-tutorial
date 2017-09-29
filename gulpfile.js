// 必要プラグインの読み込み
const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const browserSync = require('browser-sync').create();

// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config");


// webpack
gulp.task('webpack', () => {
  // webpackStreamの第2引数にwebpackを渡す
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({
      stream: true,
      once  : true
    }));
});

// browser-sync
gulp.task('bs', () => {
  browserSync.init({
  server: {
    baseDir: "./"
  },
  notify  : true,
  xip     : false
  });
});

gulp.task('bs-reload', () => {
    browserSync.reload();
});

// watch
gulp.task('watch', () => {
  // src 配下の *.js ファイル,dist 配下の *.html,が変更されたときリロード。
  return gulp.watch("./src/*.jsx", ['webpack']);
  return gulp.watch("dist/*.html", ['bs-reload']);
});

// default
gulp.task("default", ['webpack','bs','watch','bs-reload'] );
