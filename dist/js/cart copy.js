function Cart() {
    console.log(this);
    this.showData();
}
// 存到购物车
Cart.prototype.saveData = function(id, num) {
    jQuery.ajax({
        type: "get",
        url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
        data: {
            uid: 44016,
            pid: id,
            pnum: num
        },
        dataType: "json",
        success: function(response) {
            alert(response.msg);
        }
    });
}

// 在购物车页面展示
Cart.prototype.showData = function(id) {
    jQuery.getJSON("http://jx.xuzhixiang.top/ap/api/cart-list.php?id=44016", (json) => {
        let str = "";
        for (let id in json.data) {
            str += `<li data-id="${json.data[id].pid}">
            <input type="checkbox" class="ck">
            <img src="${json.data[id].pimg}">
            <span>${json.data[id].pname}</span>
            <span class="perPrice">${json.data[id].pprice}</span>
            <span class="minus">-</span>
            <input type="text" value="${json.data[id].pnum}" class="num">
            <span class="plus">+</span>
            <span class="perTotalPrice">${json.data[id].pprice*json.data[id].pnum}</span>
            <span class="del">x</span>
        </li>`;
        }
        this.oCartList = document.getElementById(id);
        jQuery(this.oCartList).html(str);
        //全选
        let checkAll = document.getElementById("checkAll");
        this.list = document.querySelectorAll("li");
        this.cks = document.querySelectorAll(".ck");
        this.perPrice = document.querySelectorAll(".perPrice");
        this.minus = document.querySelectorAll(".minus");
        this.num = document.querySelectorAll(".num");
        this.plus = document.querySelectorAll(".plus");
        this.perTotalPrice = document.querySelectorAll(".perTotalPrice");
        this.del = document.querySelectorAll(".del");

        checkAll.onclick = () => {
                //让所有单个复选框的选中状态和全选复选框的状态一致
                for (let i = 0; i < this.cks.length; i++) {
                    this.cks[i].checked = checkAll.checked;
                }
                this.getTotalPrice(); //计算总价
            }
            //在点击单个复选框时，判断选中的数量和总数量是否相同
        for (let i = 0; i < this.cks.length; i++) {
            this.cks[i].onclick = () => {
                var count = 0; //计数
                for (let j = 0; j < this.cks.length; j++) {
                    if (this.cks[j].checked) {
                        count++;
                    }
                }
                if (count == this.cks.length) {
                    checkAll.checked = true;
                } else {
                    checkAll.checked = false;
                }
                this.getTotalPrice(); //计算总价
            }
        }

        for (let i = 0; i < this.minus.length; i++) {
            //减
            this.minus[i].onclick = () => {
                    this.num[i].value--;
                    if (this.num[i].value < 1) {
                        this.num[i].value = 1;
                    }
                    this.updateData(i);
                }
                //加
            this.plus[i].onclick = () => {
                    this.num[i].value++;
                    this.updateData(i);
                }
                //改input
            this.num[i].onchange = () => {
                    if (this.num[i].value < 1) {
                        this.num[i].value = 1;
                    }
                    this.updateData(i);
                }
                //删除
            this.del[i].onclick = () => {
                this.removeData(i);
                this.getTotalPrice();
            }
        }
    });
}

// 更新数据
Cart.prototype.updateData = function(i) {
    //改单个总价
    this.perTotalPrice[i].innerText = this.num[i].value * this.perPrice[i].innerText;
    //改总价
    this.getTotalPrice();
    //改购物车数据
    let id = this.list[i].getAttribute("data-id");
    this.saveData(id, +this.num[i].value);
}

// 得到总价
Cart.prototype.getTotalPrice = function() {
    let totalPrice = document.getElementById("totalPrice");
    console.log(totalPrice);
    let price = 0;
    for (let i = 0; i < this.cks.length; i++) {
        if (this.cks[i].checked) {
            price += +this.perTotalPrice[i].innerText;
        }
    }
    totalPrice.innerText = price;
}

// 删除数据
Cart.prototype.removeData = function(i) {
    let id = this.list[i].getAttribute("data-id");
    this.oCartList.removeChild(this.list[i]); //删节点
    this.cks[i].checked = false;
    delete this.cartDatas[id]; //删数据
    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas));
}