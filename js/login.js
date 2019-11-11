$(function(){
    $("#submitButton").click(function(){
        var userName=$("#userName").val();
        var userPassword=$("#userPassword").val();
        console.log(userName)
        if(userName==""||userPassword==""){
            toast();
        }
    });
});
