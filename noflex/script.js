document.addEventListener('DOMContentLoaded', function() {    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: "5",
        spaceBetween: 15,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
