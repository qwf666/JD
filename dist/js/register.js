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