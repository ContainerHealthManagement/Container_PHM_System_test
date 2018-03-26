$(function () {
    $.getJSON("static/json/cityData_new.json", geoCoord, function (data) {
        //data就是json对象了，不需要再转换
    	$.each(data, function(item){
    		var geoCoord = {};
    		console.log(data)
    		var arr = Object.keys(data.city);
    		geoCoord += "{"
    		for(i = 0; i < arr.length; i++)
    			{
    			geoCoord += "\'" + data.city[i] + "\'" + ": [" + data.east_longitude[i] + "," + data.north_latitude[i] + "],"
    			}
    		geoCoord += "}"
    	})
    	return geoCoord
    });
});
