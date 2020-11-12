$("#pop-up .footer input").click(function() {
    $("#pop-up").hide();
})
$("#zhuce").click(function() {
    $.ajax({
        type: "get",
        url: "http://jx.xuzhixiang.top/ap/api/reg.php",
        data: {
            username: $("#account").val(),
            password: $("#password").val()
        },
        dataType: "json",
        success: function(response) {
            if (response.code == 1) {
                alert("注册成功")
                window.location.href = "login.html";
            } else {
                alert("用户名已注册")
            }
        },
    });
})

/* 密码框验证 */
//密码 参数不能为空
var reg1 = /\s/g;
var hint = document.createElement("p");
$("#password").change(function() {
    $("#item div")[2].appendChild(hint);
    console.log($("#item div")[3]);
    var val1 = $("#password").val();
    if (reg1.test(val1)) {
        hint.innerHTML = "参数不能为空";
    } else {
        hint.innerHTML = "格式正确";
    }
});