var $loadingToast = $('#loadingToast');
function ajaxRequest(requestMethod,url,data){
    $.ajax({
        type: requestMethod,
        url: url,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        beforeSend:function(){
            if ($loadingToast.css('display') != 'none') return;
            $loadingToast.fadeIn(100);
        },
        async:true,
        data:data,
        dataType: "json",
        success: function(data){
            console.log(data);
            $loadingToast.fadeOut(100);
            return data;
        },
        error:function(e){
            console.log(e);
            $loadingToast.fadeOut(100);
        }
    });
}