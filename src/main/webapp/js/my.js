$(function() {
	//$(".grid-sizer").after("<div>这个是新增的div</div>");
//	var flag = $(".grid-sizer");
//	var items = "";
//	 $.get("/pathList",function(data,status){
//		 for(var path in data) {
//			var item = '<div class="grid-item item animate-box" data-animate-effect="fadeIn">' +
//		  		'<a href="img/'+data[path]+'"  class="image-popup" title="Name of photo or title here">'+
//				'<div class="img-wrap"><img src="img/'+data[path]+'" alt="" class="img-responsive"></div>'+
//				'<div class="text-wrap"><div class="text-inner popup"><div><h2>Name of photo or title here</h2></div>'+
//				'</div></div></a></div>';
//			flag.after(item);
//		 }
////		 addScriptTag("js/jquery.easing.1.3.js");
////		 addScriptTag("js/bootstrap.min.js");
////		 addScriptTag("js/jquery.waypoints.min.js");
////		 addScriptTag("js/jquery.magnific-popup.min.js");
////		 addScriptTag("js/magnific-popup-options.js");
////		 addScriptTag("js/isotope.pkgd.min.js");
////		 addScriptTag("js/imagesloaded.pkgd.min.js");
////		 addScriptTag("js/tweenlite.min.js");
////		 addScriptTag("js/cssplugin.min.js");
////		 addScriptTag("js/easepack.min.js");
//	 });
	loadCss("css/9520b66f1fd84705b21af20ed4e40529.css",function(){
        console.log("c ok")
        loadCss("css/animate.css",function(){
       	 console.log("c ok")
       	 loadCss("css/icomoon.css",function(){
       		 console.log("c ok")
       		 loadCss("css/bootstrap.css",function(){
       			 console.log("c ok")
       			 loadCss("css/style.css",function(){
       				 console.log("c ok")
       				 loadCss("css/magnific-popup.css",function(){
       					 console.log("c ok")
       				})})})})})})
})
window.onload =function() {
	 loadScript("js/jquery.easing.1.3.js",function(){
         console.log("a ok")
 loadScript("js/bootstrap.min.js",function(){
         console.log("b ok")
 loadScript("js/jquery.waypoints.min.js",function(){
         console.log("b ok")
 loadScript("js/jquery.magnific-popup.min.js",function(){
         console.log("b ok")
 loadScript("js/magnific-popup-options.js",function(){
         console.log("b ok")
 loadScript("js/isotope.pkgd.min.js",function(){
         console.log("b ok")
 loadScript("js/imagesloaded.pkgd.min.js",function(){
         console.log("b ok")
 loadScript("js/tweenlite.min.js",function(){
         console.log("c ok")
         loadScript("js/cssplugin.min.js",function(){
         console.log("c ok")
         loadScript("js/easepack.min.js",function(){
         console.log("c ok")
//         loadScript("js/modernizr-2.6.2.min.js",function(){
//        	 console.log("c ok")
         //css
         })
         })
 })
 })
         })
 })
 })})})})
}
function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        document.getElementById("head").appendChild(script);
        //IE
        if(script.readyState) {
            script.onreadystatechange = function() {
                if(script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            }
        } else {
            //非IE
            script.onload = function() {
                callback();
            }
        }

    }
function loadCss(url, callback) {
    var script = document.createElement("link");
    script.rel = "stylesheet";
    script.type = "text/css";
    script.href = url;
    document.getElementById("head").appendChild(script);
    //IE
    if(script.readyState) {
        script.onreadystatechange = function() {
            if(script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        }
    } else {
        //非IE
        script.onload = function() {
            callback();
        }
    }

}
function addScriptTag(src){
	var script = document.createElement('script');
	script.setAttribute("type","text/javascript");
	script.src = src;
	document.body.appendChild(script);
}