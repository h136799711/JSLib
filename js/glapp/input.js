define(function(){
	var _keys = {};
	_keys.A = 65;_keys.B =66;_keys.C = 67;_keys.D = 68;_keys.E = 69;
	_keys.F = 70;_keys.G =71;_keys.H = 72;_keys.I = 73;_keys.J = 74;
	_keys.K = 75;_keys.L =76;_keys.M = 77;_keys.N = 78;_keys.O = 79;
	_keys.P = 80;_keys.Q =81;_keys.R = 82;_keys.S = 83;_keys.T = 84;
	_keys.U = 85;_keys.V =86;_keys.W = 87;_keys.X = 88;_keys.Y = 89;_keys.Z = 90;
	_keys.NUM0 = 96;	_keys.NUM1 = 97;	_keys.NUM2 = 98;	_keys.NUM3 = 99;
	_keys.NUM4 = 100;	_keys.NUM5 = 101;	_keys.NUM6 = 102;	_keys.NUM7 = 103;
	_keys.NUM8 = 104;	_keys.NUM9 = 105;	_keys.ZERO = 48;	_keys.ONE  = 49; 	_keys.TWO = 50 ;
	_keys.THREE =  51 ; _keys.FOUR =  52 ;	_keys.FIVE  = 53;	_keys.SIX = 54;	_keys.SEVEN  = 55 ;	_keys.EIGHT = 56;_keys.NINE = 57; 
	_keys.CLEAR = 12;	_keys.ENTER = 13;
	_keys.SHIFT_L = 16;	_keys.CONTROL_L=17;
	_keys.ALT_L = 18;	_keys.CAPS_LOCK =    20;
	_keys.ESCAPE =  27;    _keys.SPACE =    32 ;
	_keys.END =  35;	_keys.HOME =   36;
	_keys.LEFT =   37 ;	_keys.UP =   38;
	_keys.RIGHT =  39;	_keys.DOWN =   40;
	_keys.INSERT = 45 ;	_keys.DELETE =   46 ;
	
	_keys.MUL = 106 ;	_keys.ADD = 107 ;
	_keys.SEP =108; 	_keys.SUB =109 ;
	_keys.DOT = 110;	_keys.DIV  =111; 
	_keys.F1 = 112;	_keys.F2  = 113;
	_keys.F3 = 115;	_keys.F4 = 116;
	_keys.F5 = 117;	_keys.F6 = 118;
	_keys.F7 = 119;	_keys.F10 = 120;
	_keys.F11 = 121;	_keys.F12 = 122;

	
	var _keyStates =  new Array(257);
	var _upkeys = [],_delayUp = 250;//ms
	var _keyup_callbacks = [],_keydown_callbacks = [];
	function initialize(delayUp){
		var i;
		for(i=0;i<_keyStates.length;i++)
		{
			_keyStates[i] = {isdown:false,time:-99999999};
		}
		
		_delayUp = (typeof delayUp === "undefined"  || delayUp < 250)? 250	 :	delayUp;
	};
	
	function update(){
		var now = (new Date()).getTime(),keys;
		for(var code in _upkeys){
			keys = _upkeys[code];
			if(keys instanceof Array){
				for(var i=0;i<keys.length;i++){
					if(now - keys[i].uptime  > _delayUp){
						keys.splice(i,keys.length - i);
						break;
					}
				}
			}
		}
	};
	function onkeyPress(ev){
		if(ev.keyCode >= 39 && ev.keyCode <= 42)	{
			ev.preventDefault();
		}
	};
	function onkeyDown(ev){
		_keyStates[ev.keyCode].isdown = true;
		_keyStates[ev.keyCode].time = ev.timeStamp || (new Date()).getTime();
		
		
		var callbacks,i;
		if(_keydown_callbacks[ev.keyCode]){
			 callbacks = _keydown_callbacks[ev.keyCode];
			for(i = callbacks.length - 1 ; i >= 0 ;  i--){
				callbacks[i]();
			}
		}
		if(_keydown_callbacks["all"]){
			callbacks = _keydown_callbacks["all"];
			for(i = callbacks.length ; i >=0 ; i--){
				callbacks[i](ev);
			}
		}

		if(ev.keyCode >= 39 && ev.keyCode <= 42)	{
			ev.preventDefault();
		}
	};
	function pushUpkey(code,downtime,uptime){
		if(!_upkeys[code]){
			_upkeys[code] = [];
		}
		_upkeys[code].push({downtime:downtime,uptime:uptime});

	}
	var onkeyUp = function(ev){
		pushUpkey(ev.keyCode,_keyStates[ev.keyCode].time,(ev.timeStamp || (new Date()).getTime()));
		_keyStates[ev.keyCode].isdown = false;		
		_keyStates[ev.keyCode].time = -99999999;	
	};
	var bindListeners = function(ele){
		ele = ele || document.body;
		if(ele.addEventListener){
			ele.addEventListener("keypress",onkeyPress);
			ele.addEventListener("keydown",onkeyDown);
			ele.addEventListener("keyup",onkeyUp);
		}else if(ele.attachEvent){
			ele.attachEvent("onkeypress",onkeyPress);
			ele.attachEvent("onkeydown",onkeyDown);
			ele.attachEvent("onkeyup",onkeyUp);
		}else{
			ele.innerHTML += "Can't bindListeners";
		}
	};
	var unbindListeners = function(ele){		
		ele = ele || document.body;
		if(ele.removeEventListener){
			ele.removeEventListener("keypress",onkeyPress);
			ele.removeEventListener("keydown",onkeyDown);
			ele.removeEventListener("keyup",onkeyUp);
		}else if(_ele.detachEvent){
			ele.detachEvent("onkeypress",onkeyPress);
			ele.detachEvent("onkeydown",onkeyDown);
			ele.detachEvent("onkeyup",onkeyUp);
		}
	};
	var isKeyUp = function(key){		return !_keyStates[key].isdown;		};
	var isKeyDown = function(key){		return _keyStates[key].isdown;	 	};
	/**
	** 如果给出time_now则不会调用update更新放开按键的数据
	** 函数中的现在也是由time_now指定
	** @keycode {int} 要取得的按键
	** @duration {number}  时间段
	** @time_now {number} 作为当前的时间
	** @return {number} 此时减去duration的时间段内，keycode被按下的次数
	** @example 
	** 总共有3中方法调用，如下：
	** 如果在一个函数内大量调用此方法，建议用第一种方法
	** <pre><code>
	** var time_now = (new Date()).getTime(),key_press_cnt=0;
	** for(var i=0;i<1000;i++){
	**  key_press_cnt =  Input.getPressCount(Input.KEYS.LEFT,50,time_now);
	**	}//每次获得结果是相同的
	** for(var i=0;i<1000;i++){
	**  key_press_cnt =  Input.getPressCount(Input.KEYS.LEFT);
	**	}//获得结果会有不同，因为循环也会耗时
	** for(var i=0;i<1000;i++){
	**  time_now = (new Date()).getTime();
	**  key_press_cnt =  Input.getPressCount(Input.KEYS.LEFT,50,time_now);
	**	}//获得结果会有不同，因为作为当前时间每次循环如果不同的话
	** for(var i=0;i<1000;i++){
	**  key_press_cnt =  Input.getPressCount(Input.KEYS.LEFT,50);
	**	}//获得结果会有不同，因为作为当前时间每次循环如果不同的话
	** </code></pre>
	**/
	var getPressCount = function(keycode,duration,time_now){
		if(!time_now){
			update();
		}
		var now =time_now || (new Date()).getTime(),cnt=0,keys;
		duration = duration || 48; 
		if(_upkeys[keycode] instanceof Array){
			keys = _upkeys[keycode];
			for(var i=0;i<keys.length;i++){
				if(now - keys[i].uptime  > duration){
					cnt = keys.length - i;
					break;
				}
			}
		}
	
		return cnt;
	};
	var keydown =function(keycode,callback){
		if(typeof keycode === "function"){
			callback = keycode;
			keycode = "all";
		}
		
		if(!_keydown_callbacks[keycode]){
			_keydown_callbacks[keycode] = [];
		}
		_keydown_callbacks[keycode].push(callback);
	};
	var keyup =function(keycode,callback){
		if(!_keyup_callbacks[keycode]){
			_keyup_callbacks[keycode] = [];
		}
		_keyup_callbacks[keycode].push(callback);

	};
	var input = {
			bindListeners:bindListeners,
			unbindListeners:unbindListeners,
			initialize:initialize,
			isKeyDown:isKeyDown,
			isKeyUp:isKeyUp ,
			getPressCount:getPressCount,
			keydown:keydown

	};
	return input;
});

