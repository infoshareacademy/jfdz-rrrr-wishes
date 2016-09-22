/**
 * Created by martastachecka on 18.06.16.
 */
/*####################  MODEL WINDOW    ################*/
closeModal = function() {
    $('#openModal').hide();
};

openModal = function() {
    $('#openModal').show();
};

/*####################  MODEL GAME    ################*/
//
// closeGame = function () {
//     $('#openGame').hide();
// };
//
// openGame = function () {
//     $('#openGame').show();
// };
// /*####################  GAME    ################*/
//
// //maksymalne i minimalne wymiary boksu
//     var boxMaxWidth = boxMaxHeight = 50;
//     var boxMinWidth = boxMinHeight = 50;
//
// // tablica z dostępnymi kolorami dla boksu
//     var boxBackgrounds = ["green", "red", "blue", "black", "pink"];
//
// //tablica skupiająca wszystkie boksy
//     var boxContainer = [];
//
// //początkowa liczba boksów
//     var boxStartingCount = 5;
//
// // maksymalna liczba boksów losowana po “ustrzeleniu” któregoś z nich
//     var boxAdditionalMaxCount = 1;
//
// //odnośnik do funkcji moveBox, uruchamianej cyklicznie
//     var boxMovement;
//
// // liczba pikseli w ruchu poziomym i pionowym
//     var boxMovementHorizontal = boxMovementVertical = 10;
//
// //obiekt, przechowujący pozycje pola gry
//     var areaPosition = {};
//
// //obiekt, przechowujący wymiary pola gry
//     var areaSize = {};
//
// //odnośnik do funkcji executeTimer, wywoływanej cyklicznie
//     var gameTimer;
// //true/false, informuje, czy gra działa, czy jest skończona
//     var gameOver = false;
//
// //tworzy i elementów (boksów) w obszarze #area.
// function createBoxes(i)
// {
//
//     for (var x = 0;x < parseInt(i); x++)
//     {
//         var div = $("<div></div>");
//
//         var sizes = setBoxRandomSize(div);
//         setBoxRandomPosition(div);
//         setBoxRandomBackground(div);
//
//         var date = new Date();
//         var id = new String(""+sizes.height+""+date.getTime()+"");
//
//         div.attr("id", id);
//
//         boxContainer[id] = [];
//
//         var arrow = Math.floor(2*Math.random())+1;
//         boxContainer[id]['x'] = 'right';
//
//         if (arrow == 1)
//         {
//             boxContainer[id]['x'] = 'left';
//         }
//
//         var arrow = Math.floor(2*Math.random())+1;
//
//         boxContainer[id]['y'] = 'bottom';
//         if (arrow == 1)
//         {
//             boxContainer[id]['y'] = 'top';
//         }
//
//         boxContainer[id]['w'] = sizes.width;
//         boxContainer[id]['h'] = sizes.height;
//
//
//         div.click(function(e)
//         {
//             if (!gameOver)
//             {
//                 $(this).hide("slow", function()
//                 {
//                     $(this).remove();
//                     $("#result").text(parseInt($("#result").text())+1);
//                     createBoxes(Math.floor(boxAdditionalMaxCount*Math.random())+1);
//                 });
//             }
//         });
//
//         $("#area").append(div);
//
//     }
// }
// //losuje wartości height i width dla obiektu DOM jQuery obj. Zwraca wylosowane liczby.
// function setBoxRandomSize(obj)
// {
//     var height = Math.floor((boxMaxHeight-boxMinHeight+1)*Math.random())+boxMinHeight;
//     var width = Math.floor((boxMaxWidth-boxMinWidth+1)*Math.random())+boxMinWidth;
//
//     obj.css({"height": height, "width": width});
//
//     return {"height": height, "width": width};
// }
// // losuje pozycje boksu (obiekt DOM jQuery) i zwraca uzyskane wartości.
// function setBoxRandomPosition(obj)
// {
//
//     var left = Math.floor((areaSize.w-parseInt(obj.css("width")))*Math.random())+areaPosition.left;
//     var top = Math.floor((areaSize.h-parseInt(obj.css("height")))*Math.random())+areaPosition.top;
//
//     obj.css({"position": "absolute", "left": left +"px", "top": top +"px"});
// }
// //losuje kolor tła dla obiektu DOM jQuery obj.
// function setBoxRandomBackground(obj)
// {
//     var background = Math.floor(Math.random()*boxBackgrounds.length);
//     obj.css("background-color", boxBackgrounds[background]);
// }
// //odpowiada za licznik czasu gry.
// function executeTimer()
// {
//     var time = parseInt($("#time").text());
//
//     if (time-1 > -1)
//     {
//         $("#time").text(time-1);
//         return false;
//     }
//
//     window.clearInterval(gameTimer);
//     window.clearInterval(boxMovement);
//     gameOver = true;
//
// }
// //wprawia w ruch każdy z elementów.
// function moveBoxes()
// {
//     for (k in boxContainer)
//     {
//         var top = parseInt($("#"+k).css("top"));
//         var left = parseInt($("#"+k).css("left"));
//
//         if (boxContainer[k]['y'] == 'top')
//         {
//             var top = top-boxMovementVertical;
//         }
//         else
//         {
//             var top = top+boxMovementVertical;
//         }
//         if (boxContainer[k]['x'] == 'left')
//         {
//             var left = left-boxMovementHorizontal;
//         }
//         else
//         {
//             var left = left+boxMovementHorizontal;
//         }
//
//         if (left <= areaPosition.left)
//         {
//             boxContainer[k]['x'] = 'right';
//             var left = areaPosition.left;
//         }
//         if (left+boxContainer[k]['w'] >= areaPosition.left+areaSize.w)
//         {
//             boxContainer[k]['x'] = 'left';
//             var left = areaPosition.left+areaSize.w-boxContainer[k]['w'];
//         }
//
//         if (top < areaPosition.top)
//         {
//             boxContainer[k]['y'] = 'bottom';
//             var top = 0;
//         }
//         if (top+boxContainer[k]['h'] >= areaSize.h+areaPosition.top)
//         {
//             boxContainer[k]['y'] = 'top';
//             var top = areaPosition.top+areaSize.h-boxContainer[k]['h'];
//         }
//
//
//         $("#"+k).css({"left": left, "top": top});
//     }
//
// }
// $().ready(function()
// {
//     areaPosition = $("#area").position();
//     areaSize.w = $("#area").width();
//     areaSize.h = $("#area").height();
//
//     createBoxes(boxStartingCount);
//
//     boxMovement = window.setInterval("moveBoxes()", 200);
//     gameTimer = window.setInterval("executeTimer()", 1000);
//
// });
// ######################   END GAME    #######################################




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
//####################KOMUNIKAT PO WYSLANIU FORMULARZA###########################
function sprawdz_formularz()
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

            $('.komunikat2').hide();

            setTimeout(function(){
                $('.komunikat2').click().fadeIn('slow');
            },1000);
            setTimeout(function(){
                $('.komunikat2').click().fadeOut('slow');
            },5000);

        });
        event.preventDefault();
        return false;
    }
    else
    {
        $(function(){

            $('.komunikat').hide();

            setTimeout(function(){
                $('.komunikat').click().fadeIn('slow');
            },1000);
            setTimeout(function(){
                $('.komunikat').click().fadeOut('slow');
            },5000);

        });
        event.preventDefault();

        return true;
    }
    return true;
}

//####################END KOMUNIKAT PO WYSLANIU FORMULARZA END  #####


/* zr�b transprentne menu podczas przewijania*/
document.addEventListener('scroll', function() {
    console.log(window.pageYOffset);
    var header = document.getElementsByClassName('page-section-header')[0];
    if (window.pageYOffset ==0) {
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
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    v.play();
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
    // $('.person h3').css('opacity', 1);
    // $('.person h3').css('cursor', 'pointer');

    $('.person h3').hover(function() { //kursor wchodzi
        $(this).stop().animate({'opacity': 0.5}, "slow").css({color:'black'});
    },function() { //kursor wychodzi
        $(this).stop().animate({'opacity': 1}, "slow").css({color: ''});
    });
});
//##################### END ####################