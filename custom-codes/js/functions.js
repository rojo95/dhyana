const $ = jQuery;
$(document).ready(function() {
    $('.elementor-menu-toggle').click(function(){
        if($(this).hasClass('elementor-active')) {
            $(this).removeClass('elementor-active')
        } else {
            $(this).addClass('elementor-active')
        }

    })
});