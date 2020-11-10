$(".btn").click(function() {
    $.ajax({
        type: "get",
        url: "http://jx.xuzhixiang.top/ap/api/login.php",
        data: {
            username: $("#loginname").val(),
            password: $("#password").val()
        },
        dataType: "json",
        success: function(response) {
            if (response.code == 1) {
                alert("登陆成功")
                window.location.href = "shouye.html";
            } else {
                alert("用户名密码错误")
            }
        },
    });
})