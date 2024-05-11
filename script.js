const menuBar = document.querySelector('#menu_bar');
const menuMobile = document.querySelector('.menu_mobile');
const onClose = () => {
    menuMobile.classList.toggle('show_menu');
};

menuBar.addEventListener('click', () => {
    console.log('clicked');
    onClose();
});