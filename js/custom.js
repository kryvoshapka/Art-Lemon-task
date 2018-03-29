$(window).ready(function() {

    setTimeout(function () {
        $(".fullpage").animate({opacity: 1}, 500);
    }, 200);

    $('.burger').click(function () {
        $(this).toggleClass('fa-close fa-bars');
        $('.navigation-block').toggleClass('active');
    });

    if($(window).width() <= 900) {
        $('.burger').appendTo('.header');
    }

    if($(window).width() <= 500) {
        $('.burger').appendTo('.fullpage');
    }


    $('.fullpage').fullpage({
        sectionsColor: ['#fff7e5', '#e3fdff', '#ece7ff"', '#ffe9e6', "#f0f0f0"],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        slidesNavigation: true
    });


})
