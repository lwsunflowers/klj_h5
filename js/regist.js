$(function(){
    var userName=$("#userName").val();
    var tel=$("#tel").val();
    var verCode=$("#verCode").val();
    var passWord=$("#passWord").val();
    var surePassWord=$("#surePassWord").val();
    $("#weuiAgreeCheckbox").click(function(){
        if($('#weuiAgreeCheckbox').is(':checked')){
            $("#submitButton").removeClass("weui-btn_disabled");
        }
        else{
            $("#submitButton").addClass("weui-btn_disabled")
        }
    });
    $("#submitButton").click(function(){
        if(userName==""||tel==""||verCode==""||passWord==""||surePassWord==""){
            toast();
        }
    });
    $("#getCode").click(function(){
        if(tel==""){
            toast("请输入正确的电话号码");
        }
    });
});
