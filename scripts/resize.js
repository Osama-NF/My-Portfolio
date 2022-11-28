// This is a workaround to the css problem with overflow and height precentage
// basically changing the height from precentage to px value
$(function() {
    pixlizePageHeight()
    $(window).resize(pixlizePageHeight)
    
    function pixlizePageHeight() {
        let windowHeight = $(window).height()
        let headerHeight = $('header').height()
        let pageHeight = windowHeight - headerHeight
        $('.page').outerHeight(pageHeight)
    }
})

