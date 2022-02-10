// Front page
const buttons = document.querySelectorAll(".btn")
const mainNav = document.querySelectorAll(".nav-link")
const pBtns = document.querySelectorAll(".p-btn")

const cubeText = document.querySelectorAll(".cube__face")
const homePs = document.querySelectorAll(".p")

const footerText = document.querySelector(".small-text")

// Page projects
const projectsContainer = document.querySelector(".col")

// Page cv
const cvIntro = document.querySelector("#cv-intro")
const contacts = document.querySelectorAll(".cv-ul")
const cvNav = document.querySelectorAll(".cv-nav-li")
// Experience
const employersNav = document.querySelector("#employers")
const employersBtns = document.querySelectorAll(".exp")
const employer = document.querySelectorAll(".employer")
// Education
const education = document.querySelector("#education")
// Courses/Volunteers
const miscEl = document.querySelector("#misc-el")

// Fetching data
async function getLanguage(lang) {
  const res = await fetch(`../javascript/${lang}.json`)
  const data = await res.json()
  return data
}

function pushProject(data) {
  const project = document.createElement("p")
  project.classList.add("github-projects")
  if (data.github === true) { project.innerHTML = `<a href="${data.url}" target=_blank">${data.title}</a><img class="github-logo" src="images/github-logo.png" alt="github-logo">`}
  else { project.innerHTML = `<a href="${data.url}" target=_blank">${data.title}</a>`}
  projectsContainer.append(project)
}

function pushLanguage(data) {
    contacts[0].innerHTML = ""
    contacts[1].innerHTML = ""
  for (let x = 0; x < cvNav.length;x++) {
    mainNav[x].textContent = data.nav[x]
    cvNav[x].textContent = data.cv.nav[x]
    homePs[x].textContent = data.paragraphs[x].description
    contacts[0].innerHTML += `<li>${data.cv.contacts[x].title}</li>`
    contacts[1].innerHTML += `<li>${data.cv.contacts[x].details}</li>`
  }

  for (let x = 0; x < cubeText.length; x++) {
    cubeText[x].textContent = data.cube[x]
  }

  document.querySelector(".big-link").textContent = data.projectTitle
  projectsContainer.innerHTML = ""
  data.projects.forEach(pushProject)

  cvIntro.innerHTML = `${data.cv.title}`
  employersNav.innerHMTL = ""
  for (x of data.cv.experience) {
    employersNav.innerHTML += `<li class="p-nav-list exp>${x.navName}</li>`
  }

  footerText.innerHTML = `${data.footer[0]}<br>${data.footer[1]}`
}

function getData(data) {
  switch (data) {
    case "english":
    getLanguage(data)
    .then(pushLanguage)
    .catch(e => console.log(e))
    break
    case "norwegian":
    getLanguage(data)
    .then(pushLanguage)
    .catch(e => console.log(e))
    break
  }
}
buttons[0].addEventListener("click", () =>   {getData("english")})
buttons[1].addEventListener("click", () => {getData("norwegian")})














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
