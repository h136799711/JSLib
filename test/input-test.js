require(["http://localhost:8080/github/lib/js/glapp/logger.js","http://localhost:8080/github/lib/js/domReady.js","http://localhost:8080/github/lib/js/qunit.js","http://localhost:8080/github/lib/js/glapp/input.js"],function(logger,domReady,o,input){
		console.log(logger);
		var doc = document;

		try{
			input.initialize();
			domReady(function(){
				console.log("domReady");
				input.bindAll();
				function onPause (){					
					logger.log("onPause p key up",4);
					input.rmKeyupListener(input.KEYS.P,onPause);
				};
				function onResume (){					
					logger.log("onResume p key up",4);
					input.rmKeydownListener(input.KEYS.P,onResume);
				};
				input.keyup(input.KEYS.P,onPause);
				input.keyup(onPause);

				input.keydown(input.KEYS.P,onResume);
				input.keydown(onResume);
			});
		}catch(e){			
			logger.log(e.message,logger.LOGELEMENTBYID);			
		}finally{
			input.unbindAll();
		}
});
