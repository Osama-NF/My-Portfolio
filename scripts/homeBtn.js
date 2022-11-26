$('.home-btn')[0].addEventListener('click', returnHome)
$('header > .name')[0].addEventListener('click', returnHome)

function returnHome() {
    $('.home-btn').fadeOut()
    $('main').attr('data-current-page', 'nav-page')
    
    $('.page').slideUp('default', () => {
        
        $('.page').empty()
        $('.nav-page').slideDown()
    
    })
}