const homeBtn = document.getElementById("home")
const projectsBtn = document.getElementById("projects")
const cvBtn = document.getElementById("cv")

const homeEl = document.getElementById("home-content")
const projectsEl = document.getElementById("projects-content")
const cvEl = document.getElementById("cv-content")

function removeActivePage() {
    homeBtn.classList.remove("active-page")
    projectsBtn.classList.remove("active-page")
    cvBtn.classList.remove("active-page")
}
function removeContent() {
    removeActivePage()
    homeEl.classList.add("hidden")
    projectsEl.classList.add("hidden")
    cvEl.classList.add("hidden")
}
homeBtn.addEventListener("click", function() {
    removeContent()
    homeBtn.classList.add("active-page")
    homeEl.classList.remove("hidden")
})
cvBtn.addEventListener("click", function() {
    removeContent()
    cvBtn.classList.add("active-page")
    cvEl.classList.remove("hidden")
})

// This drops down the language list

const cube = document.querySelector('.cube');
const radioGroup = document.querySelector('.radio-group');

let currentClass = '';

function changeSide() {
  const checkedRadio = radioGroup.querySelector(':checked');
  let showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );
