
define(function(){	
	//event listener
	var event = function (){
		this._listeners= [];
	}
	event.prototype.addListener = function(type, fn,onetime) {
			if (typeof this._listeners[type] === "undefined") {
				this._listeners[type] = [];
			}
			if (typeof fn === "function") {
				if(onetime === true){
					fn.onetime = onetime;
				}
				this._listeners[type].push(fn);
					return true;
			}
			return false;
	};
			
	event.prototype.addListenerForOneTime = function(type, fn) {
			this.addListener(type,fn,true);
	};
	event.prototype.fireListener = function(type, args) {
			var arrayListener = this._listeners[type];
			if (arrayListener instanceof Array) {
				var i;
				for (i = arrayListener.length - 1; i >= 0; i -= 1) {
					if (typeof arrayListener[i] === "function") {
							arrayListener[i]({type: type,args: args	});
							if(arrayListener[i].onetime){
								arrayListener.splice(i, 1);
							}
					}
				}
			}
	};
	event.prototype.removeListener = function(type, fn) {
		if (typeof type !== "string"){
			return false;
		}
		var arrayListener = this._listeners[type];
		if (typeof arrayListener !== "undefined" && typeof fn === "function") {
			var i;
			for (i = arrayListener.length - 1; i >= 0; i -= 1) {
				if (arrayListener[i] === fn) {
					this._listeners[type].splice(i, 1);
				}
			}
		} else {
			delete this._listeners[type];
			return true;
		}
	};
	event.prototype.create = function(){
		return new event();
	}
	return (new event());
});







//////////////////////////////////////////////////////////////////////
