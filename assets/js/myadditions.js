// below makes cert zoomable
let certImgs = document.querySelectorAll('.cert img');
certImgs.forEach(img => {
    img.addEventListener('click', zoomInCert)
})

function zoomInCert(e) {
    let bgDiv = document.createElement('div');
    bgDiv.style.cssText = `
        background-color: rgb(0,0,0,0.9);
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    bgDiv.addEventListener('click', () =>{
        bgDiv.remove()
    })

    let newImg = document.createElement('img')
    newImg.src = e.srcElement.currentSrc;
    newImg.style.maxHeight = "80%";
    newImg.style.maxWidth = "80%";

    let text = document.createElement('h3')
    text.textContent = e.target.nextElementSibling.textContent

    bgDiv.append(text)
    bgDiv.append(newImg)
    document.body.prepend(bgDiv)
}