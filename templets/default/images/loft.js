$(document).ready(function() {	
$(".src8 ul").tabs(".src7 > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",rotate: true}).slideshow({ autoplay: true,interval:4000});	
$(".src2 ul").tabs(".src1 > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",rotate: true});	
$(".src3").scrollable({size:4,items:".src3 ul",loop:true}).autoscroll({ autoplay: true,interval:4000 }).navigator({navi:".nv",naviItem:'dd',activeClass:"active"});	
$(".location .src4").scrollable({size:4,items:".location .src4 ul",loop:true,prev:"a.arr01",next:"a.arr02"}).autoscroll({ autoplay: true,interval:4000 });
$("..src5 .src6").scrollable({size:1,items:".src5 .src6 ul",loop:true,prev:"a.arr03",next:"a.arr04"}).autoscroll({ autoplay: true,interval:4000 });
$(function(){
$(window).resize(function(){goTop();});
$(window).scroll(function(){goTop();});
});
function goTop(){
if($(".float").position().top>=545){
$(".float").stop().animate({"top":($(window).height()+$(window).scrollTop()-($(window).height()+$(".float").height())/2)<545 ? 545 : $(window).height()+$(window).scrollTop()-($(window).height()+$(".float").height())/2},400);
}
}
$(".float a.close").click(function(){$(".float").hide();});
						   });