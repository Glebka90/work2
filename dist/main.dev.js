"use strict";

$('.slick-slider').slick({
  infinite: true,
  arrows: true,
  dots: true,
  nextArrow: '<button class="slick-slider__button slick-slider__button-next"><img class=" slick-slider__image-next"  src="./__imags/_icon/ArrowR.png" alt="row"></button>',
  prevArrow: '<button class="slick-slider__button slick-slider__button-prev "><img class="slick-slider__image-prev"  src="./__imags/_icon/ArrowL.png" alt="row"></i></button>',
  responsive: [{
    breakpoint: 1250,
    settings: {
      arrows: false
    }
  }]
});
$('.single-item').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  draggable: false,
  responsive: [{
    breakpoint: 1250,
    settings: {
      arrows: false,
      draggable: false
    }
  }]
});
$('.single-item-s').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
});
$('.product-day-items').slick({
  draggable: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  nextArrow: '<button class="slick-slider__button slick-slider__button-next"><img class=" slick-slider__image-next"  src="./__imags/_icon/ArrowR.png" alt="row"></button>',
  prevArrow: '<button class="slick-slider__button slick-slider__button-prev "><img class="slick-slider__image-prev"  src="./__imags/_icon/ArrowL.png" alt="row"></i></button>',
  responsive: [{
    breakpoint: 1250,
    settings: {
      arrows: false
    }
  }]
});
$('.product-day-item').slick({
  infinite: false,
  arrows: true,
  nextArrow: '<button class=" product-day-item__next"><img class="product-day-item__arrow" src="./__imags/_icon/Arrow.png" alt="Arrow"></button>',
  prevArrow: '<button class=" product-day-item__prev"><img class="product-day-item__arrow" src="./__imags/_icon/Arrow.png" alt="Arrow"></button>'
});
$('[data-go]').on('click', function () {
  var __this = $(this);

  var index = __this.attr('data-go');

  $('.single-item').slick('slickGoTo', parseInt(index));
});
var dropdownButton = document.querySelector('.dropdown__button');
window.addEventListener('DOMContentLoaded', function (e) {
  var sity = document.querySelectorAll('.sity__link');

  var _loop = function _loop(i) {
    sity[i].addEventListener('click', function (e) {
      dropdownButton.innerHTML = sity[i].innerHTML;
    });
  };

  for (var i = 0; i < sity.length; i++) {
    _loop(i);
  }
});
var timer = document.querySelector("#timer"); // const days = document.querySelector(".days");

var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
var updateTimer = setInterval(function () {
  var now = new Date().getTime();
  var difference = countDownDate - now;
  var daysDif = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hoursDif = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutesDif = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
  var secondsDif = Math.floor(difference % (1000 * 60) / 1000);
  hours.innerHTML = hoursDif;
  minutes.innerHTML = minutesDif;
  seconds.innerHTML = secondsDif;

  if (difference < 0) {
    clearInterval(updateTimer);
    timer.innerHTML = "Наступило";
  }
}, 1000);
var timer2 = document.querySelector("#timer2");
var hours2 = document.querySelector("#hours2");
var minutes2 = document.querySelector("#minutes2");
var seconds2 = document.querySelector("#seconds2");
var countDownDate2 = new Date("Jan 1, 2024 00:00:00").getTime();
var updateTimer2 = setInterval(function () {
  var now = new Date().getTime();
  var difference = countDownDate2 - now;
  var daysDif = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hoursDif = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutesDif = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
  var secondsDif = Math.floor(difference % (1000 * 60) / 1000);
  hours2.innerHTML = hoursDif;
  minutes2.innerHTML = minutesDif;
  seconds2.innerHTML = secondsDif;

  if (difference < 0) {
    clearInterval(updateTimer2);
    timer2.innerHTML = "Наступило";
  }
}, 1000);

function burgerMenu(selector) {
  var menu = $(selector);
  var button = menu.find('.burger-menu__button');
  var link = menu.find('.burger__menu_link');
  var overlay = menu.find('.burger-menu__overlay');
  button.on('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
  link.on('ckick', function () {
    return toggleMenu();
  });
  overlay.on('click', function () {
    return toggleMenu();
  });

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