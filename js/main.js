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
        effect: 'fade',
        fadeEffect: {
            crossFade: true
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

    //Аккордеон
    let accordeon = document.querySelector('.accordeon__container');
    let accordeonBtns = accordeon.querySelectorAll('.accordeon__show');
    if (accordeonBtns.length > 0) {
        accordeonBtns.forEach(el => {
            el.addEventListener('click', function () {
                el.parentElement.classList.toggle('active');
                if(el.textContent.trim() == 'Ответ') {
                    el.textContent = 'Скрыть ответ';
                } else if(el.textContent.trim() == 'Скрыть ответ'){
                    el.textContent = 'Ответ';
                }
            })
        })
    }
})