var ddButtons = $('.current_lang_title_span'),
    ddBoxButton = $('.current_lang_title'),
    dirChanger = $('.dir_changer'),
    ddUl = $('.current_lang_title__dd_menu'),
    ddLi = $('.current_lang_title__dd_menu li');


$(window).on('click', function (e) {

    var target = $(e.target);
    if (!target.closest(ddBoxButton).length)
        $(ddUl).slideUp();
});

ddButtons.on('click', function () {
    var currentUl = $(this).parent().find(ddUl);
    $(ddUl).slideUp();
    currentUl.stop().slideToggle();
});

ddLi.on('click', function () {
    var newTitle = $(this).find('.dd_menu__lng_title').text();
    $(this).parent().parent().find('span').first().text(newTitle);
});


dirChanger.on('click', function () {
    var textOfBtnFirst = $(ddButtons[0]).text(),
        textOfBtnSec = $(ddButtons[1]).text();

    $(ddButtons[0]).text(textOfBtnSec);
    $(ddButtons[1]).text(textOfBtnFirst);


});