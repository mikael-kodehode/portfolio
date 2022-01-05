
const langList = document.getElementById("lang-list");
const heroBtn = document.getElementById("hero-btn");

active = false;

// This drops down the language list
function showHeroList() {
    langList.innerHTML = `<li>HTML/CSS/Javascript</li><li>Python</li>`
}
function hideHeroList() {
    langList.innerHTML = ""
}
heroBtn.addEventListener("click", function() {
    if (active === false) {
        showHeroList();
        active = true;
    }
    else if (active === true) {
        hideHeroList();
        active = false
    }
    else {
        console.log("Error")
    }
})