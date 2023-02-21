
$('.slick-slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    nextArrow: '<button class="slick-slider__button slick-slider__button-next"><img class=" slick-slider__image-next"  src="./__imags/_icon/ArrowR.png" alt="row"></button>',
    prevArrow: '<button class="slick-slider__button slick-slider__button-prev "><img class="slick-slider__image-prev"  src="./__imags/_icon/ArrowL.png" alt="row"></i></button>',
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                arrows: false,
            }
        }
    ]
});


$('.single-item').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                arrows: false,
                draggable: false,
            }
        }
    ]

});
$('.single-item-s').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});
$('.product-day-items').slick({
    draggable: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: '<button class="slick-slider__button slick-slider__button-next"><img class=" slick-slider__image-next"  src="./__imags/_icon/ArrowR.png" alt="row"></button>',
    prevArrow: '<button class="slick-slider__button slick-slider__button-prev "><img class="slick-slider__image-prev"  src="./__imags/_icon/ArrowL.png" alt="row"></i></button>',
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('.product-day-item').slick({

    infinite: false,
    arrows: true,
    nextArrow: '<button class=" product-day-item__next"><img class="product-day-item__arrow" src="./__imags/_icon/Arrow.png" alt="Arrow"></button>',
    prevArrow: '<button class=" product-day-item__prev"><img class="product-day-item__arrow" src="./__imags/_icon/Arrow.png" alt="Arrow"></button>',
});

$('[data-go]').on('click', function () {
    const __this = $(this);
    let index = __this.attr('data-go');
    $('.single-item').slick('slickGoTo', parseInt(index));
});

let dropdownButton = document.querySelector('.dropdown__button');

window.addEventListener('DOMContentLoaded', (e) => {
    let sity = document.querySelectorAll('.sity__link');
    for (let i = 0; i < sity.length; i++) {
        sity[i].addEventListener('click', function (e) {
            dropdownButton.innerHTML = sity[i].innerHTML;
        })
    }
});





const timer = document.querySelector("#timer");
// const days = document.querySelector(".days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");



let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
let updateTimer = setInterval(function () {
    let now = new Date().getTime();
    let difference = countDownDate - now;
    let daysDif = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hoursDif = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);
    hours.innerHTML = hoursDif;
    minutes.innerHTML = minutesDif;
    seconds.innerHTML = secondsDif;
    if (difference < 0) {
        clearInterval(updateTimer);
        timer.innerHTML = "Наступило";
    }
}, 1000);
const timer2 = document.querySelector("#timer2");
const hours2 = document.querySelector("#hours2");
const minutes2 = document.querySelector("#minutes2");
const seconds2 = document.querySelector("#seconds2");

let countDownDate2 = new Date("Jan 1, 2024 00:00:00").getTime();
let updateTimer2 = setInterval(function () {
    let now = new Date().getTime();
    let difference = countDownDate2 - now;
    let daysDif = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hoursDif = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);
    hours2.innerHTML = hoursDif;
    minutes2.innerHTML = minutesDif;
    seconds2.innerHTML = secondsDif;
    if (difference < 0) {
        clearInterval(updateTimer2);
        timer2.innerHTML = "Наступило";
    }
}, 1000);


function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let link = menu.find('.burger__menu_link');
    let overlay = menu.find('.burger-menu__overlay');


    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    link.on('ckick', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}
burgerMenu('.burger-menu');