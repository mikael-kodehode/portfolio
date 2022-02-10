// Front page
const buttons = document.querySelectorAll(".btn")
const mainNav = document.querySelectorAll(".nav-link")
const pBtns = document.querySelectorAll(".p-btn")

const cubeText = document.querySelectorAll(".cube__face")
const homePs = document.querySelectorAll(".p")

const footerText = document.querySelector(".small-text")

// Page projects
const projectsContainer = document.querySelector(".col)

// Page cv
const cvIntro = document.querySelector("#cv-intro")
const contacts = document.querySelectorAll(".cv-ul")
const cvNav = document.querySelectorAll(".cv-nav-li")
// Experience
const employersNav = document.querySelector("#employers")
const employer = document.querySelectorAll(".employer")
// Education
const education = document.querySelector("#education")
// Courses/Volunteers
const miscEl.document.querySelector("#misc-el")

async function getLanguage(language) {
  const res = await fetch(`../javascript/${language}.json`)
  const data = await res.json()
  console.log(data)
  return data
}

function pushProject(data) {
  const project = document.createElement("p")
  project.classList.add("github-projects")
  if (data.github === true) {
    project.innerHTML = `<a href="${data.url}" target=_blank">${data.title}</a>`
  }
  projectsContainer.append(project)
}

















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
