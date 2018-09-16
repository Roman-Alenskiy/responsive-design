$('document').ready(function($) {
    var navFirst = $(".navbar-first");
    var headerLogo = $(".header-logo");
    var header = $('header');
    var main = $('main')

    $(window).scroll(function () {
        if ($(this).scrollTop() > 33) {
            header.addClass("header-fixed");
            main.css("padding-top", "4.625rem")
            navFirst.css("display", "none");
            headerLogo.css("padding", "12px 15px 0");
            headerLogo.css("display", "block")
        } else {
            header.removeClass("header-fixed");
            main.removeAttr("style")
            navFirst.removeAttr("style");
            headerLogo.removeAttr("style")
        }
    });
})