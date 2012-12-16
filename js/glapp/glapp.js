
define(["http://localhost:8080/github/lib/js/glapp/input.js","/github/lib/js/glapp/webgl-utils.js","/github/lib/js/glapp/event.js","/github/lib/js/glapp/utils.js","/github/lib/js/glapp/logger.js","http://localhost:8080/github/lib/js/glapp/compat.js","/github/lib/js/min/glMatrix.min.js"],function(input,WebGLUtils,event,utils,logger){
console.log("glapp");
console.log(arguments);
var doc = document,glapp  = function(){	
	return new glapp.fn.create();
};
glapp.fn = glapp.prototype = {
	create:function(){
	}
};
glapp.fn.create.prototype = glapp.fn;

glapp.extend = glapp.fn.extend = function ( a, b ) {	
	if(arguments.length ===1 && this !== window){
		b = a;
		a = this;
	}else{
		return a;
	}
	for ( var prop in b ) {
		if ( b[ prop ] === undefined ) {
			delete a[ prop ];
		//在IE8中避免设置window.constructor 而引起出现"Member not found"错误
		} else if ( prop !== "constructor" || a !== window ) {
			a[ prop ] = b[ prop ];
		}
	}
	return a;
};



function log(msg){
		var id = "console";
		var ele = doc.getElementsByTagName("body")[0] || doc.getElementById(id) ;
		var div = doc.createElement("div");
		div.innerHTML = '<div style="font:1.5em bold;color:white;">'+msg+'</div>';
		div.style.border = "1px solid #dd7";
		div.style.background= " #111111 ";
		doc.body.insertBefore(div,doc.body.firstChild);
}
var all = WebGLUtils && event &&  utils && logger;
if(!all){
	log("have some modules not loaded! ");
	return ;
}


var canvas = (function(){
	var _gl=null,	_shaderProgram = null,_render=null,
	_fragmentShader = null,_vertexShader = null,
	_mvMatrix = mat4.create(),_pMatrix = mat4.create();
    
	function initWebGL(canvasID){
		var ele = doc.getElementById(canvasID);
		if(!ele){		log("not found a canvas which id's "+canvasID);	}
		_gl = WebGLUtils.setupWebGL(ele);
		_gl.viewportWidth = ele.width;
		_gl.viewportHeight = ele.height;
		_gl.clearColor(0,0,0,1);
		_gl.clear(_gl.COLOR_BUFFER_BIT);
		return _gl;
	}
	function makeShader(src,type){
		if(!_gl){
			throw new Error(["invalid argument."]);
		}
		var shader = _gl.createShader(type);
		_gl.shaderSource(shader,src);
		_gl.compileShader(shader);
		if(!_gl.getShaderParameter(shader,_gl.COMPILE_STATUS)){
			log("Error Compiling Shader: "+_gl.getShaderInfoLog(shader),logger.LOGELEMENTBYID);
		}
		return shader;
	}
	function attachShaders(){
		_gl.attachShader(_shaderProgram,_vertexShader);
		_gl.attachShader(_shaderProgram,_fragmentShader);
		_gl.linkProgram(_shaderProgram);
		if(!_gl.getProgramParameter(_shaderProgram,_gl.LINK_STATUS)){
			log("Unable to initialize the shader program",logger.LOGELEMENTBYID);
		}
	}
	function createShaderProgram(){
		_shaderProgram = _gl.createProgram();
		attachShaders();
		_gl.useProgram(_shaderProgram);
	}
	function setupShaders(fragmentShaderSRC,vertexShaderSRC){
		_fragmentShader = makeShader(fragmentShaderSRC,_gl.FRAGMENT_SHADER);
		_vertexShader = makeShader(vertexShaderSRC,_gl.VERTEX_SHADER);
		createShaderProgram();
	}
	function initShaders(){
		var fragmentShaderSRC = null,
			vertexShaderSRC = null;
		fragmentShaderSRC = doc.getElementById("shader-fs").innerHTML;
		vertexShaderSRC = doc.getElementById("shader-vs").innerHTML;
		setupShaders(fragmentShaderSRC,vertexShaderSRC);

	}
	function executeProgram(){	
		if(!_render.initialize || typeof _render.initialize !== "function"){
			throw new Error(["not implements initialize method"]);
		}
		if(!_render.executeProgram && typeof _render.executeProgram !== "function"){
			throw new Error(["not implements executeProgram method"]);
		}
		_render.initialize(_gl,_shaderProgram);
		_render.setMVP(_mvMatrix,_pMatrix);
		_render.executeProgram();

	}
	function setRender(renderer){
		_render = null;
		_render = renderer;
	}
	function initialize(canvasid,renderer){
		initWebGL(canvasid);
		initShaders();
		setRender(renderer);
	}
	function render(){
		executeProgram();
	}
	return {
		initialize:initialize,
		render:render
	};
})();

glapp.extend({
	Event:event,
	Canvas:canvas,
	Utils:utils,
	Logger:logger,
	Input:input
});
return glapp;
});
