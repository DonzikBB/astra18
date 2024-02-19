(function () {
    const header = document.querySelector('header');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header_active');
        }
    };
} ()); 
 



(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());

 
(function () {
    const header = document.querySelector('header');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header_active');
        }
    };
}());

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
        document.body.style.overflow = 'hidden';
    });
    
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
        document.body.style.overflow = 'auto';
    });
}());
 
