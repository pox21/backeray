let listBrg = document.querySelector('.brg');
let menu = document.querySelector('.menu');
listBrg.addEventListener('click', function () {
    listBrg.classList.toggle('brg-active');
    menu.classList.toggle('menu-active');
});


let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    
        
        550: {
            slidesPerView: 3,
 
        }
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});