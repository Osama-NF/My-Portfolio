const langBtn = $('.lang-btn')[0]

langBtn.addEventListener('click', () => {

    let lang = $('html').attr('lang');

    if (lang == 'ar') {

        $('html').attr('lang', 'en')
        $('html').attr('dir', 'ltr')

        let arabicElements = Array.from($('.ar-display')); 
        arabicElements.forEach(element => {
            element.classList.add('d-none')
        });

        let englishElements = Array.from($('.en-display')); 
        englishElements.forEach(element => {
            element.classList.remove('d-none')
        });

    } else {

        $('html').attr('lang', 'ar')
        $('html').attr('dir', 'rtl')

        let englishElements = Array.from($('.en-display')); 
        englishElements.forEach(element => {
            element.classList.add('d-none')
        });

        let arabicElements = Array.from($('.ar-display')); 
        arabicElements.forEach(element => {
            element.classList.remove('d-none')
        });

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