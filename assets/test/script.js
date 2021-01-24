$(function () {

    // hamburger menu

    $("body").on("click", "#hamburger", function () {
        $(this).css("display", "none");
        $("#close").css("display", "block");
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

    $("body").on("click", "#close", function () {
        $(this).css("display", "none");
        $("#hamburger").css("display", "block");
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

});