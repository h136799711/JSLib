(function(){
	var logger = {
		LOGCONSOLE : 0X000001,
		LOGALERT : 0X000002,
		LOGELEMENTBYID : 0X000004
	};
	function logToConsole(msg){		
			console.log(msg);
	}
	function logToElement(msg){	
		var id = "console";
		var ele = doc.getElementById(id) || doc.getElementsByTagName("body")[0];
		var div = doc.createElement("div");
		div.innerHTML = '<div style="font:1.5em bold;color:white;">'+msg+'</div>';
		div.style.border = "1px solid #dd7";
		div.style.background= " #111111 ";
		doc.body.insertBefore(div,doc.body.firstChild);
	}
	function logToAlert(msg){		
			alert(msg);
	}
	/**
	** @ flag 1 | 2 | 4
	**/
	logger.log = function(msg,flag){
		if(typeof flag ==="undefined"){
			logToConsole(msg);
			return logger;
		}
		if(flag & logger.LOGCONSOLE){
			logToConsole(msg);
		}
		if(flag & logger.LOGELEMENTBYID) {
			logToElement(msg);
		}
		if(flag & logger.LOGALERT){
			logToAlert(msg);
		}
		return logger;
	};
	
	if(typeof require !== "undefined" && typeof define === "function"){
		define(function(){	return logger;	});
	}
})();








//////////////////////////////////////////////////////////////////////
