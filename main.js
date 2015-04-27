$(function () {

    $(".slider").slider({
    	slide: function (event, ui) {
    		$('.image-old').css('opacity', 1 - ui.value*0.015);
    		$('.image-now').css('opacity', -0.375 + ui.value*0.015);
    	}
    });

});