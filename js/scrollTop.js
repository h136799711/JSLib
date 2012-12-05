
define(['min/jquery-1.8.3'],function(){
//	console.log("scrollTop");
//	console.log($ || window.$);
	var _top_id = "scrollTop";
	function scroll(){
	//	console.log(" window = ("+$(window).scrollTop()+" , "+$(window).scrollLeft()+" )");
	//	console.log("=====================");

		var offset = $("#"+_top_id).offset();
		if(!offset){
			return ;
		}
		offset.top = window.scrollY; 
		offset.left = 130; 
	//	console.log(offset);
		$("#"+_top_id).offset(offset);
		if(offset.top === 0){
			$("#"+_top_id).hide();
		}else{
			$("#"+_top_id).show();	
		}
	};


	return function(opts){
		if(typeof opts === "string"){
			_top_id = opts ;
		}
		$(window).scroll(scroll);
		$("#"+_top_id).click(function(){			
			window.location.href = window.location.href.split("#")[0] + "#top";
		});
		
		$("#"+_top_id).addClass("to-top");
	};
});
