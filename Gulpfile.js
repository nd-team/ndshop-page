var gulp = require('gulp');
var bs = require('browser-sync').create();//浏览器刷新
var bsReload = bs.reload;
var sass = require('gulp-sass');//sass编译
var cached = require('gulp-cached');//文件修改缓存
var sourcemaps = require('gulp-sourcemaps');//调试sass
var autoprefixer = require('gulp-autoprefixer');//浏览器兼容前缀
var jshint = require('gulp-jshint');//js代码规范检查
var sassLint = require('gulp-sass-lint');//sass代码规范检查
var svgSymbols = require('gulp-svg-symbols');//svg图标字体
var path          = require('path');


gulp.task('sass', ()=> {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(cached('sass'))//缓存不修改的文件
        .pipe(sass({outputStyle:'expanded'}))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值
            remove:true //是否去掉不必要的前缀
        }))
        .pipe(gulp.dest(__dirname+"/css"))
        .pipe(bs.reload({stream: true}));//异步加载样式,不刷新浏览器
});

gulp.task('jshint', ()=> {
    return gulp.src('./js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sasshint', ()=> {
    return gulp.src('sass/**/*.s+(a|c)ss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

gulp.task("svg",function (){
   return gulp.src("./font-icon/**/*.svg")
            .pipe(svgSymbols({
                transformData:function (svg, defaultData, options) {
                    return {
                        id:         defaultData.id,
                        className:  defaultData.className,
                        width:      svg.width + 'px',
                        height:     svg.height + 'px'
                      };
                }
            }))
            .pipe(gulp.dest("font/icons"));
});

gulp.task('serve', ['sass'], ()=> {

    bs.init({
        server: './',
        startPath:'index.html'
    });

    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch("pages/**/*.html").on('change', bsReload);
    gulp.watch("index.html").on('change', bsReload);
    gulp.watch("js/**/*.js").on('change', bsReload);
});

gulp.task('default', ['serve']);
