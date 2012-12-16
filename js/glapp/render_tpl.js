(function(){
	var render_tpl = function(){
		this.gl=null;
		this.shaderProgram=null;
		this.mvMatrix=null;
		this.pMatrix=null;
	}
	render_tpl.prototype ={		
		setMVP:function(mvMatrix,pMatrix){	
			this.mvMatrix = mvMatrix;
			this.pMatrix = pMatrix;
		},
		initialize:function(g,s){	
			this.gl = g;
			this.shaderProgram = s;
		}
	};
	if(typeof require !== "undefined" && typeof define === "function"){
		define(function(){	return render_tpl;	});
	}
})();