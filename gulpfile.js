// 必要プラグインの読み込み
const gulp = require("gulp")
const webpackStream = require("webpack-stream")
const webpack = require("webpack")
const browserSync = require('browser-sync').create()
const runSequence = require('run-sequence')
const nodemon = require("gulp-nodemon")
const path = require("path")
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')


// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config")


// webpack
gulp.task('serverWebpack', () => {
  // webpackStreamの第2引数にwebpackを渡す
  return webpackStream(webpackConfig.server, webpack)
    .pipe(gulp.dest("dist/server"))
    .pipe(browserSync.reload({
      stream: true,
      once  : true
    }))
})

gulp.task('clientWebpack', () => {
  return webpackStream(webpackConfig.client, webpack)
    .pipe(gulp.dest("dist/client/javascript"))
    .pipe(browserSync.reload({
      stream: true,
      once  : true
    }))
})

gulp.task('nodemon', (cb) => {
  let called = false
  return nodemon({
      script: 'dist/server/server.js',
      watch:'dist/server/',
      ext: 'js',
      ignore: [  // nodemon で監視しないディレクトリ
        'src/'
      ],
  }).on('start', () => {
      if (!called) {
          called = true
          cb()
      }
  }).on('restart', () => {
      setTimeout(() => {
          browserSync.reload()
      }, 500)
  })
})

gulp.task("bs", ['nodemon'], () => {
    browserSync.init(null, {
        proxy:"localhost:3000",
        open:false,
        serveStatic: ['.', './dist/client'],
        port:"7000",
        minify:true
    })
})

gulp.task('bs-reload', () => {
    browserSync.reload()
})

// watch
gulp.task('watch', () => {
  // src 配下の *.js ファイル,dist 配下の *.html,が変更されたときリロード。
  return gulp.watch("./src/server/server.jsx", ['serverWebpack'])
  return gulp.watch("./src/client/javascript/bundle.js", ['clientWebpack'])
  return gulp.watch("./dist/client/*", ['bs-reload'])
})

// default
gulp.task("default", () => {
  runSequence('serverWebpack','clientWebpack','bs','watch' )
})
