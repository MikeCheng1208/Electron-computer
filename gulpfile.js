"use strict";
var gulp = require('gulp'),
	compass = require('gulp-compass'),
    gulpPlumber = require('gulp-plumber'),
	connect = require('gulp-connect')
	
/*
  ____          _____ _____         _____ ____  __  __ _____         _____ _____
 / ____|  /\    / ____/ ____| ___   / ____/ __ \|  \/  |  __ \ /\    / ____/ ____|
| (___   /  \  | (___| (___  ( _ ) | |   | |  | | \  / | |__) /  \  | (___| (___
 \___ \ / /\ \  \___ \\___ \ / _ \/\ |   | |  | | |\/| |  ___/ /\ \  \___ \\___ \
 ____) / ____ \ ____) |___) | (_>  < |___| |__| | |  | | |  / ____ \ ____) |___) |
|_____/_/    \_\_____/_____/ \___/\/\_____\____/|_|  |_|_| /_/    \_\_____/_____/


每個scss檔案記得加上 @charset "UTF-8"; 不然中文會出錯!!!
*/

gulp.task('compass', function() {
	gulp.src('sass/**/*.scss') 
	.pipe(gulpPlumber())
    .pipe(compass({
        css: 'css',         
        sass: 'sass',     
        image: 'images',  
        style: 'nested',    //nested & compressed
        comments: false
    }))
	.pipe(gulp.dest('css'))
    .pipe(connect.reload())
});

/*
__          __  _______ _____ _    _
\ \        / /\|__   __/ ____| |  | |
 \ \  /\  / /  \  | | | |    | |__| |
  \ \/  \/ / /\ \ | | | |    |  __  |
   \  /\  / ____ \| | | |____| |  | |
    \/  \/_/    \_\_|  \_____|_|  |_|
*/
gulp.task('watch', function () {
	gulp.watch(['sass/**/*.scss'], ['compass'])
});


gulp.task('default', ['compass','watch']);