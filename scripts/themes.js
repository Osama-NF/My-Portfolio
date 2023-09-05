/*
    1- All the themes are in the below array, and it's the only place you need to edit for themes
    2- All themes should have the exact same key structure and naming, the only difference is the string
    3- You can have as many themes as you want, but you should (delete?) the toggleIcon() fucntion, as it's only good for 2 themes
*/
const THEMES = [
    lightTheme = {
        header: {
            bg: "#659dbd", //#659dbd
            text: "#000"
        },
        main: {
            bg: "url('../img/bg/on-body.svg')", // #daad86
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
    },
    
    darkTheme = {
        header: {
            bg: "url(../img/bg/off-header.svg)", // #361e1e
            text: "#eee"
        },
        main: {
            bg: "url(../img/bg/off-body.svg)",
            text: "#eee"
        },
        btn: {
            bg: "#795548",
            text: "#000",
            border: "#4a4749",
            shadow: "#000"
        },
        pages: {
            border: "#000",
            shadow: "#795548",
            inner: {
                bg: "#361e1e",
                text: "#eee"
            },
            outer: {
                bg: "#795548",
                text: "#000"
            }
        }
    },

    

]

$(function() {

    changeTheme(THEMES[0])

    $('.theme-btn').click(function() {
        previousIndex = Number($('body').attr('data-theme'))
        newIndex = THEMES[previousIndex + 1] ? previousIndex + 1 : 0
        $('body').attr('data-theme', newIndex)
    
        newTheme = THEMES[newIndex]
        changeTheme(newTheme)
        toggleIcon(newIndex)
    })
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

function toggleIcon(newIndex) {
    if (newIndex) {
        $('.bi-lightbulb').slideUp('fast', function(){
            $('.bi-lightbulb-off').slideDown('fast')
        })
    } else {
        $('.bi-lightbulb-off').slideUp('fast', function(){
            $('.bi-lightbulb').slideDown('fast')
        })
    }
}