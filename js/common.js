$(document).ready(function() {


// function element exists
	jQuery.fn.exists = function() {
		return true; 
        $(this).length;
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
        $(this).parent().parent().parent().find('.tab_content').hide();
        $(this).parent().parent().parent().find('.tab_content.tt' + n).show();
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

    $(window).scroll(function(){
        $('.top_login').slideUp(200);
        $('.login_link').parent().removeClass('active');
        console.log('atata');
    });

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
            if (w >= p + 20){
                popup.addClass('popup_center').removeClass('popup_top');
                popup.css('marginTop', (-1) * p /2);
            }
            else{
                popup.addClass('popup_top').css('marginTop', 0).removeClass('popup_center');
                win.scroll(function(){
                var wst = win.scrollTop();
                    if (c < p){content.css('minHeight', p + 20);}
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
                if (c < p){content.css('minHeight', p  + 20);}
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

    /*
    if ($('.popup_show').exists()){
        $('.popup_show').fadeIn('fast');
        $('.popup-wrap').fadeIn('fast');
        initPopup();
    }
    */

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
        if ($(window).scrollTop() > 0) {
            $('.gotop').addClass('active');
        } else {
            $('.gotop').removeClass('active');
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
        formClear();
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
                //console.log(orig_w, orig_h);
                hidden.remove();            
                var src  = img.attr('src');
                img_w    = img.width();
                img_h    = img.height();
                //console.log(orig_w, orig_h, img_w, img_h);
                var scale    = orig_w / img_w;
                var pos      = img.position();
                pos.left = -pos.left*scale;
                pos.top  = -pos.top*scale;
                
                // result_w = img_w * scale - pos.left;
                // result_h = img_h * scale - pos.top;

                if (img_w < unit_w) {
                    var result_w = img_w*scale - pos.left;
                } else {
                    var result_w = unit_w*scale - pos.left;
                }
                
                if (img_h < unit_h) {
                    var result_h =  img_h*scale - pos.top;
                } else {
                    var result_h = unit_h*scale - pos.top;
                }

                var l = Math.round(pos.left);
                var t = Math.round(pos.top);
                var w = Math.round(result_w);
                var h = Math.round(result_h);

                //console.log(num+ ', left:' +l+ ', top:' +t+ ', ' +w+', ' +h+', scale:' +scale);
                
                $('#step2').append('<input id=\"images_\" name=\"images[]\" class="result_img" type=\"hidden\" value=\"' + num + '\\' + src + '\\' + l + ',' + t + ',' + w + ',' + h + '\">')
            } else {
                //console.log('null');
                $('#step2').append('<input id=\"images_\" name=\"images[]\" class="result_img" type=\"hidden\" value=\"' +num+ '\\null">')
            }
        });
        //console.log('---------------------------------------------');
    }

    function formClear(){
        $('#step2 input.result_img').remove();
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

        var cell_w = $(this).parent().width();
        var cell_h = $(this).parent().height();

        $(this).parent().find('img').css({left: 0, top: 0});

        var img_p  = $(this).parent().find('img').offset();

        var img_w  = $(this).parent().find('img').width();
        var img_h  = $(this).parent().find('img').height();

        var x1 = (img_p.left + cell_w) - img_w;
        var y1 = (img_p.top  + cell_h) - img_h;
        var x2 = img_p.left;
        var y2 = img_p.top;

        try {
          $(this).parent().find('img').draggable('destroy');
        } catch (e) {
          console.log('Tried to destroy draggable but there is no one.');
        }

        $(this).parent().find('img').draggable({
            containment: [x1, y1, x2, y2],
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
        var pw = $(this).parent().width();
        var ph = $(this).parent().height();

        var img = $(this).parent().find('img');
        var w   = img.width();
        var h = img.height();
        var r = w / h;
        w = w+10;
        h = h + 10 * r;

        img.width(w).height(h);
        img.css({left: 0, top: 0});

        img_p = img.offset();

        var x1 = (img_p.left + pw) - w;
        var y1 = (img_p.top  + ph) - h;
        var x2 = img_p.left;
        var y2 = img_p.top;

        $(this).parent().find('img').draggable('destroy');
        $(this).parent().find('img').draggable({
            containment: [x1, y1, x2, y2],
            disabled: false,
            start: function() {
                $(this).parent().addClass('edit_hide');
            },
            stop: function() {
                $(this).parent().removeClass('edit_hide');
            }
        });

        formCreate();
    });

//zoom minus
    $(document).on('click', '.minus', function() {
        var pw = $(this).parent().width();
        var ph = $(this).parent().height();

        var img = $(this).parent().find('img');
        var w   = img.width();
        var h = img.height();
        var r = w / h;
        w = w-10;
        h = h - 10 * r;
        if (w < pw || h < ph) {
            return false;
        }

        img.width(w).height(h);
        img.css({left: 0, top: 0});

        img_p = img.offset();

        var x1 = (img_p.left + pw) - w;
        var y1 = (img_p.top  + ph) - h;
        var x2 = img_p.left;
        var y2 = img_p.top;

        $(this).parent().find('img').draggable('destroy');
        $(this).parent().find('img').draggable({
            containment: [x1, y1, x2, y2],
            disabled: false,
            start: function() {
                $(this).parent().addClass('edit_hide');
            },
            stop: function() {
                $(this).parent().removeClass('edit_hide');
            }
        });

        formCreate();
    });

//proceed button loading
    $(document).on('click', '.create footer .button', function() {
        $(this).find('span').css('visibility','hidden');
        $(this).find('.loading').css('display','block');
    });

//open img_edit
    $(document).on('click', '.multiple .pencil', function() {
        var unit = $(this).parent();
        var unit_pos = $(this).parent().offset();
        $('.pop-in-cover-dark').fadeIn('fast');
        $(this).parent().addClass('edit_hide');
        $('.img_edit').css({'top' : unit_pos.top, 'left': unit_pos.left}).fadeIn('fast');

        //маленькая картинка
        var img        = $(this).parent().find('img');
        var img_src    = img.attr('src');
        img_w    = img.width();
        img_h    = img.height();

        var unit_w = unit.width();
        var unit_h = unit.height();
        var box_ratio  = unit_h/unit_w;

        
        var target = $('.img_edit .in');
        var target_p = target.position();
        var target_w = target.width();
        var target_h = target.height(target_w*box_ratio);

        var box_scale = target_w / unit_w;

        var result_w = img_w*box_scale;
        var result_h = img_h*box_scale;

        //console.log(box_scale);
        

        $img = $('<img src=\"'+ img_src +'\">').width( result_w ).height( result_h );
        target.append($img);


        var x1 = (target_p.left + target_w) - img_w;
        var y1 = (target_p.top  + target_h) - img_h;
        var x2 = target_p.left;
        var y2 = target_p.top;

        $img.css({left: 0, top: 0});

        $img.draggable({
            containment: [x1, y1, x2, y2],
            disabled: false
        });
    });

// img_edit save
    $(document).on('click', '.img_edit .ok', function() {
        var editor = $(this).parent();
        var target = $('.layout .edit_hide');

        var editor_w = editor.width();
        var target_w = target.width();

        var box_scale = target_w / editor_w;
        console.log(box_scale);

        var img = $(this).parent().find('img');
        img_w    = img.width();
        img_h    = img.height();
        var result_w = img_w*box_scale;
        var result_h = img_h*box_scale;

        var t_img = target.find('img');

        t_img.width( result_w );
        t_img.height( result_h );

        var pos  = t_img.position();
        pos.left = -pos.left*box_scale;
        pos.top  = -pos.top*box_scale;
        console.log( pos.left , pos.top );

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
        var large    = $(this).data('large');
        var target   = $('.grid__device .add.active').parent();
        var target_h = target.height();
        var target_w = target.width();

        if (target_w > target_h) {
            $img = $('<img src=\"'+ large +'\">').width( target_w ).height('auto');
        } else {
            $img = $('<img src=\"'+ large +'\">').height( target_h ).width('auto');
        }
        target.append($img);

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


    $(document).on('click', '.button_autofill', function() {
        var list = $('.images_choose .content i').toArray();
        

        $('.layout .unit').each(function(){
            var w = $(this).width();
            var h = $(this).height();
            var elemlength = list.length;
            var randomnum = Math.floor(Math.random()*elemlength);
            var randomitem = list[randomnum];
            var url = $(randomitem).attr('data-large');
            if (w > h) {
                $img = $('<img src=\"'+ url +'\">').width( w ).height('auto');
            } else {
                $img = $('<img src=\"'+ url +'\">').height( h ).width('auto');
            }
            $(this).append($img).removeClass('empty');
        });
    })

});