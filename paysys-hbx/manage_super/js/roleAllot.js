$(document).ready(function() {
    layui.use('layer', function(){
        //这里得加个延迟，因为按钮是要拿到数据后渲染的 要有个缓冲期
        //之后后台传数据可能会延迟更长，得调整下
        setTimeout(function() {
            var layer = layui.layer;
            var edit_btns = $('.edit-btns');
            for(var i=0; i < edit_btns.length; i++) {
                $(edit_btns[i]).click(function(event) {
                    layer.open({
                        type: 1,
                        title: ['编辑信息','text-align: center; background: white; border: none;font-size: .2rem;line-height: .3rem; padding-top: .4rem'],
                        area: ['400px', '400px'],
                        content: $('#edit_layer'),
                        moveType: 1, //拖拽模式，0或者1
                        success: function() {
                            $('#edit_layer').show();
                        },
                        btn: '修改',
                        btnAlign: 'c',
                        //修改按钮的回调事件
                        yes: function() {

                        },
                        end: function() {
                            $('#edit_layer').hide();
                        }
                    });
                });
            }
        },200);

        //添加角色的弹窗
        $('#add_role_btn').click(function(event) {
            layer.open({
                type: 1,
                title: ['编辑信息','text-align: center; background: white; border: none;font-size: .2rem;line-height: .3rem; padding-top: .4rem'],
                area: ['450px', '550px'],
                content: $('#add_layer'),
                moveType: 1, //拖拽模式，0或者1
                success: function() {
                    $('#edit_layer').show();
                },
                btn: '添加',
                btnAlign: 'c',
                //修改按钮的回调事件
                yes: function() {

                },
                end: function() {
                    $('#edit_layer').hide();
                }
            });
        });
    });
});