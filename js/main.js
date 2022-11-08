document.addEventListener('DOMContentLoaded', function () {

    //Слайдер "Главный"
    const mainSlider = new Swiper('.swiper-main', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
            }
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //Слайдер "Наши кейсы"
    const resultSlider = new Swiper('.swiper-result', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //Слайдер "Наши услуги"
    const servicesSlider = new Swiper('.swiper-services', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})