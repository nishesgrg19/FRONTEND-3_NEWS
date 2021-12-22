$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.navbar').addClass('navbar1')
        $('.logo ').css('display', 'block')

    }
    else {
        $('.navbar').removeClass('navbar1')
        $('.logo').css('display', 'none')
    }
})