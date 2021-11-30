const dropdown = document.querySelector('.dropdown');
const slide = document.querySelector('.slide');
// const menu = document.querySelector('.show');

function showMenu(){
    dropdown.style.display="flex";
    slide.style.top="0";
}

function hideMenu(){
    dropdown.style.display="none";
    slide.style.top="-100%";
}