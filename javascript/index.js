const homeBtn = document.querySelector("#home")
const projectsBtn = document.getElementById("projects")
const cvBtn = document.getElementById("cv")
const firstPBtn = document.querySelector("#first-p")
const secondPBtn = document.querySelector("#second-p")
const thirdPBtn = document.querySelector("#third-p")

const homeEl = document.getElementById("home-content")
const projectsEl = document.getElementById("projects-content")
const cvEl = document.getElementById("cv-content")
const firstPEl = document.querySelector("#p1")
const secondPEl = document.querySelector("#p2")
const thirdPEl = document.querySelector("#p3")

function removeActivePage() {
    homeBtn.classList.remove("active-page")
    projectsBtn.classList.remove("active-page")
    cvBtn.classList.remove("active-page")
}

function removeActiveParagraph() {
    firstPBtn.classList.remove("active-p")
    secondPBtn.classList.remove("active-p")
    thirdPBtn.classList.remove("active-p")
}

function removeContent() {
    removeActivePage()
    homeEl.classList.add("hidden")
    projectsEl.classList.add("hidden")
    cvEl.classList.add("hidden")
}

function removeP() {
    firstPEl.classList.add("hidden")
    secondPEl.classList.add("hidden")
    thirdPEl.classList.add("hidden")
}

homeBtn.addEventListener("click", function() {
    removeContent()
    homeBtn.classList.add("active-page")
    homeEl.classList.remove("hidden")
})

projectsBtn.addEventListener("click", function() {
    removeContent()
    projectsBtn.classList.add("active-page")
    projectsEl.classList.remove("hidden")
})

cvBtn.addEventListener("click", function() {
    removeContent()
    cvBtn.classList.add("active-page")
    cvEl.classList.remove("hidden")
})

firstPBtn.addEventListener("click", function() {
  removeActiveParagraph()
  removeP()
  firstPBtn.classList.add("active-p")
  firstPEl.classList.remove("hidden")
})

secondPBtn.addEventListener("click", function() {
  removeActiveParagraph()
  removeP()
  secondPBtn.classList.add("active-p")
  secondPEl.classList.remove("hidden")
})

thirdPBtn.addEventListener("click", function() {
  removeActiveParagraph()
  removeP()
  thirdPBtn.classList.add("active-p")
  thirdPEl.classList.remove("hidden")
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
