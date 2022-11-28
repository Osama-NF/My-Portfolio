$('.nav-btn').each(function(){
    this.addEventListener('click', loadPage)
})
    

function loadPage(e) {

    // for phone users: hide the nav buttons, and show the page
    if ($(window).width() < 769) {
        $('.nav-btns').slideUp('fast', function(){
            $('.page').slideDown()
        })
    }
    
    // get the needed page refrence
    let lang = $('html').attr('lang')
    let page = e.target.getAttribute('data-page')
    if (!page) page = e.target.parentElement.getAttribute('data-page')
    let href = `../pages/${lang}-${page}.html`
    
    // make sure the container & intro are hidden, or hide it if it was shown
    $('.intro').hide()
    $('.container').slideUp('slow', function() {
        
        // changing the current page & showing the home button
        $('main').attr('data-current-page', page)
        $('.container').empty().load(href).fadeIn()
        $('.home-btn').fadeIn()
    })
}