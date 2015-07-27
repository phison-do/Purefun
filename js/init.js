/* ----------------------

author: Phi Son Do
date: 07/2015

------------------------- */


var iosAgent = navigator.userAgent.match(/(iPod|iPhone|iPad)/);

//on ready
$(function(){

    addDataClassToBody.init();
    loadGames.init();
    tabs();

	$("#carousel").owlCarousel({
      	slideSpeed : 300,
      	paginationSpeed : 400,
      	autoHeight : true,
      	singleItem:true,
		jsonPath : 'js/games.json',
		jsonSuccess : customDataSuccess,
		afterAction: function(el){
			//remove class active
			this
			.$owlItems
			.removeClass('active')

			//add class active
			this
			.$owlItems
			.eq(this.currentItem)
			.addClass('active')
		}
	});
	
});


$(window).scroll(function(){
});


$(window).load(function(){
	
});
