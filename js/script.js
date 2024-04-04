$(document).ready(function () {

    if ($(window).width() > 950) {
        $(".menu_container").hide(0);
    }

    $(".menu_container").hide(0);
    var open = Number(0);
    $(".menu_icon").click(function () {
        $(".menu_container").slideDown(500);
        open++;
        if (open === 2) {
            $(".menu_container").slideUp(500);
            open = 0;
        }
    });
    let width = window.innerWidth;
    if (width <= 500) {
        document.getElementById("fr_mobile_link").setAttribute("href", "https://wa.me/911171279904?text=Regarding%20Franchise%20request");
        document.getElementById("pp_mobile_link").setAttribute("href", "https://wa.me/911171279904?text=Regarding%20Purusarth%20Program");
    }
});