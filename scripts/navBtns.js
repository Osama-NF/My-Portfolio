const navBtns = $('.nav-btn')

Array.from(navBtns).forEach(btn => {
    btn.addEventListener('click', e => {
        
        let lang = $('html').attr('lang')
        let page = e.target.getAttribute('data-page')
        if (!page) page = e.target.parentElement.getAttribute('data-page')
        
        $('main').attr('data-current-page', page)
        $('.page').load(`../pages/${lang}-${page}.html`)

        $('.nav-page').slideUp()
        $('.page').show()
        $('.home-btn').fadeIn()
    })
})
