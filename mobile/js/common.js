$(document).ready(function() {


// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

//  tabs
    if ($('.images_choose').exists()){
        $('.images_choose .tabs a').click(function() {
            var n = $(this).parent().index()
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            $(this).parents().find('.tab_content').hide();
            $(this).parents().find('.tab_content.tt' + n).show();
        })
        $('.images_choose .button').click(function() {
            $('.images_choose .button input').focus();
        })
    };

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

    $('.unit.empty').click(function(){
        $('.step').hide();
        $('.step-pics').show();
        $('.blank_block').hide();
        $('.layout .item').removeClass('active');
        return false;
    });

    if ($('.dev_menu .tab').exists()){
        $('.dev_menu .tab').click(function() {
            $('nav .tab').removeClass('active');
            $(this).addClass('active');
        })
    };

    if ($('.color_choose').exists()){
        $('.color_choose a').click(function() {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            if ($(this).parent().index(0)) {
                $('.blank_block').addClass('black');
            } else {
                $('.blank_block').removeClass('black');
            }
            return false;
        })
    };

    if ($('.layout').exists()){
        $('.layout .item').click(function(event) {
            $('.layout .item').removeClass('active');
            $(this).addClass('active');
        })
    };

    $('.button_preview').click(function(){
        $('.button_preview').toggleClass('active');
        $('.grid__device').toggleClass('preview');
        $('.layout .item').removeClass('active');
        return false;
    });

    if ($('.images_filters').exists()){
        $('.images_filters li').click(function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            return false;
        })
        $('.nofilter').click(function() {
            $('.images_filters li').removeClass('active');
            return false;
        })
    };

    if ($('.grid__device').exists()){
        $('.pencil').click(function(){
            var pos = $(this).parent().offset();
            $('.img_edit').css({'top' : pos.top, 'left': pos.left}).fadeIn('fast');
        });
        $('.delete').click(function(){
            $('.img_edit').fadeOut('fast');
            $('.layout .item').removeClass('active');
        });
        
    }

/*
    document.addEventListener('touchend', function(e) {
        e.preventDefault();
        var touch = e.touches[0];
        $('.add').show();
    }, false);
*/

 
});