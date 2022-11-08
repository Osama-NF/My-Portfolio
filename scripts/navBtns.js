const navBtns = $('.nav-btn')

Array.from(navBtns).forEach(btn => {
    btn.addEventListener('click', e => {
        
        let lang = $('html').attr('lang')
        let page = e.target.getAttribute('data-page')
        if (!page) page = e.target.parentElement.getAttribute('data-page')
        
        $('main').attr('data-current-page', page)
        $('.page').load(`../pages/${lang}-${page}.html`).promise().done(()=>{
            $('.page').fadeIn(1000)
        });

        $('.nav-page').slideUp()
        $('.home-btn').fadeIn()
    })
})
