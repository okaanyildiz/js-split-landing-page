const playstation = document.querySelector('.playstation');
const xbox = document.querySelector('.xbox');

playstation.addEventListener('mouseenter', () => {
    playstation.classList.add('product-show');
})

playstation.addEventListener('mouseleave', () => {
    playstation.classList.remove('product-show');
})
xbox.addEventListener('mouseenter', () => {
    xbox.classList.add('product-show');
})

xbox.addEventListener('mouseleave', () => {
    xbox.classList.remove('product-show');
})