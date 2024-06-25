/* PIXELATE */

/* TYPING */
let target = document.querySelector("#dynamic");

function randomString() {
    let stringArr = ["LEARNING PYTHON IN PROGRESS...", "LEARNING HTML/CSS IN PROGRESS...",
        "LEARNING JAVASCRIPT IN PROGRESS..", "LEARNING C IN PROGRESS...", "LEARNING JAVA IN PROGRESS..."];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

//repeat function until length 0
function dynamic(randomArr) {
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

//toggle the blinker
function blink() {
    target.classList.toggle("active");
}

setInterval(blink, 500);

/* TOGGLE HAMBURGER */
// toggle hamburge/list menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}