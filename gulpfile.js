const gulp = require('gulp');
// const cssmin = require('gulp-cssmin');
// const htmlmin = require('gulp-htmlmin');
// const babel = require('gulp-babel');
// const uglify = require("gulp-uglify");
imagemin = require('gulp-imagemin');
 
// gulp.task('testImagemin', function () {
//     gulp.src('./img/*.{png,jpg,gif,ico}')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/img'));
// });



function img(){
    return gulp 
        .src('./img/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}


// function css(){
//     return gulp 
//         .src('./css/**')
//         .pipe(cssmin())
//         .pipe(gulp.dest('./dist/css'))
// }

// function js(){
//     return gulp
//         .src('./js/**')
//         .pipe(babel({
//             presets: ["env"]
//        }))
//        .pipe(uglify())
//        .pipe(gulp.dest('./dist/js'))
// }

// 压缩HTML任务
// function html(){
//     return gulp 
//         .src('./html/**')
//         .pipe(htmlmin(
//             {
//                 collapseWhitespace: true, // 表示去除空格
//                 removeEmptyAttributes: true, // 移出空的属性
//                 minifyCSS: true, // 压缩 style 标签
//                 minifyJS: true, // 压缩 script 标签
//             }
//         ))
//         .pipe(gulp.dest('./dist/html'))
// }

// function php(){
//     return gulp
//         .src('./php/**')
//         .pipe(gulp.dest('./dist/php'))
// }

// exports.css = css;
// exports.html = html;
// exports.js =js;
// exports.php = php;
exports.img = img;