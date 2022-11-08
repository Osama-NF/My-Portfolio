const langBtn = $('.lang-btn')[0]

langBtn.addEventListener('click', () => {

    let lang = $('html').attr('lang');

    if (lang == 'ar') {

        $('html').attr('lang', 'en')
        $('html').attr('dir', 'ltr')

        $('.ar-display').hide()
        $('.en-display').show()

    } else {

        $('html').attr('lang', 'ar')
        $('html').attr('dir', 'rtl')

        $('.ar-display').show()
        $('.en-display').hide()

    }

    switchContent(lang)

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
    $('.page').load(href)
}

// should also keep the change in local memory