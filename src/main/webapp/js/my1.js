$(document).ready(function() {
			var flag = $(".grid-sizer");
			var items = "";
			 $.get("/pathList",function(data,status){
				 for(var path in data) {
					var item = '<div class="grid-item item animate-box" data-animate-effect="fadeIn">' +
				  		'<a href="img/'+data[path]+'"  class="image-popup" title="Name of photo or title here">'+
						'<div class="img-wrap"><img src="img/'+data[path]+'" alt="" class="img-responsive"></div>'+
						'<div class="text-wrap"><div class="text-inner popup"><div><h2>Name of photo or title here</h2></div>'+
						'</div></div></a></div>';
					flag.after(item);
				 }
		});
			 setTimeout(loadScript("js/jquery.easing.1.3.js",function(){
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
			                })
			                })
			        })
			        })
			                })
			        })
			        })})})}),"5000");
})
$(function() {
})
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