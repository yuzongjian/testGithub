$(document).ready(function(){
    //饼状图
    var my_caky = echarts.init(document.getElementById('caky'));
    //折线图
    var my_broken_line = echarts.init(document.getElementById('broken_line'));
     $.ajax({
        url: "http://localhost:3000/api/tableDetails",
        type: 'POST',
        dataType: 'json',
        success: function(mockData) {
            console.log(mockData);
            my_caky.setOption({
            series: [
                 {
                     name: '支付比例',
                     type: 'pie',
                     radius: '55%',
                     // data: [
                     //     {value: 100, name: '支付宝:50%营收：80000.00'},
                     //     {value: 100, name: '微信:50%营收：80000.00'}
                     // ]
                     // mockData的caky数据直接给他
                     data: mockData.cakyData
                 }
             ]
            });

            //折线图的数据
            var broke_line_option = {
                tooltip: {
                    trigger: 'axis'
                },
                //名称定义
                legend: {
                    data:mockData.broken_lineData.name
                },
                //位置大小定义
                grid: {

                    left: '0%',
                    right: '4%',
                    bottom: '5%',
                    containLabel: true
                },
                //是否允许下载图表
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                //X轴数据
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['01 Jan','01 Mar','01 May','01 Jul','01 Sep','01 Nov','01 Dec']
                },
                yAxis: {
                    type: 'value'
                },
                //主要数据
                series: mockData.broken_lineData
            };
            my_broken_line.setOption(broke_line_option);
        }
     })

});
