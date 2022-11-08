const langBtn = $('.lang-btn')[0]

langBtn.addEventListener('click', () => {

    let lang = $('html').attr('lang');
    $('.page').fadeOut()

    if (lang == 'ar') {

        
        $('.ar-display').fadeOut('default',()=>{
            $('html').attr('lang', 'en')
            $('html').attr('dir', 'ltr')
            switchContent(lang)
            $('.en-display').fadeIn()
        })

    } else {

        
        $('.en-display').fadeOut('default', () => {
            $('html').attr('lang', 'ar')
            $('html').attr('dir', 'rtl')
            switchContent(lang)
            $('.ar-display').fadeIn()
        })

    }


})

function switchContent(lang) {
    let currentPage = $('main').attr('data-current-page');
    if (currentPage == 'nav-page') return

    switch(lang) {

        case 'ar':
            lang = 'en'
            break

        case 'en':
            lang = 'ar'
            break
    }

    let href = `../pages/${lang}-${currentPage}.html`
    $('.page').empty().load(href).fadeIn('slow')
}

// should also keep the change in local memory