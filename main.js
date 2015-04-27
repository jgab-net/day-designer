$(function () {

    $(".slider").slider({
    	slide: function (event, ui) {
    		$('.image-old').css('opacity', 1 - ui.value*0.010);
    		$('.image-now').css('opacity', 0 + ui.value*0.010);

    		if (ui.value == 100) {
    			$('#greet').modal({show:true});
    		}
    	}
    });

});