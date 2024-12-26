/* ============================ Handle Navbar ==============================*/

const navbar = document.getElementById('navbar');
navbar.addEventListener('click', (event) => {
    const selectedNav = event.target;
    [...navbar.children].forEach((child) => child.classList.remove('card'))
    selectedNav.classList.add('card')
})

/* ============================ Change Theme ==============================*/

var theme = sessionStorage.getItem('theme') || 'light';
const themeElement = document.getElementById('theme');

const rootElement = document.documentElement;
const themeIcon = document.getElementById('theme-icon')
const socialsLightElement = document.getElementById('socials-light')
const socialsDarkElement = document.getElementById('socials-dark')

function applyTheme() {
    if (theme == 'light') {
        rootElement.style.background = "url('./assets/light-background.jpg')"
        rootElement.style.color = '#000'
        themeIcon.setAttribute('src', './assets/icons/bulboff.png')
        socialsDarkElement.style.display = 'none'
        socialsLightElement.style.display = 'flex'
    }
    else {
        rootElement.style.background = "url('./assets/background.jpg')";
        rootElement.style.color = '#fff'
        themeIcon.setAttribute('src', './assets/icons/bulbon.svg')
        socialsDarkElement.style.display = 'flex'
        socialsLightElement.style.display = 'none'
    }
    rootElement.style.backgroundRepeat = 'no-repeat';
    rootElement.style.backgroundSize = 'cover';
    sessionStorage.setItem('theme', theme)
}

applyTheme()

themeElement.addEventListener('click', () => {
    theme = theme == 'light' ? 'dark' : 'light'
    applyTheme()
})