$(function() {
    "use strict";

    $(window).on("load", function() {

        /* ----------------------------------------------------------- */
        /*  PRELOADER ANIMATION                                        */
        /* ----------------------------------------------------------- */

        var pageTransitionAnimationDuration = 500
        var preloader = $(".preloader");
        pageTransition({
            target: document.querySelector('.page'),
            delay: 0,
            duration: pageTransitionAnimationDuration,
            classActive: 'animated',
            conditions: function(event, link) {
                return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(link) &&
                    !event.currentTarget.hasAttribute('data-lightgallery') &&
                    event.currentTarget.getAttribute('href') !== 'javascript:void(0);';
            },
            onTransitionStart: function(options) {
                setTimeout(function() {
                    preloader.removeClass('loaded');
                }, options.duration * .75);
            },
            onReady: function() {
                preloader.addClass('loaded');
            }
        });

        /* ----------------------------------------------------------- */
        /*  TEXT ROTATOR ANIMATION                                     */
        /* ----------------------------------------------------------- */
        if ($("#selector").length) {
            $("#selector").animatedHeadline({
                animationType: "clip"
            });
        }

    });


    /* ----------------------------------------------------------- */
    /*  Manubar toggle                                             */
    /* ----------------------------------------------------------- */
    $(".profile_menu > ul > li .link").on("click", function() {
        $(".profile_menu > ul > li .link").removeClass("active");
    });
    //For Home
    $(".profile_menu > ul > li .link.home").on("click", function() {
        $(".profile_menu > ul > li .home").addClass("active");
    });
    //For about
    $(".profile_menu > ul > li .link.about").on("click", function() {
        $(".profile_menu > ul > li .about").addClass("active");
    });
    //For protfolio
    $(".profile_menu > ul > li .link.protfolio").on("click", function() {
        $(".profile_menu > ul > li .protfolio").addClass("active");
    });
    //For contact
    $(".profile_menu > ul > li .link.contact").on("click", function() {
        $(".profile_menu > ul > li .contact").addClass("active");

    });

    /* ----------------------------------------------------------- */
    /*  Section toggle                                             */
    /* ----------------------------------------------------------- */

    $(".profile_menu > ul > li .link").on("click", function() {
        $("section").removeClass("active");
    });
    //For Home
    $(".profile_menu > ul > li .link.home").on("click", function() {
        $("section.home").addClass("active");
    });
    //For about
    $(".profile_menu > ul > li .link.about").on("click", function() {
        $("section.about").addClass("active");
    });
    //For protfolio
    $(".profile_menu > ul > li .link.protfolio").on("click", function() {
        $("section.my_portfolio").addClass("active");
    });
    //For contact
    $(".profile_menu > ul > li .link.contact").on("click", function() {
        $("section.Contact_me").addClass("active");
    });
    $(".contact.link").on("click", function() {
        $("section").removeClass("active");
    });
    $(".contact.link").on("click", function() {
        $("section.Contact_me").addClass("active");
    });


    //Mobile menu
    $(".profile_menu > ul > li .link").on("click", function() {
        $(".collapse.show").removeClass("show");
    });

});