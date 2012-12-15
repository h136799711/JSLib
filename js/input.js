define(function(){
	var _keys = {};/* [];
	_keys[0]="";	_keys[1]="";	_keys[2]="";	_keys[3]="";	_keys[4]="";	_keys[5]="";
	_keys[6]="";	_keys[7]="";	_keys[8]="";	_keys[9]="";	_keys[10]="";	_keys[11]="";
	_keys[12]="";	_keys[13]="";	_keys[14]="";	_keys[15]="";	_keys[16]="";	_keys[17]="";
	_keys[18]="";	_keys[18]="";	_keys[19]="";	_keys[20]="";	_keys[21]="";	_keys[22]="";
	_keys[23]="";	_keys[24]="";	_keys[25]="";	_keys[26]="";	_keys[27]="";	_keys[28]="";
	_keys[29]="";	_keys[30]="";	_keys[31]="";	_keys[32]="";	_keys[33]="";	_keys[34]="";
	_keys[35]="";	_keys[36]="";	_keys[37]="";	_keys[38]="";	_keys[39]="";	_keys[40]="";
	_keys[41]="";	_keys[42]="";	_keys[43]="";	_keys[44]="";	_keys[45]="";	_keys[46]="";
	_keys[47]="";	_keys[48]="";	_keys[49]="";	_keys[50]="";	_keys[51]="";	_keys[52]="";
	_keys[53]="";	_keys[54]="";	_keys[55]="";	_keys[56]="";	_keys[57]="";	_keys[58]="";
	_keys[59]="";	_keys[60]="";	_keys[61]="";	_keys[62]="";	_keys[63]="";	_keys[64]="";
	_keys[65]="";	_keys[66]="";	_keys[67]="";	_keys[68]="";	_keys[69]="";	_keys[70]="";
	_keys[71]="";	_keys[72]="";	_keys[73]="";	_keys[74]="";	_keys[75]="";	_keys[76]="";
	_keys[77]="";	_keys[78]="";	_keys[79]="";	_keys[80]="";	_keys[81]="";	_keys[82]="";
	_keys[83]="";	_keys[84]="";	_keys[85]="";	_keys[86]="";	_keys[87]="";	_keys[88]="";
	_keys[89]="";	_keys[90]="";	_keys[91]="";	_keys[92]="";	_keys[93]="";	_keys[94]="";
	_keys[95]="";	_keys[96]="";	_keys[97]="";	_keys[98]="";	_keys[99]="";	_keys[100]="";
	_keys[101]="";	_keys[102]="";	_keys[103]="";	_keys[104]="";	_keys[105]="";	_keys[106]="";
	_keys[107]="";	_keys[108]="";	_keys[109]="";	_keys[110]="";	_keys[111]="";	_keys[112]="";
	_keys[113]="";	_keys[114]="";	_keys[115]="";	_keys[116]="";	_keys[117]="";	_keys[118]="";
	_keys[119]="";	_keys[120]="";	_keys[121]="";	_keys[122]="";	_keys[123]="";	_keys[124]="";
	_keys[125]="";	_keys[126]="";	_keys[127]="";	_keys[128]="";	_keys[129]="";	_keys[130]="";
	_keys[131]="";	_keys[132]="";	_keys[133]="";	_keys[134]="";	_keys[135]="";	_keys[136]="";
	_keys[137]="";	_keys[138]="";	_keys[139]="";	_keys[140]="";	_keys[141]="";	_keys[142]="";
	_keys[143]="";	_keys[144]="";	_keys[145]="";	_keys[146]="";	_keys[147]="";	_keys[148]="";
	_keys[149]="";	_keys[150]="";	_keys[151]="";	_keys[152]="";	_keys[153]="";	_keys[154]="";
	_keys[155]="";	_keys[156]="";	_keys[157]="";	_keys[158]="";	_keys[160]="";	_keys[161]="";
	_keys[162]="";	_keys[163]="";	_keys[164]="";	_keys[165]="";	_keys[166]="";	_keys[167]="";
	_keys[168]="";	_keys[169]="";	_keys[170]="";	_keys[171]="";	_keys[172]="";	_keys[172]="";
	_keys[173]="";	_keys[174]="";	_keys[175]="";	_keys[176]="";	_keys[177]="";	_keys[178]="";
	_keys[178]="";	_keys[179]="";	_keys[180]="";	_keys[181]="";	_keys[182]="";	_keys[183]="";
	_keys[184]="";	_keys[185]="";	_keys[186]="";	_keys[187]="";	_keys[188]="";	_keys[189]="";
	_keys[190]="";	_keys[191]="";	_keys[192]="";	_keys[193]="";	_keys[194]="";	_keys[195]="";
	_keys[196]="";	_keys[197]="";	_keys[198]="";	_keys[199]="";	_keys[200]="";	_keys[201]="";
	_keys[202]="";	_keys[203]="";	_keys[204]="";	_keys[205]="";	_keys[206]="";	_keys[207]="";
	_keys[208]="";	_keys[209]="";	_keys[210]="";	_keys[211]="";	_keys[212]="";	_keys[213]="";
	_keys[214]="";	_keys[215]="";	_keys[216]="";	_keys[217]="";	_keys[218]="";	_keys[219]="";
	_keys[220]="";	_keys[221]="";	_keys[222]="";	_keys[223]="";	_keys[224]="";	_keys[225]="";
	_keys[226]="";	_keys[227]="";	_keys[228]="";	_keys[229]="";	_keys[230]="";	_keys[231]="";
	_keys[232]="";	_keys[233]="";	_keys[234]="";	_keys[235]="";	_keys[236]="";	_keys[237]="";
	_keys[238]="";	_keys[239]="";	_keys[240]="";	_keys[241]="";	_keys[242]="";	_keys[243]="";
	_keys[244]="";	_keys[245]="";	_keys[246]="";	_keys[247]="";	_keys[248]="";	_keys[249]="";
*/
	_keys.A = 65;_keys.B =66;_keys.C = 67;_keys.D = 68;_keys.E = 69;
	_keys.F = 70;_keys.G =71;_keys.H = 72;_keys.I = 73;_keys.J = 74;
	_keys.K = 75;_keys.L =76;_keys.M = 77;_keys.N = 78;_keys.O = 79;
	_keys.P = 80;_keys.Q =81;_keys.R = 82;_keys.S = 83;_keys.T = 84;
	_keys.U = 85;_keys.V =86;_keys.W = 87;_keys.X = 88;_keys.Y = 89;_keys.Z = 90;
	_keys.NUM0 = 96;	_keys.NUM1 = 97;	_keys.NUM2 = 98;	_keys.NUM3 = 99;
	_keys.NUM4 = 100;	_keys.NUM5 = 101;	_keys.NUM6 = 102;	_keys.NUM7 = 103;
	_keys.NUM8 = 104;	_keys.NUM9 = 105;	_keys.ZERO = 48;	_keys.ONE  = 49; 	_keys.TWO = 50 ;
	_keys.THREE =  51 ; 	_keys.FOUR =  52 ;	_keys.FIVE  = 53;	_keys.SIX = 54;	_keys.SEVEN  = 55 ;	_keys.EIGHT = 56;	_keys.NINE = 57; 
	_keys.CLEAR = 12;
	_keys.ENTER = 13;
	_keys.SHIFT_L = 16;
	_keys.CONTROL_L=17;
	_keys.ALT_L = 18;
	_keys.CAPS_LOCK =    20;
	_keys.ESCAPE =    27;
    _keys.SPACE =    32 ;
	_keys.END =  35;
	_keys.HOME =   36;
	_keys.LEFT =   37 ;
	_keys.UP =   38;
	_keys.RIGHT =  39;
	_keys.DOWN =   40;
	_keys.INSERT = 45 ;
	_keys.DELETE =   46 ;
	
	_keys.MUL = 106 ;
	_keys.ADD = 107 ;
	_keys.SEP =108; 
	_keys.SUB =109 ;
	_keys.DOT = 110;
	_keys.DIV  =111; 
	_keys.F1 = 112;
	_keys.F2  = 113;
	_keys.F3 = 115;
	_keys.F4 = 116;
	_keys.F5 = 117;
	_keys.F6 = 118;
	_keys.F7 = 119;
	_keys.F10 = 120;
	_keys.F11 = 121;
	_keys.F12 = 122;
	/**
	** _selfLoop = false时为确保获得的按键次数结果正确需要适时调用update
	** _selfLoop = true时为确保获得的按键次数结果正确需要正确设置_time_update
	**/


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
	var bindListeners = function(){
		if(document.body.addEventListener){
			document.body.addEventListener("keypress",onkeyPress);
			document.body.addEventListener("keydown",onkeyDown);
			document.body.addEventListener("keyup",onkeyUp);
		}else if(document.body.attachEvent){
			document.body.attachEvent("onkeypress",onkeyPress);
			document.body.attachEvent("onkeydown",onkeyDown);
			document.body.attachEvent("onkeyup",onkeyUp);
		}
	};
	var unbindListeners = function(){
		if(document.body.removeEventListener){
			document.body.removeEventListener("keypress",onkeyPress);
			document.body.removeEventListener("keydown",onkeyDown);
			document.body.removeEventListener("keyup",onkeyUp);
		}else if(document.body.detachEvent){
			document.body.detachEvent("onkeypress",onkeyPress);
			document.body.detachEvent("onkeydown",onkeyDown);
			document.body.detachEvent("onkeyup",onkeyUp);
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
			update:update,	 //需要循环调用
			KEYS:_keys

	};
	return input;
});

