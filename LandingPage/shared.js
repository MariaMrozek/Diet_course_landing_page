const menuBurger = document.querySelector('.menu-burger'); //Zapomniałaś kropki ('.menu-burger'
console.log(menuBurger);

menuBurger.addEventListener('click', function () {
    menuBurger.classList.toggle('active')
})