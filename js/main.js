document.addEventListener('DOMContentLoaded', function () {

    //Инициализация ленивой загрузки
    lazyload();

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
            nextEl: '.swiper-button-next-result',
            prevEl: '.swiper-button-prev-result',
        },

    });

    //Слайдер "Кейсы детальная"
    const keysDetail = new Swiper('.swiper-keys-detail', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 13,
        loopAdditionalSlides: 10,

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 13,
            },
            620: {
                slidesPerView: 1.2,
                spaceBetween: 13,
            },
            1024: {
                slidesPerView: 1.5,
                spaceBetween: 13,
            }
        }
    });

    //Слайдер страницы кейсы детальная "как это было"
    const howWasSlider = new Swiper('.swiper-how-was', {
        // Optional parameters
        spaceBetween: 1,
        slidesPerView: 2.8,
        centeredSlides: true,
        roundLengths: true,
        loopAdditionalSlides: 10,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1.2,
            },
            425: {
                slidesPerView: 1.5,
            },
            1000: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 2.8,
            }
        }
    });

    //Слайдер "страница Статьи"
    const articlesSlider = new Swiper('.swiper-articles', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-prev--articles',
            prevEl: '.swiper-button-next--articles',
        },
        pagination: {
            el: '.swiper-pagination--articles',
        },
    });

    //Аккордеон
    let accordeon = document.querySelector('.accordeon__container');
    if (accordeon) {
        let accordeonBtns = accordeon.querySelectorAll('.accordeon__show');
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

        //Отправка формы
        callForm.addEventListener('submit', submitTel)

        function submitTel(event) {
            event.preventDefault();
            fetch('send.php', {
                method: 'POST',
                body: new FormData(callForm)
            }).then((res) => res.json()).then(result => {
                if (result.error === false) {
                    callForm.innerHTML = '<div class="popup__text">Ваша заявка принята<br>Мы свяжемся с вами в ближайшее время</div>';
                }
            }).catch((err) => alert('Что-то пошло не так, попробуйте ещё раз'));
        }
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

    //Форма в модалке
    let btnForms = document.querySelectorAll('.modal-form');
    let popupForm = document.getElementById('cooperation');

    if (btnForms.length > 0) {
        btnForms.forEach(el => {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                popupForm.classList.add('popup__opened');
            })
        })
        //Закрытие модалки при клике вне ее область
        popupForm.addEventListener('click', function (e) {
            if (e.target == popupForm) {
                popupForm.classList.remove('popup__opened');
            }
        })
    }

    //Открытие фоток в модалке из секции "Результаты"
    let resultPhoto = document.querySelectorAll('.result__card-img');
    if (resultPhoto.length > 0) {
        let modalResult = document.getElementById('modalResult');
        let imgResult = document.getElementById('imgResult');
        resultPhoto.forEach(el => {
            el.addEventListener('click', () => {
                imgResult.src = el.src;
                modalResult.classList.add('popup__opened');
            })
        })
        //Закрытие модалки при клике вне ее область
        modalResult.addEventListener('click', function (e) {
            if (e.target != imgResult) {
                modalResult.classList.remove('popup__opened');
            }
        })
    }

    //Сдвиг плейсхолдеров в форме
    let inputs = document.querySelectorAll('.popup__input');
    inputs.forEach(el => {
        el.addEventListener('focus', function () {
            el.previousElementSibling.classList.add('active');
            el.style.border = '1px solid #FFFFFF';
            if (el.name == 'name') {
                el.previousElementSibling.innerHTML = 'Ваше Имя <span class="popup__required">*</span>';
                el.previousElementSibling.style.color = '#FFFFFF';
            }
            if (el.name == 'contact') {
                el.previousElementSibling.innerHTML = 'Ваш тел. или email <span class="popup__required">*</span>';
                el.previousElementSibling.style.color = '#FFFFFF';
            }
        })
        el.addEventListener('blur', function () {
            if (el.value == '') {
                el.previousElementSibling.classList.remove('active');
            }
        })
    })


    //Отправка формы сотрудничества
    let formCooperation = document.getElementById('cooperation-form');
    if (formCooperation) {
        formCooperation.addEventListener('submit', function (e) {
            e.preventDefault();
            let ch = 0;
            inputs.forEach(el => {
                if (el.value == '') {
                    el.style.border = '1px solid red';
                    el.previousElementSibling.textContent = 'Ошибка';
                    el.previousElementSibling.style.color = 'red';
                    ch = 0;
                } else {
                    ch++;
                }
            })
            if (ch == inputs.length) {
                fetch('send.php', {
                    method: 'POST',
                    body: new FormData(formCooperation)
                }).then((res) => res.json()).then(result => {
                    if (result.error === false) {
                        formCooperation.innerHTML = '<div class="popup__text">Ваша заявка принята<br><br>Мы свяжемся с вами в ближайшее время</div>';
                    }
                }).catch((err) => alert('Что-то пошло не так, попробуйте ещё раз'));
            }
        })
    }
})