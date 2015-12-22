/*Short lang script*/
var ddLngBtn = $('.lang_choose_box__lng_btn_box'),
    ddLiEasy = $('.lng_btn_box__dd_menu li'),
    needHight = 200;


$(window).on('click', function (e) {

    var clsstUlfrTarget = $('.lng_btn_box__dd_menu'),
        target = $(e.target);

    if (!target.closest(ddLngBtn).length) {
        $(clsstUlfrTarget).slideUp();
        if ($('.forAdHight').length) {

            $('.text_form__left_side').animate({
                height: 197
            });
        }
        $('.text_form__left_side').removeClass('forAdHight');


    }

});

ddLngBtn.on('click', function () {
    var clsstUl = $(this).find('.lng_btn_box__dd_menu'),
        form = $(this).closest('.text_form__left_side'),
        formHeight = form.height();
    clsstUl.stop().slideToggle();


    form.toggleClass('forAdHight');
    $('.forAdHight').animate({
        height: formHeight + needHight
    });

    if (!$('.forAdHight').length) {

        $('.text_form__left_side').animate({
            height: 197
        });
    }
});


ddLiEasy.on('click', function () {
    var newTitle = $(this).find('.dd_menu__lng_title').text();
    $(this).parent().parent().find('.lng_btn_box__current_lang_title_span').first().text(newTitle);
});



/*Complex lang script*/
var ddButtons = $('.trnsl_choose_box .current_lang_title_span'),
    ddBoxButton = $('.current_lang_title'),
    dirChanger = $('.trnsl_choose_box .dir_changer'),
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
    var btns = $(this).parent().find('.current_lang_title .current_lang_title_span'),
        btnOne= btns[0],
        btnTwo= btns[1],
        textOfBtnFirst = $(btns[0]).text(),
        textOfBtnSec = $(btns[1]).text();
    console.log(btns)

    $(btnOne).text(textOfBtnSec);
    $(btnTwo).text(textOfBtnFirst);

});