(function() {
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".navbar-right").style.flexDirection = "row-reverse";
            document.getElementById("logo").style.width = "100px";
            document.querySelector(".navbar").style.padding = "0px 10px";
        } else {
            document.querySelector(".navbar-right").style.flexDirection = "column";
            document.getElementById("logo").style.width = "auto";
            document.querySelector(".navbar").style.padding = "10px 10px";
        }
    }
    var icon = document.querySelector(".icon");
    var popup_mob_menu = document.querySelector(".leftmenu");
    var close = document.querySelector(".closebtn");

    icon.addEventListener("click", function(event) {
        event.preventDefault();
        popup_mob_menu.classList.toggle("mob_nav-show");
    });

    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup_mob_menu.classList.remove("mob_nav-show");
    });

    $(document).ready(function() {
        $(".navbar-wrap a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
    });

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
    $(window).scroll(function() {
        $(".slidefadeInRight").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    $(window).scroll(function() {
        $(".slidefadeInLeft").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $("#telephone").intlTelInput({
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            jQuery.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },
        utilsScript: "../libr/intl-tel-input-master/build/js/utils.js"
    });
})();