$(document).ready(function() {


// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

//  topmenu devmenu
    $('.dev_menu_link').on("click", function() {
        if($(this).parent().hasClass('active')) {
            $('.dev_top_menu').slideUp(200)
            $(this).parent().removeClass('active');
        } else {
            $('.dev_top_menu').slideDown(200)
            $(this).parent().addClass('active');
        }
        return false;
    })


//  tabs
    if ($('nav .tab').exists()){
        $('nav .tab').on("click", function() {
            var n = $(this).index()
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents().find('.tab_content').hide();
            $(this).parents().find('.tab_content.tt' + n).show();
        })
    };

    if ($('nav.hover .tab').exists()){
        $('nav.hover .tab').hover(function() {
            var n = $(this).index()
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents().find('.tab_content').hide();
            $(this).parents().find('.tab_content.tt' + n).show();
        })
    };

    if ($('.images_choose').exists()){
        $('.images_choose .tabs a').on("click", function() {
            var n = $(this).parent().index()
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            $(this).parents().find('.tab_content').hide();
            $(this).parents().find('.tab_content.tt' + n).show();
        })
        $('.images_choose .button').on("click", function() {
            $('.images_choose .button input').focus();
        })
    };

    if ($('.images_filters').exists()){
        $('.images_filters li').on("click", function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        })
    };

    if ($('.color_choose').exists()){
        $('.color_choose a').on("click", function() {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            if ($(this).parent().index(0)) {
                $('.blank_block').addClass('black');
            } else {
                $('.blank_block').removeClass('black');
            }
        })
    };

//  tabs
    if ($('.login_link').exists()){
        $('.login_link').on("click", function() {
            if($(this).parent().hasClass('active')) {
                $('.top_login').slideUp(200);
                $(this).parent().removeClass('active');
            } else {
                $('.top_login').slideDown(200);
                $(this).parent().addClass('active');
            }
            return false;
        })
    };

//  type_tabs
    if ($('.type_tabs').exists()){
        $('.type_tabs a').on("click", function() {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            var n = $(this).parent().index();
            $('.type_tabs_content').hide();
            $('.type_tabs_content.tt' + n).show();
            if ($(this).hasClass('paypal_link')) {
                $('.cart footer').hide();
            } else {
                $('.cart footer').show();
            }
            return false;
        })
    };

//  popup
    function initPopup() {
        if ($('.popup_holder').exists()){
            var win = $(window);
            var content = $('body');
            var popup = $('.popup_show .popup');
            var w = win.height();
            var p = popup.height();
            var c = content.height();

            content.css('overflow','hidden');

            $(window).resize(function(){
                w = win.height();
                if (w >= p + 120){
                    popup.addClass('popup_center').removeClass('popup_top');
                    popup.css('marginTop', (-1) * p /2);
                }
                else{
                    popup.addClass('popup_top').css('marginTop', 0).removeClass('popup_center');
                    win.scroll(function(){
                    var wst = win.scrollTop();
                        if (c < p){content.css('minHeight', p + 120);}
                        if(wst + w >= p){ 
                            popup.removeClass('popup_top');
                        }
                        else{
                            popup.addClass('popup_top');
                        }
                        
                    });
                }
            });

            if (w >= p + 120){
                popup.addClass('popup_center').removeClass('popup_top');
                popup.css('marginTop', (-1) * p /2);
            }
            else{
                popup.addClass('popup_top').css('marginTop', 0).removeClass('popup_center');
                win.scroll(function(){
                var wst = win.scrollTop();
                    if (c < p){content.css('minHeight', p  + 120);}
                    if(wst + w >= p){ 
                        popup.removeClass('popup_top');
                    }
                    else{
                        popup.addClass('popup_top');
                    }
                    
                });
            }
        };
    };

    function popupError() {
        $('.popup_error').addClass('popup_show');
        $('.popup_error').fadeIn('fast');
        $('.popup-wrap').fadeIn('fast');
        initPopup();
    }

    $('.show_error_link').on("click", function(){
        popupError();
    });

    $('.create_link').on("click", function(){
        $('.popup_create').addClass('popup_show');
        $('.popup_show').fadeIn('fast');
        $('.popup-wrap').fadeIn('fast');
        initPopup();
    });

//  popup close
    $('.popup__close').on("click", function(){
        $(this).parent().parent().fadeOut('fast');
        $('.popup-wrap').fadeOut('fast');
        $(this).parents().removeClass('popup_show');
        $('body').css('overflow','');
        return false;
    });

    if ($('.popup_show').exists()){
        $('.popup_show').fadeIn('fast');
        $('.popup-wrap').fadeIn('fast');
        initPopup();
    }

//  preview
    $('.button_preview').on("click", function(){
        $('.button_preview.active').fadeIn('fast');
        $('.pop-in-cover').fadeIn('fast');
        $('.grid__device').addClass('preview');
        return false;
    });
    $('.button_preview.active').on("click", function(){
        $(this).fadeOut('fast');
        $('.pop-in-cover').fadeOut('fast');
        $('.grid__device').removeClass('preview');
        return false;
    });

    if($('.step2').is(":visible")) {
        $('.blank_block').show();
    }
    if($('.step3').is(":visible")) {
        $('.blank_block').show();
    }
    if($('.step4').is(":visible")) {
        $('.blank_block').show();
    }

    $('.gostep1').on("click", function(){
        $('.step').hide();
        $('.blank_block').hide();

        $('.step1').show();
        initPopup();
        return false;
    });

    $('.gostep2').on("click", function(){
        $('.step').hide();
        $('.grid__device').removeClass('preview');
        $('.grid__device .layout').show();
        $('#img_result').hide();
        $('.step2').show();
        $('.blank_block').fadeIn('fast').removeClass('finished');
        initPopup();
        return false;
    });

    $('.gostep3').on("click", function(){
        $('.step').hide();
        $('.grid__device').addClass('preview');
        $('.grid__device .layout').hide();
        $('#img_result').show();
        $('.step3').show();
        $('.blank_block').fadeIn('fast').removeClass('finished');
        initPopup();
        return false;
    });

    $('.gostep4').on("click", function(){
        $('.step').hide();

        $('.step4').show();
        $('.blank_block').fadeIn('fast').addClass('finished');
        initPopup();
        return false;
    });

    if ($('.faq .q_list').exists()){
        var list = $('.q_list');
        var page = $('.faq');
        var foot = $('.footer');
        $(window).scroll(function(){
            var p = page.height();
            var f = foot.height();
            var l = list.height();
            var d = p - l;
            if ($(window).scrollTop() < 100) {
                $('.faq .q_list').removeClass('fixed');
                $('.faq .q_list').removeClass('absolute');
                $('.faq .q_list').css('top', '0');
                
            } else if ($(window).scrollTop() > d) {
                $('.faq .q_list').removeClass('fixed');
                $('.faq .q_list').addClass('absolute');
                $('.faq .q_list').css('top', d + 'px');
            } else {
                $('.faq .q_list').addClass('fixed');
                $('.faq .q_list').removeClass('absolute');
                $('.faq .q_list').css('top', '40px');
            }

        });
        $('.faq .q_list a').on("click", function(){
            $('.faq .q_list a').removeClass('active');
            $(this).addClass('active');
        });
    }

    if ($('.loadmore').exists()){
        $('.load_button').on("click", function(){
            getItems()
            return false;
        });
    }

    $(window).scroll(function(){
        if ($(window).scrollTop() > 18) {
            $('.top_content').addClass('top_fixed');
            $('.page').css('padding-top', '40px');
        } else {
            $('.top_content').removeClass('top_fixed');
            $('.page').css('padding-top', '58px');
        }

    });

    function getItems() {
        $('.load_button').addClass('active');
        $.ajax({
            url: 'store_ajax_content',
            dataType: 'html',
            error: function() {
            },
            success: function(data) {
                $(".case_list").append(data);
                $('.case_list .hidden_row').slideDown(200);
                $('.load_button').removeClass('active');
            }
        });
    }

//  slider
    if ($('section.slider').exists()){
        (function($){
            $(window).load(function(){
                $(".slider .wrap").mCustomScrollbar({
                    scrollInertia:250,
                    horizontalScroll:true,
                    mouseWheelPixels:219,
                    scrollButtons:{
                        enable:true,
                        scrollType:"pixels",
                        scrollAmount:219
                    },
                    callbacks:{
                        onScroll:function(){ snapScrollbar(); }
                    },
                    scrollButtons:{
                        enable: false
                    }
                });
                /* toggle buttons scroll type */
                var content=$(".slider .wrap");
                $("a[rel='toggle-buttons-scroll-type']").html("<code>scrollType: \""+content.data("scrollButtons_scrollType")+"\"</code>");
                $("a[rel='toggle-buttons-scroll-type']").click(function(e){
                    e.preventDefault();
                    var scrollType;
                    if(content.data("scrollButtons_scrollType")==="pixels"){
                        scrollType="continuous";
                    }else{
                        scrollType="pixels";
                    }
                    content.data({"scrollButtons_scrollType":scrollType}).mCustomScrollbar("update");
                    $(this).html("<code>scrollType: \""+content.data("scrollButtons_scrollType")+"\"</code>");
                });
                /* snap scrollbar fn */
                var snapTo=[];
                $(".slider .wrap .case_item").each(function(){
                    var $this=$(this),thisX=$this.position().left;
                    snapTo.push(thisX);
                });
                function snapScrollbar(){
                    var posX=$(".slider .wrap .mCSB_container").position().left,closestX=findClosest(Math.abs(posX),snapTo);
                    $(".slider .wrap").mCustomScrollbar("scrollTo",closestX,{scrollInertia:350,callbacks:false});
                }
                function findClosest(num,arr){
                    var curr=arr[0];
                    var diff=Math.abs(num-curr);
                    for(var val=0; val<arr.length; val++){
                        var newdiff=Math.abs(num-arr[val]);
                        if(newdiff<diff){
                            diff=newdiff;
                            curr=arr[val];
                        }
                    }
                    return curr;
                }
            });
        })(jQuery);
    }

    if ($('.cart').exists()){
        $('.cart input.text').on("click", function(){
            $('.cart .row').removeClass('row_focus');
            $(this).parent().parent().addClass('row_focus');
        });
        $(' input.text').blur(function(){
            $(this).parent().parent().removeClass('row_focus');
        });
    }

    if ($('.grid__device').exists()){

        $('.img_edit img').draggable();

        function imgUploadClose(){
            $('.pop-in-cover-dark').fadeOut('fast');
            $('.img_edit').hide();
            $('.img_upload').hide();
        }

        $('.edit-add').on("click", function(){
            var pos = $(this).offset();
            $(this).addClass('active');
            $('.pop-in-cover-dark').fadeIn('fast');
            $('.img_upload').css({'top' : pos.top, 'left': pos.left}).fadeIn('fast');
            
        });

        $('.edit-delete').on("click", function(){
            $(this).parent().find('img').remove();
            $(this).parent().addClass('empty');
        });

        $('.edit-pencil').on("click", function(){
            $('.grid__device .unit').removeClass('edit_mode_on');
            $(this).parent().addClass('edit_mode_on');
            $(this).parent().find('img').draggable({
                disabled: false,
                start: function() {
                    $(this).parent().addClass('edit_hide');
                },
                stop: function() {
                    $(this).parent().removeClass('edit_hide');
                }
            });
        });

        $('.edit-ok').on("mousedown", function(){
            $(this).parent().removeClass('edit_mode_on');
            $('.grid__device img').draggable({ disabled: true });

            $(".layout .unit").each(function(){
                var unit    = $(this);
                var unit_w  = unit.width();
                var unit_h  = unit.height();
                var img     = $(this).find('img');
                if(img.is(':visible')) {
                    var img_w   = img.width();
                    var img_h   = img.width();
                    var pos     = img.position();
                    console.log(pos.left+' '+pos.top+' '+unit_w+' '+unit_h);
                } else {
                    console.log('null');
                }
            });
            console.log('---------------------------------------------');
        });

        $('.edit-plus').on("mouseup", function(){
            var unit    = $(this).parent();
            var unit_w  = unit.width();
            var unit_h  = unit.height();
            var img     = $(this).parent().find('img');
            var img_w   = img.width();
            var img_h   = img.width();
            var pos     = img.position();

            img_w = img_w+10;
            img.css({'width':img_w});
            //console.log(pos.left+' '+pos.top+' '+unit_w+' '+unit_h);
        });

        $('.edit-minus').on("mouseup", function(){
            var img = $(this).parent().find('img');
            var w   = img.width();
            w = w-10;
            img.css('width',w);
        });


        $('.slot_small .edit-pencil').on("click", function(){
            var pos = $(this).parent().offset();
            $('.pop-in-cover-dark').fadeIn('fast');
            $('.img_edit').css({'top' : pos.top, 'left': pos.left}).fadeIn('fast');
        });

        $('.pop-in-cover-dark').on("click", function(){
            $(this).fadeOut('fast');
            $('.img_edit').hide();
            $('.img_upload').hide();
            $('.edit-add').removeClass('active');
        });

        $('.img_edit .edit-ok').on("click", function(){
            imgUploadClose();
            $('.edit-add').removeClass('active');
        });

        $('.images_choose .content i').on("click", function(){
            var large    = $(this).attr('data-large');
            var target   = $('.grid__device .edit-add.active').parent();
            var target_h = target.height();
            target.append('<img src=\"'+ large +'\" style=\"width: '+ target_h +'px\">');
            target.removeClass('empty');
            $('.edit-add.active').removeClass('active');
            imgUploadClose();
        });

        $('.images_filters i').on("click", function(){
            var large    = $(this).attr('data-filter');
            var target   = $('#img_result');
            target.html('<img src=\"'+ large +'\">');
        })
    }

});