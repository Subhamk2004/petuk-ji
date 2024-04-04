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


    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var form = document.getElementById("myForm");
        var formData = new FormData(form);

        fetch("https://script.google.com/macros/s/AKfycbz2mFhmcO4Zs3aNzdfmN2mW3s1UwMGRfz5Tzl8nRDem1bJsNVfczuNavzjFDlyiMfVL/exec", {
            method: "POST",
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    document.getElementById("myForm").reset();
                    document.getElementById("successMessage").style.display = "block";
                } else {
                    throw new Error("Form submission failed");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
    let width = window.innerWidth;
    if (width <= 500) {
        document.getElementById("fr_mobile_link").setAttribute("href", "https://wa.me/911171279904?text=Regarding%20Franchise%20request")
    }
});
function show_ans(event) {

    var $faqDiv = $(event.target).closest('.faq_div');
    var $button = $(event.target).closest('.reveal_ans');
    if ($button.find('p').html() === '+') {

        $faqDiv.css({
            backgroundColor:"orange",
            fontWeight:"600"
        });
        $button.find('p').html('-');

        $faqDiv.find('.faqs').css({
            display:"none"
        });

        $faqDiv.find('.ans').css({
            display:"flex",
            margin:"10px",
            width:"90%",
            textAlign:"justify"
        });
    }
    else{
        $faqDiv.css({
            backgroundColor:"rgb(241, 241, 241)",
            fontWeight:"400"
        });

        $faqDiv.find('.ans').css({
            display:"none",
            margin:"0"
        });

        $faqDiv.find('.faqs').css({
            display:"flex"
        });
        $button.find('p').html('+');
    }


}
