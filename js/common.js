$(document).ready(function() {

    
// function element exists
    jQuery.fn.exists = function() {
        return $(this).length;
    }

    $(window).resize(function(){
        w = $(window).height();
        console.log(w);
    });

    if ($('#rules_link').exists()){
        $('#rules_link').on("click", function() {
            if($('#rules_win').is(":visible")) {
                $('#rules_win').fadeOut('150');
            } else {
                $('#rules_win').fadeIn('150');
            }
            return false;
        })
    };

    // popup
    function initPopup() {
        if ($('.popup_holder').exists()){
            var win = $(window);
            var content = $('body');
            var popup = $('.popup.visible');
            var w = win.height();
            var p = popup.height();
            var c = content.height();

            content.css('overflow','hidden');

            $(window).resize(function(){
                w = win.height();
                if (w >= p + 20){
                    popup.addClass('popup_center').removeClass('popup_top');
                    popup.css('marginTop', (-1) * p /2);
                }
                else{
                    popup.addClass('popup_top').css('marginTop', 0).removeClass('popup_center');
                    win.scroll(function(){
                    var wst = win.scrollTop();
                        if (c < p){content.css('minHeight', p + 10);}
                        if(wst + w >= p){ 
                            popup.removeClass('popup_top');
                        }
                        else{
                            popup.addClass('popup_top');
                        }
                        
                    });
                }
            });

            if (w >= p + 20){
                popup.addClass('popup_center').removeClass('popup_top');
                popup.css('marginTop', (-1) * p /2);
            }
            else{
                popup.addClass('popup_top').css('marginTop', 0).removeClass('popup_center');
                win.scroll(function(){
                var wst = win.scrollTop();
                    if (c < p){content.css('minHeight', p  + 10);}
                    if(wst + w >= p){ 
                        popup.removeClass('popup_top');
                    }
                    else{
                        popup.addClass('popup_top');
                    }
                    
                });
            }
        };
        $('.tinyscrollbar').tinyscrollbar({ sizethumb: 38 });
        $('.comments.tinyscrollbar').tinyscrollbar({ sizethumb: 38 });
    };

    //  popup close
    $('.popup__close').click(function(){
        $(this).parent().parent().css('display', 'none');
        $('.popup-wrap').css('display', 'none');
        $(this).parents().removeClass('popup_show');
        $('body').css('overflow','');
        return false;
    });

    if ($('.videoblock').exists()){
        $('.video').click(function(){
            $('.popup_video .popup').addClass('visible');
            $('.popup_video').fadeIn('fast');
            $('.popup-wrap').fadeIn('fast');
            initPopup();
            return false;
        });
        $('.comment_link').click(function(){
            $('.popup_video .popup').addClass('visible');
            $('.popup_video').fadeIn('fast');
            $('.popup-wrap').fadeIn('fast');
            initPopup();
            return false;
        });
    }

    if ($('.tape').exists()){
        $('.tape .pro').hover(function(){
            $('.tip-pro').fadeIn(100);
        });
        $('.tape .light').hover(function(){
            $('.tip-light').fadeIn(100);
        });
        $('.tape .fb').hover(function(){
            $('.tip-fb').fadeIn(100);
        });
        $('.tape .vk').hover(function(){
            $('.tip-vk').fadeIn(100);
        });
        $('.tape a').mouseout(function(){
            $('.tip').fadeOut(100);
        });
    }

    $('.error .tip').click(function(){
        $(this).parent().removeClass('error');
    });

    $('.error input').click(function(){
        $(this).parent().removeClass('error');
    });

    $('.error textarea').click(function(){
        $(this).parent().removeClass('error');
    });

    
    //$('.popup_video .popup').addClass('visible');
    //$('.popup_video').fadeIn('fast');
    //$('.popup-wrap').fadeIn('fast');
    //initPopup();

});