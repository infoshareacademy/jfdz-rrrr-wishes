/**
 * Created by martastachecka on 18.06.16.
 */

closeModal = function() {
    $('#openModal').hide();
};

openModal = function() {
    $('#openModal').show();
};
/* smooth przewijanie pomiêdzy sekcjami pomija link do otworzenia okienka modal*/
$(function() {
    $('a[href*=#]:not([href=#]):not([href=#openModal])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
/* zrób transprentne menu podczas przewijania*/
document.addEventListener('scroll', function() {

    console.log(window.pageYOffset);

    var header = document.getElementsByClassName('page-section-header')[0];
    if (window.pageYOffset == 0) {
        header.classList.add('nowaKlasa');
    } else {
        header.classList.remove('nowaKlasa');

    }
});
/*

//prÃ³bna funkcja

$().ready(function() {
    var sName = "cookiesok";
    $("#close-cookie-warn").click(function(){
        var oExpire = new Date();
        oExpire.setTime((new Date()).getTime() + 3600000*24*365);
        document.cookie = sName + "=1;expires=" + oExpire;
        $("#cookie-warn").hide("slow");
    });

    var sStr = '; '+ document.cookie +';';
    var nIndex = sStr.indexOf('; '+ escape(sName) +'=');
    if (nIndex === -1) {
        $("#cookie-warn").show();
    }
});
*/
/* ³adowanie contentu z pomoc¹ fade*///TO DO
$(window).on("load",function() {
    $(window).scroll(function() {
        $(".fade").each(function() {
            /* Check the location of each desired element */
var objectBottom = $(this).offset().top + $(this).outerHeight();
var windowBottom = $(window).scrollTop() + $(window).innerHeight();

/* If the element is completely within bounds of the window, fade it in */
if (objectBottom < windowBottom) { //object comes into view (scrolling down)
    if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
} else { //object goes out of view (scrolling up)
    if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
}
});
}); $(window).scroll(); //invoke scroll-handler on page-load
});
//remove fade class from sections if I don't want to use it.
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
},  20000);