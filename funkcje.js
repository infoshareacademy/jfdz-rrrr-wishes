/**
 * Created by martastachecka on 18.06.16.
 */

closeModal = function() {
    $('#openModal').hide();
};

openModal = function() {
    $('#openModal').show();
};
/* smooth przewijanie pomi�dzy sekcjami pomija link do otworzenia okienka modal*/
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
/* zr�b transprentne menu podczas przewijania*/
document.addEventListener('scroll', function() {

    console.log(window.pageYOffset);

    var header = document.getElementsByClassName('page-section-header')[0];
    if (window.pageYOffset == 0) {
        header.classList.add('nowaKlasa');
    } else {
        header.classList.remove('nowaKlasa');

    }
});


//próbna funkcja

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

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
},  20000);

document.addEventListener('scroll', function() {

    console.log(window.pageYOffset);

    var header = document.getElementsByClassName('button-back-to-top')[0];
    if (window.pageYOffset == 0) {
        header.classList.add('hide-button');
    } else {
        header.classList.remove('hide-button');

    }
});