/* 
Theme 1 (darkish)
#242582      -- darker blue
#2f2fa2      -- lighter blue
#f64c72      -- red orange thing
#553d67      -- darker brown
#99738e      -- lighter brown

Theme 2 (lightish)
#8d8741
#659dbd
#daad86
#bc986a
#fbeec1
*/
const THEMES = [
    darkTheme = {
        header: {
            bg: "#242582",
            text: "#eee"
        },
        main: {
            bg: "#2f2fa2",
            text: "#eee"
        },
        btn: {
            bg: "#99738e",
            text: "#000",
            border: "#2f2fa2",
            shadow: "#f64c72"
        },
        pages: {
            border: "#000",
            shadow: "#f64c72",
            inner: {
                bg: "#553d67",
                text: "#eee"
            },
            outer: {
                bg: "#99738e",
                text: "#000"
            }
        }
    },

    lightTheme = {
        header: {
            bg: "#659dbd",
            text: "#000"
        },
        main: {
            bg: "#daad86",
            text: "#000"
        },
        btn: {
            bg: "#bc986a",
            text: "#000",
            border: "#000",
            shadow: "#000"
        },
        pages: {
            border: "#000",
            shadow: "#000",
            inner: {
                bg: "#daad86",
                text: "#000"
            },
            outer: {
                bg: "#bc986a",
                text: "#000"
            },
        }
    }

]

$('.theme-btn').click(function() {
    previousIndex = Number($('body').attr('data-theme'))
    newIndex = THEMES[previousIndex + 1] ? previousIndex + 1 : 0
    $('body').attr('data-theme', newIndex)
    
    newTheme = THEMES[newIndex]
    changeTheme(newTheme)
})

function changeTheme(newTheme) {
    $(':root')
        .css('--header-bg', newTheme.header.bg)
        .css('--header-text', newTheme.header.text)
        .css('--main-bg', newTheme.main.bg)
        .css('--main-text', newTheme.main.text)
        .css('--btn-bg', newTheme.btn.bg)
        .css('--btn-text', newTheme.btn.text)
        .css('--btn-border', newTheme.btn.border)
        .css('--btn-shadow', newTheme.btn.shadow)
        .css('--pages-border', newTheme.pages.border)
        .css('--pages-shadow', newTheme.pages.shadow)
        .css('--inner-bg', newTheme.pages.inner.bg)
        .css('--inner-text', newTheme.pages.inner.text)
        .css('--outer-bg', newTheme.pages.outer.bg)
        .css('--outer-text', newTheme.pages.outer.text)
}