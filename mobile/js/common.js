$(document).ready(function() {


// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

//  tabs
    $(document).on('click', '.images_choose .tabs a', function() {
        var n = $(this).parent().index()
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $(this).parents().find('.tab_content').hide();
        $(this).parents().find('.tab_content.tt' + n).show();
    })
    $('.images_choose .button').click(function() {
        $('.images_choose .button input').focus();
    })

    $('.gostep1').click(function(){
        $('.step').hide();
        $('.step1').show();
        $('.blank_block').hide();
        return false;
    });

    $('.gostep2').click(function(){
        $('.step').hide();
        $('.step2').show();
        $('.blank_block').hide();
        return false;
    });

    $('.gostep3').click(function(){
        $('.step').hide();
        $('.step3').show();
        $('.blank_block').show();
        $('.grid__device').removeClass('preview');
        return false;
    });

    $('.gostep4').click(function(){
        $('.step').hide();
        $('.step4').show();
        $('.layout .item').removeClass('active');
        $('.grid__device').addClass('preview');
        $('.blank_block').show();
        return false;
    });

    $('.gostep5').click(function(){
        $('.step').hide();
        $('.step5').show();
        $('.blank_block').show();
        return false;
    });

    $(document).on('click', '.unit.empty', function() {
        $('.step').hide();
        $('.step-pics').show();
        $('.blank_block').hide();
        $('.layout .item').removeClass('active');
        return false;
    });

    $(document).on('click', '.dev_menu .tab', function() {
        $('nav .tab').removeClass('active');
        $(this).addClass('active');
    })

    $(document).on('click', '.color_choose a', function() {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        if ($(this).parent().index(0)) {
            $('.blank_block').addClass('black');
        } else {
            $('.blank_block').removeClass('black');
        }
        return false;
    })

    $(document).on('click', '.layout .item', function() {
        $('.layout .item').removeClass('active');
        $(this).addClass('active');
    })

    $(document).on('click', '.button_preview', function() {
        $('.button_preview').toggleClass('active');
        $('.grid__device').toggleClass('preview');
        $('.layout .item').removeClass('active');
        return false;
    });

    $(document).on('click', '.images_filters li', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        return false;
    })

    $(document).on('click', '.nofilter', function() {
        $('.images_filters li').removeClass('active');
        return false;
    })

    $(document).on('click', '.pencil', function() {
        var pos = $(this).parent().offset();
        $('.img_edit').css({'top' : pos.top, 'left': pos.left}).fadeIn('fast');
    });

    $(document).on('click', '.delete', function() {
        $('.img_edit').fadeOut('fast');
        $('.layout .item').removeClass('active');
    });

/*
    document.addEventListener('touchend', function(e) {
        e.preventDefault();
        var touch = e.touches[0];
        $('.add').show();
    }, false);
*/

 
});