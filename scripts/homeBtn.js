$('.home-btn')[0].addEventListener('click', returnHome)
$('header > .name')[0].addEventListener('click', returnHome)

function returnHome() {


    $('.home-btn').fadeOut()
    $('main').attr('data-current-page', 'nav-page')
    
    $('.container').slideUp('default', () => {
        
        $('.container').empty()
        $('.nav-btns').slideDown()
        $('.intro').show()

        // for phone screens, hide the page
        if ($(window).width() <= 769) {
            $('.page').hide()
        }
    })
}