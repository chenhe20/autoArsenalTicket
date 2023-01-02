
let button = document.getElementById('activate-button');
button.addEventListener('click', () => {
    alert("activated")
    browser.tabs.executeScript({file: "/main.js"})
})

