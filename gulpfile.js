// 必要プラグインの読み込み
const gulp = require("gulp")
const webpackStream = require("webpack-stream")
const webpack = require("webpack")
const browserSync = require('browser-sync').create()
const runSequence = require('run-sequence')


// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config")


// webpack
gulp.task('serverWebpack', () => {
  // webpackStreamの第2引数にwebpackを渡す
  return webpackStream(webpackConfig.server, webpack)
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({
      stream: true,
      once  : true
    }))
})

gulp.task('clientWebpack', () => {
  return webpackStream(webpackConfig.client, webpack)
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({
      stream: true,
      once  : true
    }))
})



// browser-sync
gulp.task('bs', () => {
  browserSync.init({
  server: {
    baseDir: "./dist/"
  },
  notify  : true,
  xip     : false
  })
})

gulp.task('bs-reload', () => {
    browserSync.reload()
})

// watch
gulp.task('watch', () => {
  // src 配下の *.js ファイル,dist 配下の *.html,が変更されたときリロード。
  return gulp.watch("./src/server/server.jsx", ['serverWebpack'])
  return gulp.watch("./src/client/**/**/*.jsx", ['clientWebpack'])
  return gulp.watch("dist/*.js", ['bs-reload'])
  return gulp.watch("dist/*.html", ['bs-reload'])
})

// default
gulp.task("default", () => {
  runSequence('serverWebpack','clientWebpack','bs','watch' )
})
