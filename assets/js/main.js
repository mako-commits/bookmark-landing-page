$(function () {

    // hamburger menu

    $("body").on("click", "#hamburger-icon", function () {
        $(this).css("display", "none");
        $("#close-icon").css("display", "block");
        $("#logo circle").css("fill", "white");
        $("#logo path:first").css("fill", "white");
        $("#logo path:last").css("fill", "#242A45");
        $("header").css({
            background: "hsla(229, 31%, 21%, .95)",
            height: "85px",
            marginBottom: "5.5rem"
        });

        $("nav").css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
        });
    });

    $("body").on("click", "#close-icon", function () {
        $(this).css("display", "none");
        $("#hamburger-icon").css("display", "block");
        $("#logo path:last").css({
            "fill": "white"
        });
        $("#logo path:first").css("fill", "#242A45");
        $("#logo circle").css("fill", "#5267DF");

        $("nav").css("display", "none");
        $("header").css({
            background: "none",
            height: "initial",
            marginBottom: "3.5rem"
        });
    });
    // accordion

    $("body").on("click", ".accordion__item", function (e) {
        $(e.target).children(".accordion__answer").slideToggle();
        $(e.target).children().children("svg").toggleClass("rotate");
        $(e.target).children().children("svg").children("path").toggleClass("rotated-color");

        $(".accordion__item").not(e.target).children(".accordion__answer").css("display", "none");
        $(".accordion__item").not(e.target).children().children("svg").removeClass("rotate");
        $(".accordion__item").not(e.target).children().children("svg").children("path").removeClass("rotated-color");
    });

    // email verification

    $("body").on("click", "button", function (e) {
        e.preventDefault();
        let email = $("#email").val();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email == "") {
            $("#error-icon").css("display", "inline");
            $("#error-alert").css("display", "block").text("Please enter your email address");
            $("#email").parent().css("padding", ".2rem");
        } else if (re.test(String(email).toLowerCase()) == false) {
            $("#email").parent().css("padding", ".2rem");
            $("#error-icon").css("display", "inline");
            $("#error-alert").css("display", "block");
        };
    });

});

