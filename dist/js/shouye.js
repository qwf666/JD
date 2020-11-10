/* 轮播1 */
var swiper1 = new Swiper('#ba-left-slide', {
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//鼠标进入停止自动切换
swiper1.el.onmouseover = function() {
    swiper1.autoplay.stop();
}

//鼠标离开开始自动切换
swiper1.el.onmouseout = function() {
    swiper1.autoplay.start();
}

/* 轮播2 */

var swiper2 = new Swiper('#ba-right-slide', {
    loop: true,
    autoplay: {
        delay: 8000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    spaceBetween: 30,
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//鼠标进入停止自动切换
swiper2.el.onmouseover = function() {
    swiper2.autoplay.stop();
}

//鼠标离开开始自动切换
swiper2.el.onmouseout = function() {
    swiper2.autoplay.start();
}

/* 京东秒杀 */
var oDjs = document.querySelector(".djs");
var aSpan = oDjs.children;

function getDiffDate() {
    var date1 = new Date();
    var date2 = new Date("2020/09/25 18:00:00");
    var ss = Math.abs((date2 - date1) / 1000);
    var day = Math.floor(ss / 24 / 3600);
    var hour = Math.floor(ss / 3600 % 24);
    var minute = Math.floor(ss / 60 % 60);
    var second = Math.floor(ss % 60);
    aSpan[0].innerText = hour;
    aSpan[1].innerText = minute;
    aSpan[2].innerText = second;
}
setInterval(getDiffDate, 1000);

/* 轮播三长条显示 */
var swiper = new Swiper('#ba-bottom-center-slide', {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 4,
    autoplay: {
        delay: 8000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* 轮播四单条显示 */
var swiper = new Swiper('#ba-bottom-right-slide', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/* 轮播走马灯 */
var recommends = new Swiper('#recommends', {
    slidesPerView: 5,
    speed: 3000,
    loop: true,
    spaceBetween: 0,
    // loopFillGroupWithBlank: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    autoplay: {
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
})

/* 轮播异形的slide(new-product) */
var swiper = new Swiper('#new-product', {
    slidesPerView: 3,
    spaceBetween: 100,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});