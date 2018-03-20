<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="css/ll.css">
	<script type="text/javascript" src="js/ll.js"></script>
	
  </head>
  
  <body>
    <div class="bg">
     <div class="sb">
       <div class="header">
        <ul class="tags">
         <li class="tagi"><span class="tagsp">卡通</span></li>
         <li class="tagi"><span class="tagsp">游戏</span></li>
         <li class="tagi"><span class="tagsp">风景</span></li>
         <li class="tagi"><span class="tagsp">明星</span></li>
         <li class="tagi"><span class="tagsp">清新</span></li>
        </ul>
        <div class="header-r">
        <div class="header-ra">
          <span class="att">背景透明度   </span>
          <div class="as">
          <span class="ap">
           <span class="ac">
            <em id="ae">0%</em>
           </span>
          </span>
          </div>
  
          </div>
          <span class="no-icon"></span>
          <span class="nott">不使用换肤</span>
        </div>
        </div>
         <div class="bodyer">             <%--skin's body --%>
            <div class="bodyer-l">
            <div class="img-big" id="big-1"><img alt="" src="img/big1.jpg" class="img-b"></div>
            <div class="img-big" id="big-2"><img alt="" src="img/big2.jpg" class="img-b"></div>
            <div class="img-sma" id="sma-1"><img alt="" src="img/sma1.jpg" class="img-s"></div>
            <div class="img-sma" id="sma-2"><img alt="" src="img/sma2.jpg" class="img-s"></div>
            <div class="img-sma" id="sma-3"><img alt="" src="img/sma3.jpg" class="img-s"></div>
            <div class="img-sma" id="sma-4"><img alt="" src="img/sma4.jpg" class="img-s"></div>
            <div class="img-sma" id="sma-5"><img alt="" src="img/sma5.jpg" class="img-s"></div>
            <div class="img-sma" id="sma-6"><img alt="" src="img/sma6.jpg" class="img-s"></div>
            <div class="img-sma" id="sma-7"><img alt="" src="img/sma7.jpg" class="img-s"></div>
            <div class="autcha"><input type="checkbox" value="" class="cb"><span style="font-size:12px;">开启自动换肤</span></div>
            </div>
            <div class="bodyer-r">
            <img alt="" src="img/big1.jpg" class="b-r-img">
            <span style="display:block;font-size:12px;text-align:center;">背景效果预览</span>
            </div>
          </div>                          <%--skin's body --%>
    
     </div>
     <div class="hed">
      <div class="hed-l">
        <span class="city">北京</span>
        <span class="wea"></span>
        <span class="temp">13C</span>
        <span class="vert">|</span>
        <span class="skin">换肤</span>
      </div>
      <div class="hed-r">
        <a href="" class="txtr">新  闻</a>
        <a href="" class="txtr">视  频</a>
        <a href="" class="txtr">hao123</a>
        <a href="" class="txtr">图  片</a>
      </div>
     </div>
     <div class="mid">
      <img alt="" src="img/logo.png" class="logo">
     </div>
     <div class="bot">
      <span class="bo">
       <input type="text" class="con" name="cont" >
       <span class="cam"></span>
      </span>
      <input type="button" class="btn" value="百度一下">
     </div>
     <div class="dis">
      <ul class="udis" id="alrt"></ul>
     </div>
    </div>
  </body>
</html>
