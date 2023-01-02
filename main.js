let incre_path = '/html/body/div[3]/div/div/article[1]/div/section[2]/div/div[2]/button[2]';
let increButton = document.evaluate(incre_path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

let decrePath = '/html/body/div[3]/div/div/article[1]/div/section[2]/div/div[2]/button[1]';
let decreButton = document.evaluate(decrePath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

let resultPath = '/html/body/div[3]/div/div/article[1]/div/div/div[4]/div/div/div[2]/div[2]/section';
// Find the result section element using the xpath
let result = document.evaluate(resultPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// // Append a button after the arsenal icon on the left top corner
// let a_path = '/html/body/header/div[1]/a';
// let a = document.evaluate(a_path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//
// let button = document.createElement('button');
// button.textContent = 'refresh';
// a.insertAdjacentElement('afterend', button);

// Play siren audio if a ticket is found
// let audio = new Audio('file:///Users/hechen/Downloads/PoliceSirenVariou TE2027601.mp3');

let reFreshPage

function clickButtons() {

    // Click the "add-button" first, then wait for 2 seconds
    increButton.click();
    setTimeout(function() {
        // Click the second button after 2 seconds
        decreButton.click();
    }, 2000);

    // wait for 1 second
    setTimeout(function() {
        // Click the second button after 2 seconds
    }, 1000);

    if (result.querySelectorAll('button').length > 0) {
        clearInterval(reFreshPage);
        // Alert
        alert('ticket found')
        // Play the audio
        //audio.play();
        return;
    }
}
reFreshPage = setInterval(clickButtons, 6000);


// button.addEventListener('click', () => {
//     reFreshPage = setInterval(clickButtons, 6000);
// });
