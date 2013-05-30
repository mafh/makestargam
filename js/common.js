$(document).ready(function() {


// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

//  topmenu devmenu
    $(document).on('click', '.dev_menu_link', function() {
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
    $(document).on('click', 'nav .tab', function() {
        var n = $(this).index()
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parents().find('.tab_content').hide();
        $(this).parents().find('.tab_content.tt' + n).show();
    })

    $(document).on('hover', 'nav.hover .tab', function() {
        var n = $(this).index()
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parents().find('.tab_content').hide();
        $(this).parents().find('.tab_content.tt' + n).show();
    })

    $(document).on('click', '.images_choose .tabs a', function() {
        var n = $(this).parent().index()
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $(this).parents().find('.tab_content').hide();
        $(this).parents().find('.tab_content.tt' + n).show();
    })

    $(document).on('click', '.images_choose .button', function() {
        $('.images_choose .button input').focus();
    })

    $(document).on('click', '.images_filters li', function() {
        $(this).siblings().removeClass('active');
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
    })

//  tabs
//  $(document).on('click', 'ELEM', function() {

    $(document).on('click', '.login_link', function() {
        if($(this).parent().hasClass('active')) {
            $('.top_login').slideUp(200);
            $(this).parent().removeClass('active');
        } else {
            $('.top_login').slideDown(200);
            $(this).parent().addClass('active');
        }
        return false;
    })

//  type_tabs
    $(document).on('click', '.type_tabs a', function() {
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

//  popup
    function initPopup() {
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

    function popupError() {
        $('.popup_error').addClass('popup_show');
        $('.popup_error').fadeIn('fast');
        $('.popup-wrap').fadeIn('fast');
        initPopup();
    }

    $(document).on('click', '.show_error_link', function() {
        popupError();
    });

    $(document).on('click', '.create_link', function() {
        $('.popup_create').addClass('popup_show');
        $('.popup_show').fadeIn('fast');
        $('.popup-wrap').fadeIn('fast');
        initPopup();
    });

//  popup close
    $(document).on('click', '.popup__close', function() {
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
    $(document).on('click', '.button_preview', function() {
        $('.button_preview.active').fadeIn('fast');
        $('.pop-in-cover').fadeIn('fast');
        $('.grid__device').addClass('preview');
        return false;
    });

    $(document).on('click', '.button_preview.active', function() {
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

    $(document).on('click', '.gostep1', function() {
        $('.step').hide();
        $('.blank_block').hide();

        $('.step1').show();
        initPopup();
        return false;
    });

    $(document).on('click', '.gostep2', function() {
        $('.step').hide();
        $('.grid__device').removeClass('preview');
        $('.grid__device .layout').show();
        $('#img_result').hide();
        $('.step2').show();
        $('.blank_block').fadeIn('fast').removeClass('finished');
        initPopup();
        return false;
    });

    $(document).on('click', '.gostep3', function() {
        formCreate();
        $('.step').hide();
        $('.grid__device').addClass('preview');
        $('.grid__device .layout').hide();
        $('#img_result').show();
        $('.step3').show();
        $('.blank_block').fadeIn('fast').removeClass('finished');
        initPopup();
        return false;
    });

    $(document).on('click', '.gostep4', function() {
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
        $(document).on('click', '.faq .q_list a', function() {
            $('.faq .q_list a').removeClass('active');
            $(this).addClass('active');
        });
    }

    $(document).on('click', '.load_button', function() {
        getItems()
        return false;
    });

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

    $(document).on('click', '.cart input.text', function() {
        $('.cart .row').removeClass('row_focus');
        $(this).parent().parent().addClass('row_focus');
    });

    $(document).on('click', '.cart input.text', function() {
        $(this).parent().parent().removeClass('row_focus');
    });

    function imgUploadClose(){
        $('.pop-in-cover-dark').fadeOut('fast');
        $('.img_edit').hide();
        $('.img_upload').hide();
    }

    function formCreate(){
        $('#result_form input').remove();
        $(".layout .unit").each(function(){
            var unit    = $(this);
            var unit_w  = unit.width();
            var unit_h  = unit.height();
            var num     = unit.attr('data-num');
            var img     = $(this).find('img');
            if(img.is(':visible')) {
                var hidden = img.clone().css({'width':'auto','height':'auto'}).appendTo('body');
                var orig_w = hidden.width();
                var orig_h = hidden.height();
                hidden.remove();            
                var src  = img.attr('src');
                img_w    = img.width();
                img_h    = img.width();
                scale    = img_w/orig_w;
                pos      = img.position();
                pos.left = -pos.left*scale;
                pos.top  = -pos.top*scale;
                if(img_w < unit_w) {var result_w =  img_w*scale + pos.left;}
                else               {var result_w = unit_w*scale + pos.left;}
                if(img_h < unit_h) {var result_h =  img_h*scale + pos.top;}
                else               {var result_h = unit_h*scale + pos.top;}
                console.log(num+ ', left:' +pos.left+ ', top:' +pos.top+ ', ' +result_w+', ' +result_h+', scale:' +scale);
                $('#step2').append('<input id=\"images_\" name=\"images[]\" class="result_img" type=\"hidden\" value=\"' +num+ '\\' +src+ '\\' +pos.left+ ',' +pos.top+ ',' +result_w+ ',' +result_h+ '\">')
            } else {
                console.log('null');
                $('#step2').append('<input id=\"images_\" name=\"images[]\" class="result_img" type=\"hidden\" value=\"' +num+ '\\null">')
            }
        });
        console.log('---------------------------------------------');
    }

    function formClear(){
        $('#result_form input').remove();
    }

//add img
    $(document).on('click', '.add', function() {
        var pos = $(this).offset();
        $(this).addClass('active');
        $('.pop-in-cover-dark').fadeIn('fast');
        $('.img_upload').css({'top' : pos.top, 'left': pos.left}).fadeIn('fast');
        $('.unit').removeClass('edit_mode_on');
        $('.unit').removeClass('edit_hide');
        
    });

//delete img
    $(document).on('click', '.delete', function() {
        $(this).parent().find('img').remove();
        $(this).parent().addClass('empty');
        formCreate();
    });

//edit img
    $(document).on('click', '.pencil', function() {
        formClear();
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

//ok end edit
    $(document).on('mousedown', '.ok', function() {
        $(this).parent().removeClass('edit_mode_on');
        $('.grid__device img').draggable({ disabled: true });
        formCreate();
    });

//zoom plus
    $(document).on('click', '.plus', function() {
        var img = $(this).parent().find('img');
        var w   = img.width();
        w = w+10;
        img.css('width',w);
        formCreate();
    });

//zoom minus
    $(document).on('click', '.minus', function() {
        var img = $(this).parent().find('img');
        var w   = img.width();
        w = w-10;
        img.css('width',w);
        formCreate();
    });

//open img_edit
    $(document).on('click', '.multiple .pencil', function() {
        var unit_pos = $(this).parent().offset();
        $('.pop-in-cover-dark').fadeIn('fast');
        $('.img_edit').css({'top' : unit_pos.top, 'left': unit_pos.left}).fadeIn('fast');
        $(this).parent().addClass('edit_hide');
        var orig   = $(this).parent().find('img');
        var scr    = orig.attr('src');
        var target = $('.img_edit .in');
        target.append('<img src=\"'+ scr +'\">');
        $('.img_edit img').draggable();
    });

//close img_edit
    $(document).on('click', '.img_edit .ok', function() {
        imgUploadClose();
        $('.add').removeClass('active');
        $('.unit').removeClass('edit_mode_on');
        $('.unit').removeClass('edit_hide');
        $('.img_edit .in img').remove();
    });

//close img_edit
    $(document).on('click', '.pop-in-cover-dark', function() {
        $(this).fadeOut('fast');
        $('.img_edit').hide();
        $('.img_upload').hide();
        $('.add').removeClass('active');
        $('.unit').removeClass('edit_mode_on');
        $('.unit').removeClass('edit_hide');
        $('.img_edit .in img').remove();
    });

//append img to unit
    $(document).on('click', '.images_choose .content i', function() {
        var large    = $(this).attr('data-large');
        var target   = $('.grid__device .add.active').parent();
        var target_h = target.height();
        target.append('<img src=\"'+ large +'\">');
        target.removeClass('empty');
        $('.add.active').removeClass('active');
        imgUploadClose();
        formCreate();
    });

//filter select
    $(document).on('click', '.images_filters i', function() {
        var large    = $(this).attr('data-filter');
        var target   = $('#img_result');
        target.html('<img src=\"'+ large +'\">');
    })

});