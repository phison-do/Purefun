/* ----------------------

author: Phi Son Do
date: 8/13/2014

------------------------- */


var iosAgent = navigator.userAgent.match(/(iPod|iPhone|iPad)/);

//on ready
$(function(){

    addDataClassToBody.init();
    //addMainDataClassToBody.init();

    if(iosAgent) $('html').addClass('-mod-ios');

	// var dre = localStorage.getItem("visited");
	// if(dre != 0){
	// 	$('#pageloader').addClass("visited");
	// }

});


$(window).scroll(function(){
	stickyHeader.init();
});


$(window).load(function(){
	// $('#pageloader').delay(2000).fadeOut('slow');
	// $('#pageloader').addClass("pageready");
	// ($('.pageready').length > 0) ? localStorage.setItem("visited", 1) : localStorage.setItem("visited", 0);
	//testing pageloader
	//($('.pageready').length > 0) ? localStorage.setItem("visited", 0) : localStorage.setItem("visited", 0);
});
