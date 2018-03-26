<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%

    String path = request.getContextPath();

    String basePath = request.getScheme() + "://"

            + request.getServerName() + ":" + request.getServerPort()

            + path + "/";

%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<base href="<%=basePath%>">
<title>My JSP 'booklist.jsp' starting page</title>
</head>
<body>
<h1>查询结果</h1>

    <table border=1>

    <tr><th>编号</th><th>名称</th><th>类型</th><th>单价</th></tr>

    <c:forEach var="book" items="${booklist}">

    <tr><td>${book.titleid }</td>

    <td>${book.title }</td>

    <td>${book.type }</td>

    <td>${book.price }</td></tr>

    </c:forEach>

    </table>
</body>
</html>