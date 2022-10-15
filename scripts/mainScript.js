/*
#####################################
############ Defenitions ############
#####################################
*/

const navPage = document.querySelector(".nav-page");
const navBtns = document.querySelectorAll('.nav-btn');
const allPages = document.querySelectorAll('.page');
const homeBtns = document.querySelectorAll('.home-btn');

/*
#####################################
########## Event Listeners ##########
#####################################
*/

navBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        let dataPage = getRequestedPage(e.target)
        let filteredPage = getFilteredPage(dataPage)
        hideAllPagesExcept(filteredPage)
        triggerHomeBtns()
    })
})

homeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        hideAllPagesExcept(navPage)
        triggerHomeBtns()
    })
})

/*
#####################################
############# Functions #############
#####################################
*/

function getRequestedPage(node) {
    let requestedPage = node.getAttribute('data-page');
    if (!requestedPage) {
        requestedPage = node.parentElement.getAttribute('data-page');
    }
    return requestedPage;
}

function getFilteredPage(dataPage) {
    let filteredPage = Array.from(allPages).filter(page => {
        return page.classList.contains(dataPage);
    })
    return filteredPage[0];
}

function hideAllPagesExcept(requestedPage) {
    allPages.forEach(page => {
        page.classList.add('d-none');
    })
    requestedPage.classList.remove('d-none');
}

// Checks for current page, and will appear except when on nav-page
function triggerHomeBtns() {
    if (navPage.classList.contains('d-none')) {

        homeBtns.forEach(btn => {
            btn.classList.remove('d-none')
        })

    } else {

        homeBtns.forEach(btn => {
            btn.classList.add('d-none');
        })

    }
}
