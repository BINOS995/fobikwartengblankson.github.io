const menu = document.getElementById('menuBar');
const lists = document.getElementById('menuLists');
const crossBtn = document.getElementById('cross');

menu.addEventListener('click', () => {
    lists.classList.toggle('active');
});

crossBtn.addEventListener('click', () => {
    lists.classList.remove('active');
});

/*=============toggle button================*/
const btn = document.querySelector('.toggleBtn');
const moveBtn = document.querySelector('.bgMove');
const fa = document.querySelector('.fa-solid');
const faMoon = document.querySelector('.fa-moon');

btn.addEventListener('click', function () {
    moveBtn.classList.toggle('active');
    fa.classList.toggle('dark');
    faMoon.classList.toggle('active');

    if (moveBtn.classList.contains('active')) {
        faMoon.classList.add('moon-active');
        document.body.classList.add('dark'); // Add 'dark' class when dark mode is enabled
    } else {
        faMoon.classList.remove('moon-active');
        document.body.classList.remove('dark'); // Remove 'dark' class when dark mode is disabled
    }
});

