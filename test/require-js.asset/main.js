require(["one"],function(one){
   console.log(one);
   if(one && one.log){
	   one.log("one.log defined");
   }else if(log){
       log("log defined");
   }else{
       log("onthing defined");
   }
});