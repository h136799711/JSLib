
require(["qunit","scrollTop"],function(qunit,scrollTop){

	function start_t(){
			var top_id = "click-top";
			equal(typeof scrollTop,"function");
			
			scrollTop(top_id);
			
			window.scrollTo(300);			
			window.scrollBy(300);

			equal($("#"+top_id).css("visibility"),"visible");
			equal($("#"+top_id).offset().top,window.scrollY);

		//	$(window).scrollTop(-300);

			equal($("#"+top_id).css("visibility"),"visible");
			equal($("#"+top_id).offset().top,window.scrollY);
	}
	function ready(){
		QUnit.asyncTest("ignore",function(){
			console.log("ignore");
		});
		QUnit.asyncTest("scrollTop usage test3",start_t);
	}
	$(function(){
		if(typeof scrollTop !== "function"){
			console.log("load scrollTop failed.");
			return ;
		}			
		console.log("load scrollTop ok.");
		
		
		if(typeof test !== "function"){
			console.log("load qunit failed.");
			return ;
		}
		console.log("load qunit ok.");
		
		
		QUnit.load();
		ready();
		QUnit.start();
	});
});