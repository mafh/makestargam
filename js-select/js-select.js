$(document).ready(function() {

    // js-sel
    $(".js-sel").each(function(){
        var par = $(this),
        sel = $("SELECT", this),
        options = $("OPTION", sel),
        tmpl = '<span class="js-sel__head"><span class="js-sel__head__in"></span><i class="js-sel_arrow"></i></span><ul class="js-sel__body"></ul>',
        head, head_text, body, body_items;
        
        $(tmpl).appendTo(par);
            
        head = $(".js-sel__head", par);
        head_text = $(".js-sel__head__in", par).text($(":selected", sel).text());
        body = $(".js-sel__body", par);
        
        options.each(function(){
            var cl = $(this).is(":selected") ? 'cur ' : '';
            $('<li class="'+ cl +'">' + $(this).text() + '</li>').appendTo(body);
        });
        
        body_items = $(".js-sel__body LI", par);
            
        body_items.on("click", function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            head_text.text($(this).text());
            options.removeAttr("selected");
            options.eq($(this).prevAll().length).attr("selected", "selected");
            sel.trigger("change");
            selClose();
        });
        
        head.click(function(){
            if (!par.hasClass("js-sel_open")) {
                selClose();
                par.addClass("js-sel_open");
            } else {
                par.removeClass("js-sel_open");
            }
        });
        
    });
    
    function selClose(){
        $(".js-sel").removeClass("js-sel_open");
    }

    $(document).click(function(e){
        if (!$(e.target).closest(".js-sel").length) {
            selClose();
        }
    });

});