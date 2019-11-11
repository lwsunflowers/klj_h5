$(".companyList li .weui-flex").click(function(){
    if($(this).parent().hasClass("js_show")){
        $(this).parent().removeClass("js_show")
    }else{
        $(this).parent().addClass("js_show").siblings().removeClass("js_show");
    }
})
// 搜索框事件
$(function(){
    var $searchBar = $('#searchBar'),
        $searchResult = $('#searchResult'),
        $searchText = $('#searchText'),
        $searchInput = $('#searchInput'),
        $searchClear = $('#searchClear'),
        $searchCancel = $('#searchCancel');

    function hideSearchResult(){
        $searchResult.hide();
        $searchInput.val('');
    }
    function cancelSearch(){
        hideSearchResult();
        $searchBar.removeClass('weui-search-bar_focusing');
        $searchText.show();
    }

    $searchText.on('click', function(){
        $searchBar.addClass('weui-search-bar_focusing');
        $searchInput.focus();
    });
    $searchInput
        .on('blur', function () {
            if(!this.value.length) cancelSearch();
        })
        .on('input', function(){
            if(this.value.length) {
                $searchResult.show();
            } else {
                $searchResult.hide();
            }
        })
    ;
    $searchClear.on('click', function(){
        hideSearchResult();
        $searchInput.focus();
    });
    $searchCancel.on('click', function(){
        cancelSearch();
        $searchInput.blur();
    });
});
// 出现提示
function toast(mark){
    var $toast = $('#toast');
    if(mark){
        $('#toast .weui-toast__content').text(mark);
    }else{
        $('#toast .weui-toast__content').text("请检查表单内容");
    }

    if ($toast.css('display') != 'none') return;
    $toast.fadeIn(100);
    setTimeout(function () {
        $toast.fadeOut(100);
    }, 2000);
}