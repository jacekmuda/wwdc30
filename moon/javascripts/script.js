$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('nav').addClass("sticky");
    } else {
        $('nav').removeClass("sticky");
    }
});

$(window).ready(function() {
    $('.unhid').on('click', function(e) {
        $('.hidden').addClass("showmenu");
        $('.unhbut').addClass("switch");
        e.preventDefault();
    });
    $('.hidth').on('click', function(e) {
        $('.hidden').removeClass("showmenu");
        $('.unhbut').removeClass("switch");
        e.preventDefault();
    });
    $('.hidden li').on('click', function(e) {
      setTimeout(function() {
        $('.hidden').removeClass("showmenu").delay( 800 );
        $('.unhbut').removeClass("switch").delay( 800 );
        e.preventDefault();
      }, 500);
    });
});

window.onload = function() {
    var anch_about = document.getElementsByClassName("goabout"),
        anch_portfolio = document.getElementsByClassName("goportfolio"),
        anch_top = document.getElementsByClassName("gotop"),
        anch_articles = document.getElementsByClassName("goarticles"),
        anch_contact = document.getElementsByClassName("gocontact"),
        anch_about_mob = document.getElementsByClassName("goaboutmob"),
        anch_portfolio_mob = document.getElementsByClassName("goportfoliomob"),
        anch_top_mob = document.getElementsByClassName("gotopmob"),
        anch_articles_mob = document.getElementsByClassName("goarticlesmob"),
        anch_contact_mob = document.getElementsByClassName("gocontactmob");

    var anch_offset = 55;
    var anch_ease = Power3.easeIn;
    var anch_time = 1;

    var anch = function(anch_selector, destination) {
        anch_selector[0].onclick = function() {
            TweenLite.to(window, anch_time, {
                scrollTo: {
                    y: destination,
                    offsetY: anch_offset,
                    ease: anch_ease
                }
            });
        }
    };

    anch(anch_about, ".about");
    anch(anch_about_mob, ".about");
    anch(anch_portfolio, ".portfolio");
    anch(anch_portfolio_mob, ".portfolio");
    anch(anch_top, ".top");
    anch(anch_articles, ".articles");
    anch(anch_articles_mob, ".articles");
    anch(anch_contact, ".contact");
    anch(anch_contact_mob, ".contact");

};

$(window).ready(function() {
    var setScrollMagic = function(selector, controller, pxup, tr, delay, offset) {
        var scene = null;
        var effectsDuration = 2;
        if (!isNaN(offset)) {
            offset = 0;
        }

        if (!isNaN(delay)) {
            scene = new ScrollMagic.Scene({
                    triggerElement: selector,
                    offset: offset
                })
                .setTween(selector, 0, {
                    opacity: 0,
                    y: pxup,
                })
                .setTween(selector, effectsDuration, {
                    opacity: 1,
                    y: 0,
                    delay: delay
                })
                .addTo(controller);
        } else {
            scene = new ScrollMagic.Scene({
                    triggerElement: selector,
                    offset: offset
                })
                .setTween(selector, 0, {
                    opacity: 0,
                    y: pxup,
                })
                .setTween(selector, effectsDuration, {
                    opacity: 1,
                    y: 0
                })
                .addTo(controller);
        }
        scene.triggerHook(tr);
    };
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onEnter',
            duration: 0,
        }
    });
    var pxup = "0";
    var tr = "0.8";
    var delays = "0.2";
    setScrollMagic(".about", controller, pxup, tr, delays, 0);
    setScrollMagic(".portfolio", controller, pxup, tr, delays, 0);
    setScrollMagic(".quote", controller, pxup, tr, delays, 0);
    setScrollMagic(".product", controller, pxup, tr, delays, 0);
    setScrollMagic(".articles", controller, pxup, tr, delays, 0);
    setScrollMagic(".contact", controller, pxup, tr, delays, 0);
    setScrollMagic("footer", controller, pxup, 1, delays, 0);


});
