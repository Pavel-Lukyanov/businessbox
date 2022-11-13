document.addEventListener('DOMContentLoaded', function () {

    //Слайдер "Главный"
    const mainSlider = new Swiper('.swiper-main', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination--hero',
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
            prevEl: '.swiper-button-next--hero',
        },
    });

    //Слайдер "Наши услуги"
    const servicesSlider = new Swiper(".swiper-services", {

        slidesPerView: 3,
        grid: {
            rows: 2,
            fill: 'row'
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                grid: {
                    rows: 2,
                    fill: 'row'
                },
            },
            620: {
                slidesPerView: 2,
                spaceBetween: 30,
                grid: {
                    rows: 2,
                    fill: 'row'
                },
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                grid: {
                    rows: 2,
                    fill: 'row'
                },
            }
        }
    });

    //Слайдер "Наши кейсы"
    const resultSlider = new Swiper('.swiper-result', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-prev-result',
            prevEl: '.swiper-button-next-result',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    //Аккордеон
    let accordeon = document.querySelector('.accordeon__container');
    let accordeonBtns = accordeon.querySelectorAll('.accordeon__show');
    if (accordeonBtns.length > 0) {
        accordeonBtns.forEach(el => {
            el.addEventListener('click', function () {
                el.parentElement.classList.toggle('active');
                if (el.textContent.trim() == 'Ответ') {
                    el.textContent = 'Скрыть ответ';
                } else if (el.textContent.trim() == 'Скрыть ответ') {
                    el.textContent = 'Ответ';
                }
            })
        })
    }

    //Маска телефона
    var selector = document.querySelectorAll("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");

    im.mask(selector);

    //Валидация формы 
    let callForm = document.getElementById('callForm');
    if (callForm) {
        let input = callForm.querySelector('input');
        let btn = callForm.querySelector('button');

        input.addEventListener('input', function () {
            if (!input.value.includes('_') && input.value.includes(' ')) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        })
    }

    //Отправка формы
    callForm.addEventListener('submit', submitTel)

    function submitTel(event) {
        event.preventDefault();
    }

    //Меню
    let menuContainer = document.getElementById('menu-dropdown');
    let burger = document.getElementById('burger');
    burger.addEventListener('click', function () {
        burger.classList.toggle('opened');
        menuContainer.classList.toggle('active');
    })

    //Анимация
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                setTimeout(() => {
                    change.target.classList.add('active');
                }, 800)
            }
        })
    }
    let options = {
        treshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let animBlocks = document.querySelectorAll('.animate');
    animBlocks.forEach(el => {
        observer.observe(el);
    })
})

