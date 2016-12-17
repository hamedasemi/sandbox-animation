$(document).ready(function () {
    // Get navigations buttons click
    $("nav a").click(function () {
        // Make the clicked button active and others deactive
        $(this).addClass("active").siblings().removeClass("active");
        // Methods object
        var methods = {
            swing: ".34,-0.21,0,1.37",
            linear: "1,1,0,0",
            ease: ".36,.16,.06,.74",
            run: ".4,1.28,1,-0.76",
            forced: ".02,-0.77,.85,1.51",
            bonus: ".53,1.72,.2,.87",
            hesitant: ".07,.5,.87,-0.15"
        };
        // Speed object
        var speed = {
            slow: "1.2s",
            normal: ".7s",
            fast: ".4s"
        };
        // Apply CSS animation style, direction, timing methods and duration class to the section
        $("section").removeClass().addClass($("menu#animation a.active").text() + $(this).text())
        .css({
            "-webkit-animation-timing-function": "cubic-bezier(" + methods[$("menu#method a.active").text()],
            "animation-timing-function": "cubic-bezier(" + methods[$("menu#method a.active").text()],

            "animation-duration": speed[$("menu#speed a.active").text()],
            "-webkit-animation-duration": speed[$("menu#speed a.active").text()]
        })
        .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
            // On CSS animation ends remove animation classes
            $(this).removeClass().parent().removeClass();
        });
    });
    // Get every menu click and make them active in radio buttons style
    $("menu a").click(function () {
        $(this).toggleClass("active").siblings().removeClass("active");
    });
});