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
swiper2.el.onmouseover = function() {
    swiper2.autoplay.stop();
}
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
var swiper3 = new Swiper('#ba-bottom-center-slide', {
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
swiper3.el.onmouseover = function() {
    swiper3.autoplay.stop();
}
swiper3.el.onmouseout = function() {
        swiper3.autoplay.start();
    }
    /* 轮播四单条显示 */
var swiper4 = new Swiper('#ba-bottom-right-slide', {
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
swiper4.el.onmouseover = function() {
    swiper4.autoplay.stop();
}
swiper4.el.onmouseout = function() {
        swiper4.autoplay.start();
    }
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
recommends.el.onmouseover = function() {
    recommends.autoplay.stop();
}
recommends.el.onmouseout = function() {
        recommends.autoplay.start();
    }
    /* 轮播异形的slide(new-product) */
var swiper5 = new Swiper('#new-product', {
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
swiper5.el.onmouseover = function() {
    swiper5.autoplay.stop();
}
swiper5.el.onmouseout = function() {
    swiper5.autoplay.start();
}



/* 购物车 */
jQuery.getJSON("http://jx.xuzhixiang.top/ap/api/productlist.php?uid=44016", function(json) {
    // alert("JSON Data: " + json.data[0].pname);
    let oPordList = document.getElementById("prodList");
    let str = "";
    for (let id in json.data) {
        str += `
            <li data-id="${json.data[id].pid}">
                <a href="detail.html?id=${json.data[id].pid}"><img src="${json.data[id].pimg}"></a>
                <p>${json.data[id].pname}</p>
                <p>￥${json.data[id].pprice}</p>
                <input type="button" value="加入购物车" data-id="${json.data[id].pid}">
            </li>
            `;
    }
    oPordList.innerHTML = str;
    let cart = new Cart();
    let aInput = document.querySelectorAll("li");
    for (let i = 0; i < aInput.length; i++) {
        aInput[i].onclick = function() {
            let id = this.getAttribute("data-id");
            console.log(id);
            cart.saveData(id, 1);
        }
    }
});



/* 楼梯 */
$(window).scroll(function() {
    if ($(window).scrollTop() >= 400) {
        $("#anchor").css({
            "display": "block"
        })
    } else {
        $("#anchor").css({
            "display": "none"
        })
    }
})
$(window).scroll(function() {
    $(".skip").eq(Math.floor($(window).scrollTop() / ($(".floors").outerHeight()))).css({
        "background": "red",
        "color": "white"
    });
    $(".skip").not($(".skip")[Math.floor($(window).scrollTop() / ($(".floors").outerHeight()))]).css({
        "background": "",
        "color": "black"
    });
});
$(".skip").click(function() {
    $("html,body").animate({
        "scrollTop": $(".floors").outerHeight() * $(this).index()
    }, 500);
});

$(".start").click(function() {
    $("html,body").animate({
        "scrollTop": 0
    }, 500);
});