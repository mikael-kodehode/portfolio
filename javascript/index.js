const homeBtn = document.querySelector("#home")
const projectsBtn = document.getElementById("projects")
const cvBtn = document.getElementById("cv")
const navBtns = document.querySelectorAll(".nav-link")

const firstPBtn = document.querySelector("#first-p")
const secondPBtn = document.querySelector("#second-p")
const thirdPBtn = document.querySelector("#third-p")
const pBtns = document.querySelectorAll(".p-btn")

const exp1 = document.querySelector("#exp-1")
const exp2 = document.querySelector("#exp-2")
const exp3 = document.querySelector("#exp-3")
const exp4 = document.querySelector("#exp-4")
const exp5 = document.querySelector("#exp-5")
const exp = document.querySelectorAll(".exp")

const expLi = document.querySelector("#exp-li")
const eduLi = document.querySelector("#edu-li")
const miscLi = document.querySelector("#misc-li")
const cvBtns = document.querySelectorAll(".cv-nav-li")

const homeEl = document.getElementById("home-content")
const projectsEl = document.getElementById("projects-content")
const cvEl = document.getElementById("cv-content")
const contents = document.querySelectorAll(".main-content")

const firstPEl = document.querySelector("#p1")
const secondPEl = document.querySelector("#p2")
const thirdPEl = document.querySelector("#p3")
const pEls = document.querySelectorAll(".p")

const epinionEl = document.querySelector("#epinion")
const bunnprisEl = document.querySelector("#bunnpris")
const norstatEl = document.querySelector("#norstat")
const unicallEl = document.querySelector("#unicall")
const teleConnectEl = document.querySelector("#tele-connect")
const employerEls = document.querySelectorAll(".employer")

const expEl = document.querySelector("#experience")
const eduEl = document.querySelector("#education")
const miscEl = document.querySelector("#misc-el")
const cvTabs = document.querySelectorAll(".main-article")

const cubeEls = document.querySelectorAll(".cube__face")
const conTit = document.querySelectorAll(".contact-title")
const conDet = document.querySelectorAll(".contact-details")

const projectsContainer = document.querySelector(".col")
const pNavUl = document.querySelector("#employers")

async function getLanguage(language) {
  const res = await fetch(`../javascript/${language}.json`)
  const data = await res.json()
  console.log(data)
  return data
}

function pushProject(data) {
  const project = document.createElement("p")
  project.classList.add("github-projects")
  project.innerHTML = `<a href="${data.url}" target=_blank">${data.title}</a>`
  projectsContainer.append(project)
}

function pushEmployerNav(data) {
  const nameArray = []
  for (x of data.cv.experience) {
    nameArray.append(`<li class="p-nav-list exp">${x.navName}</li>`)
  }
}

function pushEmployers(data) {
  const p = document.createElement("p")
  const ul = document.createElement("ul")
  const li = document.createElement("li")
  for (x of data.cv.experience) {
    pNavUl.innerHTML += `<li class="p-nav-list exp" id="exp-2">${x.navName}</li>`
    console.log(x.title)

  }
}

function pushLanguage(data) {
  document.querySelector("#title").textContent = data.title

  for (let x = 0; x < navBtns.length;x++) {
    navBtns[x].textContent = data.nav[x]
    cvBtns[x].textContent = data.cv.nav[x]
    pEls[x].textContent = data.paragraphs[x].description
    conTit[x].textContent = data.cv.contacts[x].title
    conDet[x].textContent = data.cv.contacts[x].details
  }

  for (let x = 0; x < cubeEls.length; x++) {
    cubeEls[x].textContent = data.cube[x]
  }

  document.querySelector(".big-link").textContent = data.projectTitle
  projectsContainer.innerHTML = ""
  data.projects.forEach(pushProject)

  document.querySelector("#cv-intro").innerHTML = `${data.cv.title}`
  document.querySelector(".small-text").innerHTML = `${data.footer[0]}<br>${data.footer[1]}`
}

function getData(data) {
  switch (data) {
    case english:
      getLanguage("english")
      .then(pushLanguage)
      .catch(e => console.log(e))
      break
    case norwegian:
      getLanguage("norwegian")
      .then(pushLanguage)
      .catch(e => console.log(e))
      break
  }
}

document.querySelector("#english").addEventListener("click", () =>   {getData(english)})
document.querySelector("#norwegian").addEventListener("click", () => {getData(norwegian)})
getData(norwegian)



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
function removeActiveExp() {
  exp1.classList.remove("active-p")
  exp2.classList.remove("active-p")
  exp3.classList.remove("active-p")
  exp4.classList.remove("active-p")
  exp5.classList.remove("active-p")
}
function removeExp() {
  epinionEl.classList.add("hidden")
  bunnprisEl.classList.add("hidden")
  norstatEl.classList.add("hidden")
  unicallEl.classList.add("hidden")
  teleConnectEl.classList.add("hidden")
}
function removeCV() {
  experience.classList.add("hidden")
  education.classList.add("hidden")
  miscEl.classList.add("hidden")
}
function removeActiveCV() {
  expLi.classList.remove("active-page")
  eduLi.classList.remove("active-page")
  miscLi.classList.remove("active-page")
}

// Event listeners
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
exp1.addEventListener("click", function() {
  removeActiveExp()
  removeExp()
  exp1.classList.add("active-p")
  epinionEl.classList.remove("hidden")
})
exp2.addEventListener("click", function() {
  removeActiveExp()
  removeExp()
  exp2.classList.add("active-p")
  bunnprisEl.classList.remove("hidden")
})
exp3.addEventListener("click", function() {
  removeActiveExp()
  removeExp()
  exp3.classList.add("active-p")
  norstatEl.classList.remove("hidden")
})
exp4.addEventListener("click", function() {
  removeActiveExp()
  removeExp()
  exp4.classList.add("active-p")
  unicallEl.classList.remove("hidden")
})
exp5.addEventListener("click", function() {
  removeActiveExp()
  removeExp()
  exp5.classList.add("active-p")
  teleConnectEl.classList.remove("hidden")
})
expLi.addEventListener("click", function() {
  removeActiveCV()
  removeCV()
  expEl.classList.remove("hidden")
  expLi.classList.add("active-page")
})
eduLi.addEventListener("click", function() {
  removeActiveCV()
  removeCV()
  eduEl.classList.remove("hidden")
  eduLi.classList.add("active-page")
})
miscLi.addEventListener("click", function() {
  removeActiveCV()
  removeCV()
  miscEl.classList.remove("hidden")
  miscLi.classList.add("active-page")
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
