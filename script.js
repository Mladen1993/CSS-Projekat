// Toggle the navbar menu on mobile
const hamburger = document.getElementById('hamburger');
const navbarList = document.querySelector('.navbar-list');

hamburger.addEventListener('click', () => {
    navbarList.classList.toggle('active');
});
