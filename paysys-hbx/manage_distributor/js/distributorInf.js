$(document).ready(function() {
    //JavaScript代码区域
    layui.use('element', function(){
        var element = layui.element;
    });
    //form表单
    layui.use('form', function(){
        var form = layui.form;
      });
    //弹出层
    layui.use('layer', function(){
      var layer = layui.layer;
      $('#payment_add').click(function(){
          layer.open({
          type: 1,
          title: '新增提现方式',
          area: ['400px', '400px'],
          content: $('#payment_add_layer_form'),
          moveType: 1, //拖拽模式，0或者1
          success: function(layero, index){
              console.log(layero, index);
              $('#payment_add_layer_form').show();
          },
          end: function() {
              $('#payment_add_layer_form').hide();
              // window.location.href = 'distributorInf.html';
          }
      });
      });

    //获取页面上的收款方式item
    var payment_items = $('.payment-item');
    console.log(payment_items.length);

    //获取模板 这是一个文本 我要让一个元素去包装
    //发现用元素去包裹会有bug：只有最后一个item被添加了
    //这里选择直接 innerHTML += temp 去解决
    var btn_temp = document.getElementById('btn_temp').innerHTML   //去掉空白符
                                    .replace(/^\s*/,'')
                                    .replace(/\s*$/,'');

    //创建DOM节点
    //有bug 不需要这个了
    // var btn_temp_span = document.createElement('span');
    // btn_temp_span.innerHTML = btn_temp;

    //获取编辑按钮
    var edit = $('#payment_edit');
    var is_edit = false;
    //点击
    edit.click(function(){
        if(is_edit == false) {
            for(var i=0; i < payment_items.length; i++) {
                if(!$(payment_items[i]).is('.payment-item-active')) {
                    payment_items[i].innerHTML += btn_temp;
                }
            }
            //给每个按钮增加事件
            var btns_use = $('.payment-use');
            for(var j=0; j < btns_use.length; j++) {
                $(btns_use[j]).click(function() {
                    layer.open({
                      type: 1,
                      title: '是否使用该收款方式',
                      area: ['300px', '200px'],
                      content: '<form style="text-align:center;margin-top: 50px"><button type="submit" class="layui-btn layui-btn-normal">确认使用</button></form>',
                      moveType: 0, //拖拽模式，0或者1
                    });
                });
            }
            var btns_del = $('.payment-del');
            for(var j=0; j < btns_del.length; j++) {
                $(btns_del[j]).click(function() {
                    layer.open({
                      type: 1,
                      title: '是否确定删除',
                      area: ['300px', '200px'],
                      content: '<form style="text-align:center;margin-top: 50px"><button type="submit" class="layui-btn layui-btn-danger">确认删除</button></form>',
                      moveType: 0, //拖拽模式，0或者1
                    });
                });
            }
            is_edit = true;
        } else {
            var btns_use = $('.payment-use');
            var btns_del = $('.payment-del');
            for( var j=0; j < btns_del.length; j++) {
                $(btns_del[j]).remove();
                $(btns_use[j]).remove();
            }
            is_edit = false;
        }

    });
}); //layer的层
});