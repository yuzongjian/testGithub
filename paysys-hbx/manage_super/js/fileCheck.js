$(document).ready(function() {
    layui.use('layer', function(){
        //这里得加个延迟，因为按钮是要拿到数据后渲染的 要有个缓冲期
        //之后后台传数据可能会延迟更长，得调整下
        setTimeout(function(){
            var layer = layui.layer;
            var details_btns = $('.details-btn');
            console.log(details_btns.length);
            for(var i=0; i < details_btns.length; i++) {
                $(details_btns[i]).click(function() {
                    console.log("弹窗");
                    layer.open({
                        type: 1,
                        title: ['微众银行进件','text-align: center; background: white; border: none;font-size: .2rem;line-height: .3rem; padding-top: .4rem'],
                        area: ['auto', 'auto'],
                        content: $('#layer_form'),
                        moveType: 1, //拖拽模式，0或者1
                        success: function(layero, index){
                            $('#layer_form').show();
                            //给不符合的按钮设置一个点击事件
                            //弹窗出详情页
                            $('#inconformity_btn').click(function(event) {
                                /* Act on the event */
                                layer.open({
                                    type: 1,
                                    title: ['输入不符合要求的详情','text-align: center;background: white; border: none;font-size: .2rem;line-height: .3rem; padding-top: .4rem'],
                                    area: ['4rem', 'auto'],
                                    // content: '<textarea placeholder="请输入内容" class="layui-textarea"></textarea>'
                                    content: '<form style="padding: .1rem .2rem .3rem .2rem; text-align: center"><textarea placeholder="请输入内容" class="layui-textarea" style="height: 3rem;margin-bottom: .2rem"></textarea><button type="submit" class="layui-btn layui-btn-normal">确认</button></form>'
                                });
                            });
                        },
                        end: function() {
                            $('#layer_form').hide();
                        }
                    });
                });
            }
        },500);
    });
});