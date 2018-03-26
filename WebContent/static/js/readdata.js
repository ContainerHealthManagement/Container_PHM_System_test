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

		var arr = Object.keys(result.city);

		for(i = 0; i < arr.length; i++)
			{
			var resulttude = new Array(2)
			resulttude[0] = result.east_longitude[i];
			resulttude[1] = result.north_latitude[i];
			geoCoordMap[result.city[i]] = resulttude;
			};
		return geoCoordMap
		}
	
		function erryFunction(result) {
			console.log("错误异常")
		}
}