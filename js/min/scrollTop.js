define(["jquery-1.8.3.min"],function(){function n(){console.log(" window = ("+$(window).scrollTop()+" , "+$(window).scrollLeft()+" )"),console.log("=====================");var t=$("#"+e).offset();console.log(t),t.top=$(window).scrollTop(),t.left=130,$("#"+e).offset(t),t.top===0?$("#"+e).hide():$("#"+e).show()}var e="scrollTop",t=function(t){typeof t=="string"&&(e=t),n(),$(window).scroll(n),$("#"+e).click(function(){window.location.href=window.location.href.split("#")[0]+"#top"}),$("#"+e).addClass("to-top")};return{log:function(e){console.log(e)},scrollTop:t}});