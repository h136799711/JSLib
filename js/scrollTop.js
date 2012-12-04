
define(['jquery-1.8.3.min'],function(){
//	console.log("scrollTop");
//	console.log($ || window.$);
	var _top_id = "scrollTop";
	var scrollTop = function(opts){
		if(typeof opts === "string"){
			_top_id = opts ;
		}
		scroll();
		$(window).scroll(scroll);
		$("#"+_top_id).click(function(){			
			window.location.href = window.location.href.split("#")[0] + "#top";
		});
		
		$("#"+_top_id).addClass("to-top");
	};
	function scroll(){
		console.log(" window = ("+$(window).scrollTop()+" , "+$(window).scrollLeft()+" )");
		console.log("=====================");

		var offset = $("#"+_top_id).offset();
		console.log(offset);
		offset.top = $(window).scrollTop(); 
		offset.left = 130; 
		$("#"+_top_id).offset(offset);
		if(offset.top === 0){
			$("#"+_top_id).hide();
		}else{
			$("#"+_top_id).show();	
		}
	};
	return {
		log:function(msg){	console.log(msg);},
		scrollTop:scrollTop
	}
});
