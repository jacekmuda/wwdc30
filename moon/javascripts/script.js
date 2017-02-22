$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('nav').addClass("sticky");
  }
  else{
    $('nav').removeClass("sticky");
  }
});

window.onload = function(){
var anch_about = document.getElementsByClassName("goabout"),
    anch_portfolio = document.getElementsByClassName("goportfolio"),
    anch_top = document.getElementsByClassName("gotop"),
    anch_articles = document.getElementsByClassName("goarticles"),
    anch_contact = document.getElementsByClassName("gocontact");
var anch_offset = 55;
var anch_ease = Power3.easeIn;
    anch_about[0].onclick = function() {
      TweenLite.to(window, 1, {scrollTo:{y:".about", offsetY: anch_offset, ease: anch_ease }});
    }
    anch_portfolio[0].onclick = function() {
      TweenLite.to(window, 1, {scrollTo:{y:".portfolio", offsetY: anch_offset, ease: anch_ease }});
    }
    anch_top[0].onclick = function() {
      TweenLite.to(window, 1, {scrollTo:{y:".top", offsetY: anch_offset, ease: anch_ease }});
    }
    anch_articles[0].onclick = function() {
      TweenLite.to(window, 1, {scrollTo:{y:".articles", offsetY: anch_offset, ease: anch_ease}});
    }
    anch_contact[0].onclick = function() {
      TweenLite.to(window, 1, {scrollTo:{y:".contact", offsetY: anch_offset, ease: anch_ease}});
    }};
