$(document).ready(function () {
    $('#usecases').click(function () {
        $('#cases').slideToggle(300);
    });
    $('#span').click(function () {
        $('#fadeout').toggle(200);
        $('#rotate45').toggleClass('rotate45');
        $('#rotate-45').toggleClass('rotate-45');
        $('#lap').slideToggle(300);
        $('#cases').hide();
    });
});
