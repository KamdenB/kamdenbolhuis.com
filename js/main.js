const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const copy = document.querySelectorAll('#main-footer');

// Set the intial state of menu
var showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    console.log('toggle');
    if(!showMenu){
        // copy.classList.add('show');
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'))
        showMenu = true;
    } else {
        // copy.classList.add('close');
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'))
        showMenu = false;
    }
    console.log(showMenu)
}
