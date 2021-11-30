const nav_btn = document.getElementById('hm-btn');
const mob_menu = document.getElementById('mb-nav');

nav_btn.addEventListener('click', () => {
    mob_menu.classList.toggle('is-active');
});

document.querySelector('#show').addEventListener('click', () => {
    document.querySelector('.auth').classList.add('active');
});

document.querySelector('.auth #close').addEventListener('click', () => {
    document.querySelector('.auth').classList.remove('active');
});
