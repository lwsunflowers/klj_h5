$(function(){
    var tel=$("#tel").val();
    var verCode=$("#verCode").val();
    var passWord=$("#passWord").val();
    var surePassWord=$("#surePassWord").val();
    $("#submitButton").click(function(){
        if(tel==""||verCode==""||passWord==""||surePassWord==""){
            toast();
        }
    });
    $("#getCode").click(function(){
        if(tel==""){
            toast("请输入电话号码");
        }
    });
});
