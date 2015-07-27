"use strict";

var _body = $('body');

//-------------------------------------- tab navigation

function tabs() {
    var tabItems = $('.tabs li a'),
        tabContent = $('.tab-content');

    tabItems.on('click', function(e){
        e.preventDefault();

        var tab_id = $(this).data('tab-id');

        tabItems.removeClass('current');
        $(this).addClass('current');

        tabContent.hide();
        $("#"+tab_id).show();
    });
}

//-------------------------------------- add data link class to the body on click

var addDataClassToBody = {

    init: function(settings) {
        this.config = {
            items: $('[data-link]')
        };
        // allow overriding the default config
        $.extend(this.config, settings);
        this.setup();
    },

    setup: function() {
        this.config.items.on('click', this.toggleClassName);
    },

    toggleClassName: function(e) {
        e.preventDefault();
        _body.toggleClass($(this).data('link'));
    }

};

//-------------------------------------- Load games

var loadGames = {

    init: function(settings) {
        this.config = {
            url: "js/games.json",
        };
        $.extend(this.config, settings);
        this.setup();
    },

    setup: function() {
        $.ajax({
            dataType: "json",
            url: this.config.url,
            mimeType: "application/json",
            success: function(result){
                var output="<ul>";
                $.each(result, function(i, obj) {

                    var promo = obj.square.s;
                    var names = obj.name;
                    var description = obj.description;
                    var url = obj.url;

                    output += '<li><img src="' + promo + '" onerror="this.src=\'img/img-error-t.png\'"/>';
                    output += '<div class="content-text"><h2>'+ names + '</h2>';
                    output += '<p>' + description + '</p>';
                    output += '<a class="play" href="'+ url +'">' + 'Play' + '</a></div></li>';

                    $('#latest').html(output);
                });
            }
        });
    },

}

//-------------------------------------- Load Carousel Json

function customDataSuccess(data){
    var content = "";
    for(var i in data){

        var obj = data[i];

        var promo = obj.promo.m;
        var names = obj.name;
        var description = obj.description;
        var url = obj.url;

        content += '<div class="item-content"><img src="' + promo + '" onerror="this.src=\'img/img-error.png\'"/>';
        content += '<div class="item-text"><h2>'+ names + '</h2>';
        content += '<p>' + description + '</p></div>';
        content += '<a class="play" href="'+ url +'">' + 'Play now' + '</a>';
        content += '<a class="awards" href="#">' + 'Awards' + '</a>';
        content += '<a class="save" href="#">' + 'save' + '</a></div>';
    }
    $("#carousel").html(content);
}
