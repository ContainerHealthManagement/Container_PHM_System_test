document.write("<script language='javascript' src='static/AdminLTE-2.4.0-rc/bower_components/jquery/dist/jquery.min.js'></script>");
document.write("<script language='javascript' src='static/AdminLTE-2.4.0-rc/echarts/echarts3.6.2.js'></script>");
document.write("<script language='javascript' src='static/AdminLTE-2.4.0-rc/echarts/china.js'></script>");
document.write("<script language='javascript' src='static/js/readdata.js'></script>");

	function btn(){
		var xhdmnumber = $("#xhdm").val();
			$.ajax({
				type:"post",
				url:"ContainerAction",
				data:{
					xhdmnumber:xhdmnumber
				},
				dataType:"json",
				success:function(data){
					console.log(data);
					// 基于准备好的dom，初始化echarts实例
					var myChart = echarts.init(document.getElementById('trajectory'));

    	            geoCoordMap = {
    	            		'乐山':[103.760824,29.600958],
    	            		'库尔勒':[85.709418,41.7055],
    	            		'天津港':[117.749818,39.052435],
    	            		'乌西':[95.468519,37.844812],
    	            		'沈阳':[123.432791,41.808645],
    	            		'漯河':[114.046061,33.576279],
    	            		'八里':[118.170494,24.477038],
    	            		'佛山东':[113.134026,23.035095],
    	            		'佛山东':[113.134026,23.035095],
    	            		'佛山东':[113.134026,23.035095],
    	            		'佛山东':[113.134026,23.035095],
    	            		'圃田西':[113.83077,34.741814],
    	            		'景德镇东':[117.186523,29.303563],
    	            		'北京东':[116.395645,39.929986],
    	            		'长沙北':[112.979353,28.213478],
    	            		'厦门高崎':[118.117034,24.554358],
    	            		'绵阳':[104.705519,31.504701],
    	            		'常州':[119.981861,31.771397],
    	            		'滨江西':[120.19237,30.187588],
    	            		'梅州':[116.126403,24.304571],
    	            		'乌西':[95.468519,37.844812],
    	            		'石南':[116.905542,39.300272],
    	            		'昆明东':[102.714601,25.049153],
    	            		'重庆南':[106.530635,29.544606],
    	            		'滨江西':[120.19237,30.187588],
    	            		'宜春':[114.400039,27.81113],
    	            		'泉州东':[118.600362,24.901652],
    	            		'绵阳':[104.705519,31.504701],
    	            		'辽阳':[123.172451,41.273339],
    	            		'永济':[110.488949,34.894672],
    	            		'石南':[116.905542,39.300272],
    	            		'漳州北':[117.676205,24.517065],
    	            		'洛阳东':[112.447525,34.657368],
    	            		'城厢':[118.954443,25.433375],
    	            		'城厢':[118.954443,25.433375],
    	            		'云浮':[112.050946,22.937976],
    	            		'城厢':[118.954443,25.433375],
    	            		'八景':[116.990717,36.660766],
    	            		'安顺':[105.92827,26.228595],
    	            		'团结村':[120.95923,31.378909],
    	            		'温州西':[120.690635,28.002838],
    	            		'绿化':[117.564887,31.372141],
    	            		'常州':[119.981861,31.771397],
    	            		'王家营西':[116.487279,40.864157],
    	            		'湛江':[110.365067,21.257463],
    	            		'鸣李':[112.690073,37.742303],
    	            		'安顺':[105.92827,26.228595],
    	            		'辽阳':[123.172451,41.273339],
    	            		'白银市':[104.171241,36.546682],
    	            		'大朗':[113.023384,23.082703],
    	            		'奎屯':[85.013934,44.559557],
    	            		'城厢':[118.954443,25.433375],
    	            		'永康':[120.108684,28.940177],
    	            		'城厢':[118.954443,25.433375],
    	            		'八景':[116.990717,36.660766],
    	            		'遵义北':[106.93126,27.699961],
    	            		'眉山':[103.84143,30.061115],
    	            		'玉溪南':[102.545068,24.370447],
    	            		'贾庵子':[118.212788,39.713167],
    	            		'蚌埠':[117.35708,32.929499],
    	            		'王家营西':[116.487279,40.864157],
    	            		'石南':[116.905542,39.300272],
    	            		'绵阳':[104.705519,31.504701],
    	            		'黄岛港':[120.169541,36.005019],
    	            		'吴家山':[113.730341,37.848746],
    	            		'团结村':[120.95923,31.378909],
    	            		'呼和浩特':[111.660351,40.828319],
    	            		'霞凝':[112.961066,28.344094],
    	            		'三眼桥':[116.420185,38.71429],
    	            		'南充东':[106.105554,30.800965],
    	            		'遵义北':[106.93126,27.699961],
    	            		'周泾巷':[120.379968,31.522861],
    	            		'邵武':[117.480572,27.235197],
    	            		'王家营西':[116.487279,40.864157],
    	            		'鹿寨':[109.802816,24.532198],
    	            		'团结村':[120.95923,31.378909],
    	            		'侯马北':[111.371509,35.621785],
    	            		'嘉兴东':[120.760428,30.773992],
    	            		'王家营西':[116.487279,40.864157],
    	            		'城厢':[118.954443,25.433375],
    	            		'周泾巷':[120.379968,31.522861],
    	            		'双寨':[118.33359,25.515338],
    	            		'安顺':[105.92827,26.228595],
    	            		'杨浦':[121.535717,31.30451],
    	            		'绿化':[117.564887,31.372141],
    	            		'福州东':[119.330221,26.047125],
    	            		'源潭':[112.984928,23.27313],
    	            		'霍尔果斯':[80.472151,44.45252],
    	            		'三眼桥':[116.420185,38.71429],
    	            		'团结村':[120.95923,31.378909],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'桃花村':[116.296527,39.916248],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'咸水沽':[117.389531,38.994431],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'咸水沽':[117.389531,38.994431],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'官港':[119.305892,26.002683],
    	            		'北海港':[109.097244,21.484306],
    	            		'乐山':[103.760824,29.600958],
    	            		'库尔勒':[85.709418,41.7055],
    	            		'西营门':[117.102048,39.15805],
    	            		'乌西':[95.468519,37.844812],
    	            		'沈阳':[123.432791,41.808645],
    	            		'漯河':[114.046061,33.576279],
    	            		'八里':[118.170494,24.477038],
    	            		'八里':[118.170494,24.477038],
    	            		'呼和浩特':[111.660351,40.828319],
    	            		'新乡':[113.91269,35.307258],
    	            		'佛山东':[113.134026,23.035095],
    	            		'圃田西':[113.83077,34.741814],
    	            		'景德镇东':[117.186523,29.303563],
    	            		'北京东':[116.395645,39.929986],
    	            		'德山':[113.828357,22.756678],
    	            		'厦门高崎':[118.117034,24.554358],
    	            		'绵阳':[104.705519,31.504701],
    	            		'常州':[119.981861,31.771397],
    	            		'滨江西':[120.19237,30.187588],
    	            		'源潭':[112.984928,23.27313],
    	            		'乌西':[95.468519,37.844812],
    	            		'石南':[116.905542,39.300272],
    	            		'昆明东':[102.714601,25.049153],
    	            		'鸣李':[112.690073,37.742303],
    	            		'尚志':[128.31617,45.083893],
    	            		'宜春':[114.400039,27.81113],
    	            		'泉州东':[118.600362,24.901652],
    	            		'清涧':[110.289294,37.187444],
    	            		'通辽北':[122.260363,43.633756],
    	            		'运城':[111.006854,35.038859],
    	            		'石南':[116.905542,39.300272],
    	            		'漳州北':[117.676205,24.517065],
    	            		'洛阳东':[112.447525,34.657368],
    	            		'临河':[107.44184,40.932018],
    	            		'城厢':[118.954443,25.433375],
    	            		'云浮':[112.050946,22.937976],
    	            		'三门峡':[111.181262,34.78332],
    	            		'八景':[116.990717,36.660766],
    	            		'鸣李':[112.690073,37.742303],
    	            		'云梦':[113.778186,31.004979],
    	            		'临沂':[118.340768,35.072409],
    	            		'嘉峪关':[98.281635,39.802397],
    	            		'常州':[119.981861,31.771397],
    	            		'王家营西':[116.487279,40.864157],
    	            		'南宁南':[108.262021,22.781726],
    	            		'鸣李':[112.690073,37.742303],
    	            		'清涧':[110.289294,37.187444],
    	            		'赤峰':[118.930761,42.297112],
    	            		'白银市':[104.171241,36.546682],
    	            		'大朗':[113.023384,23.082703],
    	            		'奎屯':[85.013934,44.559557],
    	            		'城厢':[118.954443,25.433375],
    	            		'新沂':[118.344121,34.284443],
    	            		'咸阳':[108.707509,34.345373],
    	            		'八景':[116.990717,36.660766],
    	            		'平遥':[112.265493,37.14809],
    	            		'眉山':[103.84143,30.061115],
    	            		'玉溪南':[102.545068,24.370447],
    	            		'贾庵子':[118.212788,39.713167],
    	            		'合肥北':[117.282699,31.866942],
    	            		'王家营西':[116.487279,40.864157],
    	            		'石南':[116.905542,39.300272],
    	            		'胶州':[119.959421,36.248031],
    	            		'吴家山':[113.730341,37.848746],
    	            		'格尔木':[92.701667,35.580972],
    	            		'呼和浩特':[111.660351,40.828319],
    	            		'霞凝':[112.961066,28.344094],
    	            		'三眼桥':[116.420185,38.71429],
    	            		'渭南':[109.483933,34.502358],
    	            		'陶家寨':[116.814451,32.502833],
    	            		'蚌埠':[117.35708,32.929499],
    	            		'邵武':[117.480572,27.235197],
    	            		'王家营西':[116.487279,40.864157],
    	            		'鹿寨':[109.802816,24.532198],
    	            		'黄岛港':[120.169541,36.005019],
    	            		'侯马北':[111.371509,35.621785],
    	            		'南星桥':[130.980769,45.295359],
    	            		'海石湾':[102.870125,36.350298],
    	            		'连云港东':[119.173872,34.601549],
    	            		'双寨':[118.33359,25.515338],
    	            		'介休':[111.995188,37.025476],
    	            		'包头':[109.846239,40.647119],
    	            		'银川南':[106.206479,38.502621],
    	            		'上饶':[117.955464,28.457623],
    	            		'源潭':[112.984928,23.27313],
    	            		'奎屯':[85.013934,44.559557],
    	            		'八景':[116.990717,36.660766],
    	            		'淄博':[118.059134,36.804685],
    	            		'孝南':[114.016142,30.944617],
    	            		'孝南':[114.016142,30.944617],
    	            		'平遥':[112.265493,37.14809],
    	            		'平遥':[112.265493,37.14809],
    	            		'平遥':[112.265493,37.14809],
    	            		'孝南':[114.016142,30.944617],
    	            		'孝南':[114.016142,30.944617],
    	            		'平遥':[112.265493,37.14809],
    	            		'孝南':[114.016142,30.944617],
    	            		'孝南':[114.016142,30.944617],
    	            		'孝南':[114.016142,30.944617],
    	            		'孝南':[114.016142,30.944617],
    	            		'孝南':[114.016142,30.944617],
    	            		'孝南':[114.016142,30.944617],
    	            		'孝南':[114.016142,30.944617],
    	            		'孝南':[114.016142,30.944617],
    	            		'平遥':[112.265493,37.14809],
    	            		'孝南':[114.016142,30.944617],
    	            		'平遥':[112.265493,37.14809],
    	            		'平遥':[112.265493,37.14809],
    	            		'改貌':[106.7498950239,26.4508884702],
    	            		'厉山':[113.3089668834,31.8587927722],
    	            		'三水西':[112.8583046781,23.1146847636],
    	            		'社棠':[105.9819953142,34.5585483172]

    	            };
					var Data07 = [];
					var Data08 = [];
					var Data09 = [];
					var Data10 = [];
					var Data11 = [];
					var Data12 = [];
					var Data13 = [];
					var Data14 = [];
					var Data15 = [];
					var Data16 = [];
					var planePath = 'path://M41.750 257.260 L 22.000 267.255 21.875 282.628 C 21.728 300.691,22.058 298.080,18.985 305.500 L 16.500 311.500 16.500 525.000 L 16.500 738.500 19.338 743.328 C 21.061 746.259,23.985 749.303,26.783 751.078 L 31.392 754.000 79.208 754.000 L 127.025 754.000 129.368 748.750 C 130.657 745.862,132.735 741.250,133.986 738.500 C 135.237 735.750,137.059 731.700,138.036 729.500 C 139.012 727.300,141.203 722.431,142.905 718.680 C 145.969 711.928,146.000 711.696,146.000 695.145 L 146.000 678.429 138.155 677.379 C 93.129 671.350,95.506 604.146,140.750 604.015 L 146.000 604.000 146.000 541.433 C 146.000 479.251,145.988 478.869,143.993 479.502 C 142.890 479.852,139.402 479.579,136.243 478.894 C 133.084 478.209,129.931 477.541,129.235 477.410 C 126.273 476.854,119.072 471.802,115.103 467.496 C 93.547 444.111,110.187 405.091,141.750 405.011 L 146.000 405.000 146.000 343.967 L 146.000 282.934 143.528 278.055 C 141.080 273.224,138.116 270.526,132.703 268.201 C 127.864 266.123,126.385 266.305,104.500 271.676 C 99.000 273.026,92.700 274.527,90.500 275.012 C 80.882 277.131,53.800 283.286,46.286 285.061 C 41.769 286.127,37.831 287.000,37.536 287.000 C 34.902 287.000,37.318 278.124,40.250 277.027 C 47.173 274.436,51.580 272.726,53.500 271.882 C 54.600 271.399,57.300 270.396,59.500 269.653 L 63.500 268.303 63.784 257.651 C 64.128 244.735,66.417 244.776,41.750 257.260 M125.000 329.000 L 125.000 349.000 81.000 349.000 L 37.000 349.000 37.000 329.000 L 37.000 309.000 81.000 309.000 L 125.000 309.000 125.000 329.000 M73.600 378.765 C 76.518 380.713,77.000 384.354,77.000 404.434 L 77.000 425.000 53.500 425.000 L 30.000 425.000 30.000 404.135 C 30.000 384.540,30.126 383.109,32.073 380.635 L 34.145 378.000 53.323 378.015 C 63.870 378.024,72.995 378.361,73.600 378.765 M131.392 420.438 C 115.469 427.680,113.107 451.221,127.262 461.610 C 137.887 469.409,149.819 468.650,159.148 459.583 C 178.796 440.485,156.489 409.024,131.392 420.438 M77.000 453.000 L 77.000 473.000 53.500 473.000 L 30.000 473.000 30.000 453.000 L 30.000 433.000 53.500 433.000 L 77.000 433.000 77.000 453.000 M77.000 500.500 L 77.000 520.000 53.500 520.000 L 30.000 520.000 30.000 500.500 L 30.000 481.000 53.500 481.000 L 77.000 481.000 77.000 500.500 M77.000 549.018 L 77.000 569.037 53.750 568.768 L 30.500 568.500 30.229 548.750 L 29.958 529.000 53.479 529.000 L 77.000 529.000 77.000 549.018 M77.000 596.000 L 77.000 616.000 53.500 616.000 L 30.000 616.000 30.000 596.000 L 30.000 576.000 53.500 576.000 L 77.000 576.000 77.000 596.000 M132.500 618.316 C 122.646 623.093,118.000 630.198,118.000 640.488 C 118.000 670.846,161.678 674.014,166.415 644.000 C 169.243 626.077,148.655 610.486,132.500 618.316 M77.000 644.000 L 77.000 664.000 53.500 664.000 L 30.000 664.000 30.000 644.000 L 30.000 624.000 53.500 624.000 L 77.000 624.000 77.000 644.000 M76.812 690.459 C 76.416 713.872,78.519 711.926,53.564 711.968 C 28.281 712.011,30.000 713.626,30.000 689.826 L 30.000 672.000 53.562 672.000 L 77.124 672.000 76.812 690.459';
					//data输入为data.result
					var convertData = function (data) {
					    var res7 = new Array();
					    var res8 = new Array();
					    var res9 = new Array();
					    var res10 = new Array();
					    var res11 = new Array();
					    var res12 = new Array();
					    var res13 = new Array();
					    var res14 = new Array();
					    var res15 = new Array();
					    var res16 = new Array();
					    for (var i = 0; i < data.length; i++) {
					        var dataItem = data[i];
					        if(dataItem.JSDATE.match("月 -07") || dataItem.JSDATE.match("月-07")){
						        var data1 = dataItem.JSDATE;
						        console.log(data1);
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        //用来pincou
						        var rose = [];
						        var rose1 = [];
						        var test = new Array(2);
						        if (fromCoord && toCoord) {
						            res7.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					        }
					        if(dataItem.JSDATE.match("月 -08") || dataItem.JSDATE.match("月-08")){
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        if (fromCoord && toCoord) {
						            res8.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					        	
					        }
					        if(dataItem.JSDATE.match("月 -09") || dataItem.JSDATE.match("月-09")){
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        if (fromCoord && toCoord) {
						            res9.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					        	
					        }
					        if(dataItem.JSDATE.match("月 -10") || dataItem.JSDATE.match("月-10")){
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        if (fromCoord && toCoord) {
						            res10.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					  
					        }
					        if(dataItem.JSDATE.match("月 -11") || dataItem.JSDATE.match("月-11")){
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        if (fromCoord && toCoord) {
						            res11.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					        	
					        }
					        if(dataItem.JSDATE.match("月 -12") || dataItem.JSDATE.match("月-12")){
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        if (fromCoord && toCoord) {
						            res12.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					        	
					        }
					        if(dataItem.JSDATE.match("月 -13") || dataItem.JSDATE.match("月-13")){
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        if (fromCoord && toCoord) {
						            res13.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					        	
					        }
					        if(dataItem.JSDATE.match("月 -14") || dataItem.JSDATE.match("月-14")){
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        if (fromCoord && toCoord) {
						            res14.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					        	
					        }
					        if(dataItem.JSDATE.match("月 -15") || dataItem.JSDATE.match("月-15")){
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        if (fromCoord && toCoord) {
						            res15.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					        	
					        }
					        if(dataItem.JSDATE.match("月 -16") || dataItem.JSDATE.match("月-16")){
						        var fromCoord = geoCoordMap[dataItem.FZHZ];
						        var toCoord = geoCoordMap[dataItem.DZHZ];
						        if (fromCoord && toCoord) {
						            res16.push({
						                fromName: dataItem.FZHZ,
						                toName: dataItem.DZHZ,
						                coords: [fromCoord, toCoord]
						            });
						        }
					        	
					        }
					        
					    }
					    res = [res7, res8, res9, res10, res11, res12, res13, res14, res15, res16]
					    return res;
					};
					var sonvertData = function (data) {
					    var res = [];
					    for (var i = 0; i < data.length; i++) {
					        var dataItem = data[i];
					        var fromCoord = dataItem.coords[0];
					        
					        var toCoord = dataItem.coords[1];
					        if (fromCoord && toCoord) {
					            res.push({
					                fromName: dataItem.fromName,
					                toName: dataItem.toName,
					                coords: [fromCoord, toCoord]
					            });
					        }
					    }
					    console.log('res');
					    console.log(res);
					    return res;
					};
					DataAll = convertData(data.result); 
					console.log(DataAll);
					var color = ['#a6c84c', '#ffa022', '#46bee9', '#46bee9', '#46bee9', '#46bee9', '#46bee9', '#46bee9', '#46bee9', '#46bee9'];
					var series = [];
					[['2007', DataAll[0]], ['2008', DataAll[1]],['2009', DataAll[2]],['2010', DataAll[3]],['2011', DataAll[4]],['2012', DataAll[5]],['2013', DataAll[6]],['2014', DataAll[7]],['2015', DataAll[8]],['2016', DataAll[9]]].forEach(function (item, i) {
					    console.log('我还份额覅就地反松岛枫');
						console.log(sonvertData(item[1]));
						console.log(item[1]);
						a = [{name:123},{coords:23123}];
						console.log(a);
						series.push({
					        name: item[0] + '轨迹',
					        type: 'lines',
					        zlevel: 1,
					        effect: {
					            show: true,
					            period: 6,
					            trailLength: 0.7,
					            color: '#fff',
					            symbolSize: 3
					        },
					        lineStyle: {
					            normal: {
					                color: color[i],
					                width: 0,
					                curveness: 0.2
					            }
					        },
					        data: sonvertData(item[1])
					    },
					    {
					        name: item[0] + '轨迹',
					        type: 'lines',
					        zlevel: 2,
					        symbol: ['none', 'arrow'],
					        symbolSize: 10,
					        effect: {
					            show: true,
					            period: 6,
					            trailLength: 0,
					            symbol: planePath,
					            symbolSize: 15
					        },
					        lineStyle: {
					            normal: {
					                color: color[i],
					                width: 1,
					                opacity: 0.6,
					                curveness: 0.2
					            }
					        },
					        data: sonvertData(item[1])
					    },
					    {
					        name: item[0] + '轨迹',
					        type: 'effectScatter',
					        coordinateSystem: 'geo',
					        zlevel: 2,
					        rippleEffect: {
					            brushType: 'stroke'
					        },
					        label: {
					            normal: {
					                show: true,
					                position: 'right',
					                formatter: '{b}'
					            }
					        },
					        symbolSize: 10,
					        itemStyle: {
					            normal: {
					                color: color[i]
					            }
					        },
					        data: 20
					    });
					});

					option = {
					    backgroundColor: '#404a59',
					    title : {
					        text: data.result[0].XHDM + '集装箱轨迹图',
					        subtext: '数据来源货票系统',
					        left: 'center',
					        textStyle : {
					            color: '#fff'
					        }
					    },
					    tooltip : {
					        trigger: 'item'
					    },
					    legend: {
					        orient: 'vertical',
					        top: 'bottom',
					        left: 'right',
					        data:['2007轨迹', '2008轨迹', '2009轨迹', '2010轨迹', '2011轨迹', '2012轨迹', '2013轨迹', '2014轨迹', '2015轨迹', '2016轨迹'],
					        textStyle: {
					            color: '#fff'
					        },
					        selectedMode: 'single'
					    },
					    geo: {
					        map: 'china',
					        label: {
					            emphasis: {
					                show: false
					            }
					        },
					        roam: true,
					        itemStyle: {
					            normal: {
					                areaColor: '#323c48',
					                borderColor: '#404a59'
					            },
					            emphasis: {
					                areaColor: '#2a333d'
					            }
					        }
					    },
					    series: series
					};
					myChart.setOption(option);
					},
				error:function(){
					alert("系统异常，请稍后重试！");
				}
			});
	};
