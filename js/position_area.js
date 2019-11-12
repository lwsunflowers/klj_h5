/**
 * 地图相关js
 * @type {BMap.Map}
 */
// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(112.561139,37.823765);
map.centerAndZoom(point, 14);
map.enableScrollWheelZoom(true);
// 编写自定义函数,创建标注
function addMarker(point){
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
}
// 多点标注
$.getJSON("../../json/position.json",function(positionJson){
    var markers = [];
    for (var i = 0; i < positionJson.length; i ++) {
        // 点位置的显示
        var point = new BMap.Point(positionJson[i].position[0],positionJson[i].position[1]);
        // 点的标注
        var marker = new BMap.Marker(point);  // 创建标注
        // 点聚合
        markers.push(marker);
        // 信息的显示
        var sContent =
            "<div class='page__bd page__bd_spacing mapContent'>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>车牌号码</div></div>" +
            "<div class='weui-flex__item'><div class='placeholder'>卫星时间</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>终端ID</div></div>" +
            "<div class='weui-flex__item'><div class='placeholder'>终端类型</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>行车速度</div></div>" +
            "<div class='weui-flex__item'><div class='placeholder'>脉冲速度</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>今日里程</div></div>" +
            "<div class='weui-flex__item'><div class='placeholder'>总里程数</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>行驶方向</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>车组名称</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>车辆状态</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>报警状态</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>司机姓名</div></div>" +
            "<div class='weui-flex__item'><div class='placeholder'>司机电话</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>插卡时间</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><div class='placeholder'>报警状态</div></div>" +
            "</div>" +
            "<div class='weui-flex'>" +
            "<div class='weui-flex__item'><a class='weui-btn weui-btn_mini weui-btn_default' href='../../pages/map/trail.html'>轨迹回放</a></div>" +
            "<div class='weui-flex__item'><a class='weui-btn weui-btn_mini weui-btn_default' href='../../pages/map/dynamic_trail.html'>动态轨迹</a></div>" +
            "<div class='weui-flex__item'><a class='weui-btn weui-btn_mini weui-btn_default' href='../../pages/map/sendMsg.html'>发送消息</a></div>" +
            "<div class='weui-flex__item'><a class='weui-btn weui-btn_mini weui-btn_default' onclick='voiceDialog()'>语音对讲</a></div>" +
            "<div class='weui-flex__item'><a class='weui-btn weui-btn_mini weui-btn_default' onclick='videoDialog()'>发送视频</a></div>" +
            "</div>" +
            "</div>";
        marker.addEventListener("click",addClickHandler(sContent,marker));//标注点点击事件
    }
    var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
});
function addClickHandler(content,marker){
    marker.addEventListener("click",function(e){
        openInfo(content,e)}
    );
}
function openInfo(content,e){
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMap.InfoWindow(content);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow,point); //开启信息窗口
}

//比例尺
var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT,offset: new BMap.Size(80, 60)});// 左上角，添加比例尺
var top_left_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT,offset: new BMap.Size(20, 60)});  //左上角，添加默认缩放平移控件
var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL,offset: new BMap.Size(20, 60)}); //右上角
map.addControl(top_left_control);
map.addControl(top_left_navigation);
map.addControl(top_right_navigation);

/**
 * 语音通话相关事件
 */
function voiceDialog(){
    $("#voiceDialog").fadeIn(200);
}
$(".voicedialogYes").click(function(){
    $("#voiceDialog").fadeOut(200);
});
$(".voicedialogCancle").click(function(){
    $("#voiceDialog").fadeOut(200);
});

/**
 * 视频通话相关事件
 */
function videoDialog(){
    $("#videoDialog").fadeIn(200);
}
$(".videodialogYes").click(function(){
    $("#videoDialog").fadeOut(200);
});
$(".voicedialogCancle").click(function(){
    $("#videodialogCancle").fadeOut(200);
});