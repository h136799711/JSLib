
require(["qunit","scrollTop"],function(qunit,scrollTop){

	if(!QUnit) {
		console.log("qunit not load.");
	}
	
//	QUnit.load();
	function start_t(){return;
			window.scrollTo(0,0);
			var inity = 0;
			equal($("#"+top_id).css("display"),"none");
			equal($("#"+top_id).offset().top,inity);
			
		//	console.log($("#"+top_id).offset());
		//	console.log("before scroll y: "+inity);
			window.scrollTo(0,300);
		//	console.log($("#"+top_id).offset());
		//	console.log("after scroll y: "+(inity + 300));
			equal($("#"+top_id).css("display"),"none");
			equal($("#"+top_id).offset().top,(inity + 300));
	}
	function ready(){
		QUnit.test("scrollTop basics",function(){			start_t();		});
	}
	$(function(){
		if(typeof scrollTop !== "function"){
			console.log("load scrollTop failed.");
			return ;
		}			
		//console.log("load scrollTop ok.");
		
		
		if(typeof test !== "function"){
			console.log("load qunit failed.");
			return ;
		}
		//console.log("load qunit ok.");
		
		ready();
	});
});