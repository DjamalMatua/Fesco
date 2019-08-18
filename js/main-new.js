jQuery(document).ready(function ($) {

    'use strict';


    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {

                duration: 8000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });

    });

    //1-st step to online shopping
//    $("#submit-1").on('click', function () {
//        $(".card-2").show('slow');
//        $(".form-1").hide('slow');
//    });
//    $("#submit-2").on('click', function () {
//        $(".card-3").show('slow');
//        $(".form-2").hide('slow');
//    });
//
//    $(".step-1").on('click', function () {
//        $(".card-2,.card-3").fadeOut("fast");
//        $(".form-1").slideDown("slow");
//    });
//    $(".step-2").on('click', function () {
//        $(".card-3").fadeOut("fast");
//        $(".form-2").slideDown("slow");
//    });
    ////////////////////////////////////////

    $(".image-control").on("click", function () {
        $("#main-artfact").slideDown('slow');

    });

    $('#cross-close').on('click', function () {
        $('#main-artfact').slideUp('slow');
    });

    //LOGIN

    $(function(){
    $(".dropdown").hover(
      function() {
        $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
        $(this).toggleClass('open');
      },
      function() {
        $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
        $(this).toggleClass('open');
      });
    });

    $(document).ready(function(){

      $('.user-hidden-icon').click(function(){
        window.open('login-small-devices.html');
        return false;
      });
    });

    //ADMINISTRATION SECTIONS RULES


    $(".all").click(function () {
        $(".section1").fadeIn('slow');
    });

    $(".add").click(function () {
        $(".section1").slideUp(300);
        $("#add").slideDown('slow');

    });

    $(".bio").click(function () {
        $(".section1").slideUp(300);
        $("#biography-info").slideDown('slow');

    });

    $(".exhb").click(function () {
        $(".section1").slideUp(300);
        $("#exhibition-info").slideDown('slow');

    });

    $(".slide").click(function () {
        $(".section1").slideUp(300);
        $("#slide").slideDown('slow');

    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("active");
        }
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("logo");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("logo");
        }
    });



    /************** Mixitup (Filter Projects) *********************/
    $('.projects-holder').mixitup({
        effects: ['fade', 'grayscale'],
        easing: 'snap',
        transitionSpeed: 400
    });

});
