;(function(){
var utils ={
		each:function (o,callback){
			if(typeof o ===  "Array" || typeof o === "NodeList" || (o && o.length)){
				for(var i=0;i<o.length;i++){
					each(o[i],callback);
				}
			}else{
				for(var prop in o){
					callback.apply(this,[prop,o]);
				}
			}
		},
		hasProp: function(obj,prop){				
			return Object.prototype.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, prop);
		},
		getOwn:function(obj,prop){
			return hasProp(obj,prop) && obj[prop];
		}
	};

	if(typeof require !== "undefined" && typeof define === "function"){
		define(function(){	return utils;		});
	}
})();
