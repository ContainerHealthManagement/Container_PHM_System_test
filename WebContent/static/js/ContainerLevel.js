document.write("<script language='javascript' src='static/AdminLTE-2.4.0-rc/bower_components/jquery/dist/jquery.min.js'></script>");
document.write("<script language='javascript' src='static/AdminLTE-2.4.0-rc/echarts/echarts3.6.2.js'></script>");
document.write("<script language='javascript' src='static/AdminLTE-2.4.0-rc/echarts/china.js'></script>");
document.write("<script language='javascript' src='static/js/readdata.js'></script>");
$.ajax({
			type : "post",
			async : false,
			url : "ContainerlevelAction",
			data : {},
			dataType : "json",
			success : function(data) {
				var myChart = echarts.init(document.getElementById('ContainerLevel'));
				var convertData = function(item){
					res = [];
					for(i=0; i<item.length; i++){
						number = new Array(6);
						dataitem = item[i];
						number[0] = dataitem.fhcs;
						number[1] = dataitem.fhlc;
						number[2] = dataitem.fhzl;
						number[3] = dataitem.xlcs;
						number[4] = dataitem.xlfy;
						number[5] = dataitem.yhdgl;
						if(dataitem.level == 1){
							res.push({
								value:number,
								name:'第一阶段'
							})
						}
						if(dataitem.level == 2){
							res.push({
								value:number,
								name:'第二阶段'
							})
						}
						if(dataitem.level == 3){
							res.push({
								value:number,
								name:'第三阶段'
							})
						}
						if(dataitem.level == 4){
							res.push({
								value:number,
								name:'第四阶段'
							})
						}
						if(dataitem.level == 5){
							res.push({
								value:number,
								name:'第五阶段'
							})
						}
						if(dataitem.level == 6){
							res.push({
								value:number,
								name:'第六阶段'
							})
						}
						if(dataitem.level == 7){
							res.push({
								value:number,
								name:'第七阶段'
							})
						}
						if(dataitem.level == 8){
							res.push({
								value:number,
								name:'第八阶段'
							})
						}
						if(dataitem.level == 9){
							res.push({
								value:number,
								name:'第九阶段'
							})
						}
						if(dataitem.level == 10){
							res.push({
								value:number,
								name:'第十阶段'
							})
						}
						if(dataitem.level == 11){
							res.push({
								value:number,
								name:'第十一阶段'
							})
						}
						if(dataitem.level == 12){
							res.push({
								value:number,
								name:'第十二阶段'
							})
						}
						if(dataitem.level == 13){
							res.push({
								value:number,
								name:'第十三阶段'
							})
						}
						if(dataitem.level == 14){
							res.push({
								value:number,
								name:'第十四阶段'
							})
						}
						if(dataitem.level == 15){
							res.push({
								value:number,
								name:'第十五阶段'
							})
						}

					}
					console.log(res);
					return res;
				}
				option = {
					    title: {
					        text: '集装箱全生命周期阶段特征图',
					        textStyle:{
					        	color:'#FFF68F',
					        	fontStyle:'normal',
					        	fontSize:25
					        },
					        top:20,
					        left:70
					    },
					    tooltip: {},
					    legend: {
					        data: ['第一阶段', '第二阶段', '第三阶段', '第四阶段', '第五阶段', '第六阶段', '第七阶段', '第八阶段', '第九阶段', '第十阶段', '第十一阶段', '第十二阶段', '第十三阶段','第十四阶段','第十五阶段'],
					        orient:'vertical',
					        align:'right',
					        right:100,
					        top:80,
					        selectedMode:'multiple',
					        textStyle:{
					        	color:'#FFF68F'
					        }
					    },
					    radar: {
					        // shape: 'circle',
					        name: {
					            textStyle: {
					                color: '#FFF68F',
					                backgroundColor: '#999',
					                borderRadius: 3,
					                padding: [3, 5],
					                fontStyle:'normal'
					           }
					        },
					        indicator: [
					           { name: '已发货次数', max: 200},
					           { name: '已运输里程', max: 210000},
					           { name: '已发货重量', max: 14000000},
					           { name: '已修理次数', max: 13},
					           { name: '已花费修理费用', max: 10000},
					           { name: '已发送货物吨公里', max: 9000}
					        ]
					    },
					    series: [{
					        name: '集装箱生命周期阶段特征',
					        type: 'radar',
					        // areaStyle: {normal: {}},
					        data : convertData(data.result)
					    }]
					};
				myChart.setOption(option);
			},
			error:function(){
				alert("系统异常，请稍后重试！");
			}
			})

	