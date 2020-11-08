/* 轮播1 */
var swiper1 = new Swiper('#ba-left-slide', {
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