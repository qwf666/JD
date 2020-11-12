let id = location.search.split("=")[1];
jQuery.getJSON("http://jx.xuzhixiang.top/ap/api/detail.php?id=" + id, function(json) {
    let oDetail = document.getElementById("detail");
    console.log(oDetail);
    oDetail.innerHTML = `
    <img src="${json.data.pimg}">
    <p>${json.data.pname}</p>
    <p>${json.data.pdesc}</p>
    <p>￥${json.data.pprice}</p>
    <div><span>-</span><input type="text" value="1"><span>+</span></div>
    <input type="button" value="加入购物车" id="addBtn">
`;
    let oBtn = document.getElementById("addBtn");
    console.log(oBtn);
    let minus = oDetail.getElementsByTagName("span")[0];
    let plus = oDetail.getElementsByTagName("span")[1];
    let oTxt = oDetail.getElementsByTagName("input")[0];
    jQuery(minus).click(function() {
        oTxt.value--;
        if (oTxt.value < 1) {
            oTxt.value = 1;
        }
    });
    jQuery(plus).click(function() {
        oTxt.value++;
    });

    jQuery(oTxt).change(function() {
        if (oTxt.value < 1) {
            oTxt.value = 1;
        }
    });

    let cart = new Cart();
    jQuery(oBtn).click(function() {
        cart.saveData(id, +oTxt.value);
        location.href = "cart.html";
    });
});