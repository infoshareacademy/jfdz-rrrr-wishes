/**
 * Created by martastachecka on 18.06.16.
 */
/*####################  MODAL WINDOW    ################*/
closeModal = function() {
    $('#openModal').hide();
};

openModal = function() {
    $('#openModal').show();
};

/*###############Let the game BEGIN!####################*/

$(document).ready(function(){

    $("a#openGame").on("click", function(){

        $.post("Cupid-death/game.html", function(data){

            $("#myCanvas").html(data).fadeIn();

        });
    });

});


/* smooth przewijanie pomi�dzy sekcjami pomija link do otworzenia okienka modal*/
$(function() {
    $('a[href*=#]:not([href=#]):not([href=#openModal])').click(function() {
        if (location.pathname.replace(/^\//,'') ==this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target =$(this.hash);
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


function sprawdz_formularz(event)
{
    // przypisanie obiektu formularza do zmiennej
    var f = document.forms['formularz'];
    // sprawdzenie imienia
    if (f.nameFirst.value == '')
    {
        f.nameFirst.focus();
        return false;
    }
    // sprawdzenie Email
    if (f.adressFirst.value == '')
    {
        f.adressFirst.focus();
        return false;
    }
    if(!f.remember.checked == true){

        $(function(){
              setTimeout(function(){
                $('.komunikat2').click().fadeIn('slow');
            },300);
            setTimeout(function(){
                $('.komunikat2').click().fadeOut('slow');
            },2500);

        });

        return false;
    }
    else
    {
        $(function(){
                setTimeout(function(){
                $('.komunikat').click().fadeIn('slow');
            },300);
            setTimeout(function(){
                $('.komunikat').click().fadeOut('slow');
            },2500);

        });

        return true;
    }
}

//####################END KOMUNIKAT PO WYSLANIU FORMULARZA END  #####


/* zr�b transprentne menu podczas przewijania*/
document.addEventListener('scroll', function() {
    console.log(window.pageYOffset);
    var header = document.getElementsByClassName('page-section-header')[0];
    if (window.pageYOffset > 0) {
        header.classList.add('small-page-section-header');
    } else {
        header.classList.remove('small-page-section-header');

    }
});

/* zmniejszane menu*/
document.addEventListener('scroll', function() {
    console.log(window.pageYOffset);
    var header = document.getElementsByClassName('page-section-header')[0];
    if (window.pageYOffset >= 636) {
        header.classList.add('smaller-height-navigation');
    } else {
        header.classList.remove('smaller-height-navigation');

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
var v = document.getElementsByTagName("video")[0];

setInterval(function() { // to do choose devtips solutions devtips
    $('#slideshow > div:first')
        .fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow').get(0).play();
}, 10000);

document.addEventListener('scroll', function() {

    console.log(window.pageYOffset, $('#contact').offset().top,$('#contact').height(),$('#contact').position().top,window.innerHeight);

    var header = document.getElementsByClassName('button-back-to-top')[0];
    if (window.pageYOffset == 0) {
        header.classList.add('hide-button');
    }else if(window.pageYOffset + window.innerHeight > $('#contact').position().top ){ // jezeli uzytkownik widzi sekcje contact
        header.classList.add('move-button');

    }
    else {
        header.classList.remove('hide-button');
        header.classList.remove('move-button');

    }
});
//############ Po najechaniu myszka na obrazek w sekcji TEAM ##########
$(document).ready(function() {
     $('.person h3').hover(function() { //kursor wchodzi
        $(this).stop().animate({'opacity': 0.5}, "slow").css({color:'black'});
    },function() { //kursor wychodzi
        $(this).stop().animate({'opacity': 1}, "slow").css({color: ''});
    });
});
//##################### END ####################


