/**
 * 地图相关js
 * @type {BMap.Map}
 */
var map = new BMap.Map("allmap");
map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);

var myP1 = new BMap.Point(116.380967,39.913285);    //起点
var myP2 = new BMap.Point(116.424374,39.914668);    //终点
var myIcon = new BMap.Icon("../../images/car.png", new BMap.Size(32, 70), {    //小车图片
    //offset: new BMap.Size(0, -5),    //相当于CSS精灵
    imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
});
var driving2 = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});    //驾车实例
driving2.search(myP1, myP2);    //显示一条公交线路

window.run = function (){
    var driving = new BMap.DrivingRoute(map);    //驾车实例
    driving.search(myP1, myP2);
    driving.setSearchCompleteCallback(function(){
        var pts = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组
        var paths = pts.length;    //获得有几个点

        var carMk = new BMap.Marker(pts[0],{icon:myIcon});
        map.addOverlay(carMk);
        i=0;
        function resetMkPoint(i){
            carMk.setPosition(pts[i]);
            if(i < paths){
                setTimeout(function(){
                    i++;
                    resetMkPoint(i);
                },100);
            }
        }
        setTimeout(function(){
            resetMkPoint(5);
        },100)

    });
}

setTimeout(function(){
    run();
},1500);
/**
 * 滑块,控制播放速度
 */
$(function(){
    var $sliderTrack = $('#sliderTrack'),
        $sliderHandler = $('#sliderHandler'),
        $sliderValue = $('#sliderValue');

    var totalLen = $('#sliderInner').width(),
        startLeft = 0,
        startX = 0;

    $sliderHandler
        .on('touchstart', function (e) {
            startLeft = parseInt($sliderHandler.css('left')) * totalLen / 100;
            startX = e.changedTouches[0].clientX;
        })
        .on('touchmove', function(e){
            var dist = startLeft + e.changedTouches[0].clientX - startX,
                percent;
            dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
            percent =  parseInt(dist / totalLen * 100);
            $sliderTrack.css('width', percent + '%');
            $sliderHandler.css('left', percent + '%');
            if(percent>55){
                $sliderValue.text("快");
            }else if(percent<45){
                $sliderValue.text("慢");
            }else{
                $sliderValue.text("正常");
            }
            $("#percentData").text(percent);
        });
});
/**
 * 弹框
 */
$(function(){
    $("#choose").click(function(){
        if($('#actionsheet').hasClass('weui-actionsheet_toggle')){
            $('#actionsheet').removeClass('weui-actionsheet_toggle');
            $("#choose").html("选择")
        }else{
            $('#actionsheet').addClass('weui-actionsheet_toggle');
            $("#choose").html("取消");
        }

    });
});
/**
 * 时间选择
 */
$('#beginDate').on('click', function () {
    var _this = this;
    weui.datePicker({
        start: 1990,
        end: new Date().getFullYear(),
        onConfirm: function (result) {
            $('.ma_expect_date_picker .weui-picker').on('animationend webkitAnimationEnd', function() {
                show_expect_time_picker(_this, result);
            });
        },
        title: '开始时间',
        id: 'ma_expect_date',
        className: 'ma_expect_date_picker'
    });
});
// 结束时间
$('#endDate').on('click', function () {
    var _this = this;
    weui.datePicker({
        start: 1990,
        end: new Date().getFullYear(),
        onConfirm: function (result) {
            $('.ma_expect_date_picker .weui-picker').on('animationend webkitAnimationEnd', function() {
                show_expect_time_picker(_this, result);
            });
        },
        title: '结束时间',
        id: 'ma_expect_date',
        className: 'ma_expect_date_picker'
    });
});

// -----------------------二级调用：时间
var hours = [],
    minites = [],
    symbol = [{ label: ':', value: 0 }];
function show_expect_time_picker(_this, date) {
    var date = date[0].label + date[1].label + date[2].label;
    if (!hours.length) {
        for (var i = 0; i< 24; i++) {
            var hours_item = {};
            hours_item.label = ('' + i).length === 1 ? '0' + i : '' + i;
            hours_item.value = i;
            hours.push(hours_item);
        }
    }
    if (!minites.length) {
        for (var j= 0; j < 60; j++) {
            var minites_item = {};
            minites_item.label = ('' + j).length === 1 ? '0' + j : '' + j;
            minites_item.value = j;
            minites.push(minites_item);
        }
    }

    weui.picker(hours, symbol, minites, {
        defaultValue: [new Date().getHours()+1, 0, 0],
        onConfirm: function(result) {
            var time = result[0].label + ':' + result[2].label;
            var expect_date = date + ' ' + time;
            _this.value=expect_date;
        },
        id: 'ma_expect_time'
    });
}
var car=$("#car").val();
var beginDate=$("#beginDate").val();
var endDate=$("#endDate").val();
$('#submitButton').on('click', function () {
    var percentData=$("#percentData")[0].innerText;
    if(car==""||beginDate==""||endDate==""||percentData==""){
        toast();
    }
});