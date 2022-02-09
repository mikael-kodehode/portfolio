
const buttons = document.querySelectorAll(".btn")
const mainNav = document.querySelectorAll(".nav-link")
const pBtns = document.querySelectorAll(".p-btn")

const cube = document.querySelectorAll(".cube__face")
const homePs = document.querySelectorAll(".p")



const footerText = document.querySelector(".small-text")
console.log(homePs)


























document.body.addEventListener("click", (e) => {
  if (e.target) {}
})



// Heartrate simulator
const rate = document.querySelector("#rate");
const heartEl = document.querySelector("#heart-element")

rate.addEventListener("input", function() {
    let x = rate.value;
    let y = (60 / x)
    heartEl.style.animation = "container ease-out " + y + "s infinite";
})

const cube = document.querySelector('.cube');
const radioGroup = document.querySelector('.radio-group');

let currentClass = '';

function changeSide() {
  const checkedRadio = radioGroup.querySelector(':checked');
  let showClass = 'show-' + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener('change', changeSide);
