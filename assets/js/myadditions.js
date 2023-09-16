// the below adds the total number of certs dynamically
let certs = document.querySelectorAll('.numbertext');
let total = certs.length;

certs.forEach(cert => {
    cert.innerText += ' / ' + total
})


// below makes cert zoomable
let certImgs = document.querySelectorAll('.slideshow-container img');
console.log(certImgs)
certImgs.forEach(img => {
    img.addEventListener('click', zoomInCert)
})

function zoomInCert(e) {
    let bgDiv = document.createElement('div');
    bgDiv.style.cssText = `
        background-color: rgb(0,0,0,0.7);
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    bgDiv.addEventListener('click', () =>{
        bgDiv.remove()
    })

    let newImg = document.createElement('img')
    newImg.src = e.srcElement.currentSrc;
    newImg.style.maxHeight = "100%";
    newImg.style.maxWidth = "100%";

    bgDiv.append(newImg)
    document.body.prepend(bgDiv)
}