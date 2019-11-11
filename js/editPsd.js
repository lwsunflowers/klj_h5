$(function(){
    var oldPsd=$("#oldPsd").val();
    var newPsd=$("#newPsd").val();
    var surePsd=$("#surePsd").val();
    $("#submitButton").click(function(){
        if(oldPsd==""||newPsd==""||surePsd==""){
            toast();
        }
    });
});