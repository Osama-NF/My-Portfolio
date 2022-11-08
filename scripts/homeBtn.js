$('.home-btn')[0].addEventListener('click', () => {
    
    $('.home-btn').fadeOut()
    $('main').attr('data-current-page', 'nav-page')
    
    $('.page').slideUp('default', () => {
        
        $('.page').empty()
        $('.nav-page').slideDown()
    
    })

})