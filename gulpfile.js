//INICIA��O DAS VARI�VEIS

	var gulp = require('gulp');
	var sass = require('gulp-sass');
	var rename = require('gulp-rename');
	var sassFiles = 'sass/**/*.sass';
	var cssDest = 'css';
	var sassDevOptions = {outputStyle: 'expanded'};
	var sassProdOptions = {outputStyle: 'compressed'};

//CRIA��O DAS TAREFAS

	//TAREFA PARA CRIAR O ARQUIVO COM EXTENS�O CSS
	gulp.task('sass', gulp.series(function(){
	    	return gulp.src(sassFiles).pipe(sass(sassDevOptions).on('error', sass.logError)).pipe(gulp.dest(cssDest));
	}));

	//TAREFA PARA CRIAR O ARQUIVO COM EXTENS�O CSS COMPRIMIDO E RENOME�-LO COM O .min.css
	gulp.task('sassprod', gulp.series(function() {
  		return gulp.src(sassFiles).pipe(sass(sassProdOptions).on('error', sass.logError)).pipe(rename('style.min.css')).pipe(gulp.dest(cssDest));
	}));

	//TAREFA PARA MONITORAR AS ALTERA��ES
	gulp.task('watch', gulp.series(function(){
    		gulp.watch(sassFiles, gulp.parallel( ['sass', 'sassprod'] ));
	}));

	//TAREFA DEFAULT PARA ICIAR COM UM COMANDO gulp
	gulp.task( 'default', gulp.series( ['sass', 'sassprod', 'watch'] ));