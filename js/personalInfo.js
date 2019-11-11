$(function(){
    var $actionsheet = $('#actionsheet');
    var $imgMask = $('#imgMask');

    function hideActionSheet() {
        $actionsheet.removeClass('weui-actionsheet_toggle');
        $imgMask.fadeOut(200);
    }

    $imgMask.on('click', hideActionSheet);
    $('#actionsheetCancel').on('click', hideActionSheet);
    $(".personalImg_cell").on("click", function(){
        $actionsheet.addClass('weui-actionsheet_toggle');
        $imgMask.fadeIn(200);
    });
});