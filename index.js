/* ============================ Handle Navbar ==============================*/

const navbar = document.getElementById('navbar');
const aboutElements = document.getElementsByClassName('about')
const workElements = document.getElementsByClassName('work')

function setBgColor(elements, isChanged){
    [...elements].forEach((element)=>{
        element.style.backgroundColor = isChanged?'rgba(244, 255, 0, 0.2)':'rgba(255, 255, 255, 0.1)'
    })
}

navbar.addEventListener('click', (event) => {
    const selectedNav = event.target;
    [...navbar.children].forEach((child) => child.classList.remove('card'))
    selectedNav.classList.add('card')
    setBgColor(aboutElements, selectedNav.innerText=='About')
    setBgColor(workElements,selectedNav.innerText=='Work')
})

/* ============================ Change Theme ==============================*/

const themeElement = document.getElementById('theme');
const rootElement = document.documentElement;
const themeIcon = document.getElementById('theme-icon')
const socialsLightElement = document.getElementById('socials-light')
const socialsDarkElement = document.getElementById('socials-dark')

const isDarkMQ = window.matchMedia('(prefers-color-scheme: dark)');
var theme = sessionStorage.getItem('theme') || (isDarkMQ.matches ? 'dark':'light');

function applyTheme() {
    if (theme == 'light') {
        rootElement.style.background = "radial-gradient(circle, rgba(246,240,254,1) 25%, rgba(228,202,249,1) 75%)"
        rootElement.style.color = '#000'
        themeIcon.setAttribute('src', './assets/icons/bulboff.png')
        socialsDarkElement.style.display = 'none'
        socialsLightElement.style.display = 'flex'
    }
    else {
        rootElement.style.background = "radial-gradient(circle, rgba(57,33,55,1) 25%, rgba(13,7,35,1) 75%)";
        rootElement.style.color = '#fff'
        themeIcon.setAttribute('src', './assets/icons/bulbon.svg')
        socialsDarkElement.style.display = 'flex'
        socialsLightElement.style.display = 'none'
    }
    rootElement.style.backgroundRepeat = 'no-repeat';
    rootElement.style.backgroundSize = 'cover';
    // debugger
    sessionStorage.setItem('theme', theme)
}

applyTheme()

isDarkMQ.addEventListener('change',(event)=>{
    theme = event.matches ? 'dark': 'light'
    applyTheme()
})

themeElement.addEventListener('click', () => {
    theme = theme == 'light' ? 'dark' : 'light'
    applyTheme()
})