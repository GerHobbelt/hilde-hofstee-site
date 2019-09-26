var $nav = {
    init : function() {
        $nav.mobile();
        $nav.desktop();
    },
    mobile : function()
    {
        $('.nav-toggle').on('click', function(){
            $('nav#mobile, body').toggleClass('open');
            $('nav#mobile > a.nav-toggle').toggleClass('fa-bars fa-close');
        });

        $('.subnav-toggle').on('click', function(){
            $(this).next().toggleClass('open');
            $(this).toggleClass('fa-chevron-down fa-chevron-up');
        });
    },
    desktop : function()
    {
        // Get container scroll position
        var fromTop = $(window).scrollTop();

        // Set nav fixed
        if(fromTop > 140){
            $('header.hidden-xs nav').addClass('fixed')
            $('header.hidden-xs').css('padding-bottom', '70px');
        }

        $(window).scroll(function(){
            var fromTop = $(window).scrollTop();
            // Set nav fixed
            if(fromTop > 140){
                $('header.hidden-xs nav').addClass('fixed');
                $('header.hidden-xs').addClass('row');
                $('header.hidden-xs').css('padding-bottom', '70px');
            } else {
                $('header.hidden-xs nav').removeClass('fixed');
                $('header.hidden-xs').removeClass('row');
                $('header.hidden-xs').css('padding-bottom', '0');
            }
        });
    }
};

jQuery(document).ready(function(){
    $nav.init();
});