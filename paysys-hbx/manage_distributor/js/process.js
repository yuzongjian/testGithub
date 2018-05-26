//渠道商确认数据-确认
/*$('#distributor_confirm_data_btn').click(function() {
    $.ajax({
        url: 'test.json',
        type: 'POST',
        data: 1,
        dataType: 'JSON',
        success: function() {
            console.log('渠道商确认数据无误');
        },
        error: function() {
            console.log('渠道商确认数据无误的动作状态提交失败');
        }
    })
})*/

//渠道商确认数据-数据不符时弹窗
/*$('#error_submit_btn').click(function() {
    layer.prompt({
        formType: 2,
        title: '请填写错误信息',
        area: ['4rem','2rem'] //自定义文本域宽高
    },function(value,index,elem) {
        //把错误信息提交给后台
        $.ajax({
            url: 'test.json',
            type: 'POST',
            data: value,
            dataType: 'JSON',
            success: function(data) {
                console.log('成功提交错误信息');
            },
            error: function() {
                layer.msg('请求失败 请稍后重试',{
                    icon: 5,
                    time: 3000,//3s后自动关闭
                    shift: 6//抖动效果
                });
            }
        })
        layer.close(index);//关闭弹窗
    });
})*/

//渠道商开具发票-上传发票照片
//执行实例
/*var uploadInst = upload.render({
    elem: '#send_pic_btn' //绑定元素
    ,url: '/upload/' //上传接口
    ,done: function(res){
      //上传完毕回调
    }
    ,error: function(){
      //请求异常回调
    }
});*/

//渠道商确认收款
/*$('#collect_money_btn').click(function() {
    if ($('#collect_money_btn').html() != '已确认') {

        layer.confirm('确认收款吗？', function(index){
            $('#collect_money_btn').html('已确认');
            $('#collect_money_btn').css('cursor','default');
            layer.close(index);
        });

        //告诉后台状态
        $.ajax({
            url: 'test.json',
            type: 'POST',
            data: 1,
            dataType: 'JSON',
            success: function() {
                console.log('渠道商确认收款');
            },
            error: function() {
                console.log('渠道商确认收款的动作状态提交失败');
            }
        })
    }
    
})*/