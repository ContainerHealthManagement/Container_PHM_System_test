document.write("<script language='javascript' src='static/AdminLTE-2.4.0-rc/bower_components/jquery/dist/jquery.min.js'></script>");

function loadlocation(geoCoordMap) {
	$.ajax({
		type : "post",
		async : false,
		url : "static/json/cityData_new.json",
		data : {},
		dataType : "json",
		//beforeSend: LoadFunction, 加载执行方法    
        error: erryFunction,  //错误执行方法    
        success: succFunction //成功执行方法 
	})
	
		function succFunction(result) {
		var b = "abc"
		var u = {};
		var k = [1, 2];
		u[b] = k;
		console.log(u);
		var obj1 = {'北京':[12, 23]};  
		console.log('asdfadsf')
		console.log(typeof(obj1['北京']));
		console.log(obj1['北京'][0])
		console.log('ffffffffffffffffffffff')
		var map = {};
		var h = [12, 134]
		map.obj3 = h;
		console.log(map)
		var obj = {  
			    attr: {  
			    }  
			};  
			var egData = ['oneAttr', 'twoAttr', 'threeAttr'];  
			for (var i = 0; i < egData.length; i++) {  
			    obj.attr[egData[i]] = false  
			}  
		//var key = "name";  
		//var value = [12, 4];
		//name = value;
		//eval("obj.p" + key + "='" + value + "'");  
		//obj.prototype(name);
		console.info(obj);  
		console.info(obj1);
		var arr = Object.keys(result.city);
		for(i = 0; i < arr.length; i++)
			{
			var resulttude = new Array(2)
			resulttude[1] = result.east_longitude[i];
			resulttude[0] = result.north_latitude[i];
			var r = result.city[i];
			geoCoordMap[r] = resulttude;
		//	eval("geoCoordMap." + result.city[i] + "=" + resulttude);
			//console.log(geoCoordMap)
			};
		console.log(geoCoordMap)
		console.log('cccccccccccc')
		console.log(geoCoordMap['安庆'])
		return geoCoordMap
		}
	
		function erryFunction(result) {
			console.log("错误异常")
		}
}