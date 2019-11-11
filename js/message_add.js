// 接收人
$("#reciever").click(function(){
    weui.picker([{
        label: '全部用户',
        value: 0
    }, {
        label: '整队用户',
        value: 1
    }, {
        label: '单独用户',
        value: 2
    }], {
        onChange: function (result) {
            console.log(result);
            $("#reciever").val(result[0].label)
        },
        onConfirm: function (result) {
            console.log(result);
        }
    });
});
// 发送时间
$("#sendTime").click(function(){
    weui.picker([{
        label: '立即发送',
        value: 0
    }, {
        label: '定时发送',
        value: 1
    }], {
        onChange: function (result) {
            console.log(result);
            $("#sendTime").val(result[0].label)
        },
        onConfirm: function (result) {
            console.log(result);
        }
    });
});
// 发送次数
$("#sendNum").click(function(){
    weui.picker([{
        label: '1',
        value: 0
    }, {
        label: '2',
        value: 1
    }, {
        label: '3',
        value: 2
    }], {
        onChange: function (result) {
            console.log(result);
            $("#sendNum").val(result[0].label)
        },
        onConfirm: function (result) {
            console.log(result);
        }
    });
});
//表单验证
var title=$("#title").val();
var content=$("#content").val();
var reciever=$("#reciever").val();
var sendTime=$("#sendTime").val();
var sendNum=$("#sendNum").val();
$("#submitButton").click(function(){
    if(title==""||content==""||reciever==""||sendTime==""||sendNum==""){
        toast();
    }
});