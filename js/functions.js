"use strict";

var _body = $('body');

//-------------------------------------------------- my application: revealing module pattern

var myApplication = function() {

    var name = 'Chris',
        age = '34',
        status = 'single';

    function getMemberDetails (){
        console.log(name, age);
    }

    return {
        get:getMemberDetails
    }

}();

//myApplication.get();

//-------------------------------------------------- Anonymous Object Literal return

var Module = (function () {
  
    var privateMethod = function () {
        console.log("private");
    };

    return {

        publicMethod: function () {
            privateMethod();
            console.log("test");
        }

    };

})();

//Module.publicMethod();

//-------------------------------------------------- Anonymous Object Literal return

var myObjLiteral = {

    defaults: { 
        name: 'Todd'
    },

    someMethod: function () {
        console.log(this.defaults.name);
    }

};


//myObjLiteral.someMethod();





//-------------------------------------- navigation

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

//-------------------------------------- mainnavigation

var addMainDataClassToBody = {

    init: function(settings) {
        this.config = {
            items: $('[data-nav]')
        };
        // allow overriding the default config
        $.extend(this.config, settings);
        this.setup();
    },

    setup: function() {
        this.config.items.on('click', this.toggleClassName);
    },

    toggleClassName: function(e) {
        _body.fadeOut();
        _body.addClass($(this).data('nav'));
    }

};


//-------------------------------------- sticky header

var stickyHeader = {

    init: function(settings) {
        this.config = {
            scrollPos: $('#intro').height(),
            winTop: $(window).scrollTop(),
            stickyClass: 'stick',
            //scroll after nav
            scrollHeaderPos: $('#intro').height() / 4,
            headerClass: 'navScroll'
        };
        // allow overriding the default config
        $.extend(this.config, settings);
        this.setup();
    },

    setup: function() {
        (this.config.winTop >= this.config.scrollPos) ? _body.addClass(this.config.stickyClass) : _body.removeClass(this.config.stickyClass);
        (this.config.winTop >= this.config.scrollHeaderPos) ? _body.addClass(this.config.headerClass) : _body.removeClass(this.config.headerClass);
    } 
};

//-------------------------------------- sticky header
