<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%

    String path = request.getContextPath();

    String basePath = request.getScheme() + "://"

            + request.getServerName() + ":" + request.getServerPort()

            + path + "/";

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>My JSP 'index.jsp' starting page</title>
</head>
 <body>

    <h1>按类别查询图书</h1>

    <form action="typequery.action" method="post">

      书籍类别：<input type=text name=type> <!-- 参数名和action中属性名一样 -->

      <input type=submit name=subm value="查询">

    </form>

    </body>
</html>