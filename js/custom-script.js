jQuery(document).ready(function () {

    jQuery(".mobile-menu-btn").on('click', function () {
        jQuery("body").toggleClass("mobile-menu-activated");
        jQuery(".menu-area").slideToggle()
    });
    jQuery(".menu-area").on('click', function () {
        jQuery("body").removeClass("mobile-menu-activated");
        jQuery(".menu-area").slideUp()
    });

    jQuery(".menu-area .menu-item-has-children").on('click', function () {
        jQuery(this).children("ul").slideToggle();
        jQuery(this).toggleClass("sub-menu-activated");
        console.log("I am ")
    });
});

