const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const navMenu = document.querySelector('.nav__menu');

// Open nav menu
menuBtn.addEventListener('click', () => {
    navMenu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// Close nav menu

const closeNav = () => {
    navMenu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}

closeBtn.addEventListener('click', closeNav)


// Automatically close nav menu when nav is clicked
if (window.innerWidth < 1024) {
    document.querySelectorAll('.nav__menu li a').forEach(navItem => {
        navItem.addEventListener('click', closeNav)
    })
}


// Change nav style on scroll
window.addEventListener('scroll', () => {
	document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
