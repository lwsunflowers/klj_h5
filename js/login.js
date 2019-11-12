$(function(){
    $("#submitButton").click(function(){
        var userName=$("#userName").val();
        var userPassword=$("#userPassword").val();
        if(userName==""||userPassword==""){
            toast();
            // window.location.href="index.html";
        }else{
            // ajaxRequest("post","/url",{userName:userName});
        }
    });
});
