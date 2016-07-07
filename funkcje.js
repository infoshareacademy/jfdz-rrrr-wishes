/**
 * Created by martastachecka on 18.06.16.
 */

closeModal = function() {
    $('#openModal').hide();
};

openModal = function() {
    $('#openModal').show();
};

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
window.addEventListener('scroll', function() {
    var header = document.getElementById('page-section-header');
    if (window.pageYOffset == 0) {
        header.classList.remove('sticked');
    } else {
        header.classList.add('sticked');
    }
});