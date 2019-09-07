//INICIA��O DAS VARI�VEIS

	var gulp = require('gulp');
	var sass = require('gulp-sass');
	var sassFiles = 'sass/**/*.sass';
	var cssDest = 'css';
	var sassProdOptions = {outputStyle: 'compressed'};

//CRIA��O DAS TAREFAS

	//TAREFA PARA CRIAR O ARQUIVO COM EXTENS�O CSS
	gulp.task('sass', gulp.series(function(){
	    	return gulp.src(sassFiles).pipe(sass(sassProdOptions).on('error', sass.logError)).pipe(gulp.dest(cssDest));
	}));


	//TAREFA PARA MONITORAR AS ALTERA��ES
	gulp.task('watch', gulp.series(function(){
    		gulp.watch(sassFiles, gulp.parallel( ['sass'] ));
	}));

	//TAREFA DEFAULT PARA ICIAR COM UM COMANDO gulp
	gulp.task( 'default', gulp.series( ['sass', 'watch'] ));