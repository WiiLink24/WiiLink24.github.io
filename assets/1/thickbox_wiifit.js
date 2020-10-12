/*
 * Thickbox 1.1 - One box to rule them all.
 * By Cody Lindley (http://www.codylindley.com)
 * Under an Attribution, Share Alike License
 * Thickbox is built on top of the very light weight jquery library.
 */

//on page load call TB_init
var mv;
var params;
$(document).ready(TB_init);

//add thickbox to href elements that have a class of .thickbox
function TB_init(){
	$("a.thickbox").click(function(){return TB_onclick.call(this);});
	$("area.thickbox").click(function(){return TB_onclick.call(this);});
    _TB_init();
    return false;
}

function _TB_init() {
    var varName = $('#_name').val();
    if (typeof varName != "string") {
        varName = 'id';
    }
    
    if (location.hash.match("" + varName + "=([^&]+)")) {
        var id = RegExp.$1;
        var obj = $("a."+id).get(0)||$("area."+id).get(0);
        if (obj) {
//            TB_onclick.call(obj);
//            return false;
//            alert(200);
          return setTimeout(function(){TB_onclick.call(obj); return false;}, 1000);
        
        } else {
//            alert(100);
            setTimeout(_TB_init, 200);
        }
//        return setTimeout(function(){TB_onclick.call(obj)}, 1000);
    }
    
}

function TB_onclick() {
    //for permalink	
    var id = this.className.replace(/thickbox /, '');
    var varName = $('#_name').val();
    if (typeof varName != "string") {
        varName = 'id';
    }

    if (navigator.userAgent.toLowerCase().indexOf('safari') > -1) {
        var hash = varName +"="+ id;
    } else {
        var hash = "#"+varName +"="+ id;
    }

	var t = this.title || this.innerHTML || this.href;
	var url = this.href;
	if (url.match(/\?/)) {
	    var deli = "&";
	} else {
	    var deli = "?";
	}
	url += deli + "tb=1";

	TB_show(t, url, hash);
	this.blur;

	return false;
}

function TB_show(caption, url, hash) {//function called when the user clicks on a thickbox link
	try {

        if (document.getElementById("TB_window")) {
            TB_remove();
        }

		$("body")
		.append("<div id='TB_overlay'></div><div id='TB_background'></div><div id='TB_window'></div>");
		$("#TB_overlay").click(TB_remove);
		$(window).resize(TB_position);
		$(window).scroll(TB_position);
 		
		$("#TB_overlay").show();
		$("#TB_background").show();
		$("body").append("<div id='TB_load'><div id='TB_loadContent'><img src='../images/circle_animation.gif' /></div></div>");
		
	
		var urlString = /\.jpg|\.jpeg|\.png|\.gif|\.html|\.htm|\.php|\.cfm|\.asp|\.aspx|\.jsp|\.jst|\.rb|\.txt/g;
		var urlType = url.match(urlString);
		
		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif'){//code to show images

			var imgPreloader = new Image();
			imgPreloader.onload = function(){
				
			// Resizing large images added by Christian Montoya
			var pagesize = getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			
			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			$("#TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"</div>"); 
			$("#TB_closeWindowButton").click(TB_remove);
			TB_position();
			$("#TB_load").remove();
			$("#TB_ImageOff").click(TB_remove);
			$("#TB_window").slideDown("normal");
			}
	  
			imgPreloader.src = url;
		}
		
		if(urlType=='.htm'||urlType=='.html'||urlType=='.php'||urlType=='.asp'||urlType=='.aspx'||urlType=='.jsp'||urlType=='.jst'||urlType=='.rb'||urlType=='.txt'||urlType=='.cfm'){//code to show html pages
			
			var queryString = url.replace(/^[^\?]+\??/,'');
			params = parseQuery( queryString );
			
			TB_WIDTH = (params['width']*1);
			TB_HEIGHT = (params['height']*1);

			mv = params['mv'];
//			alert(mv)

			ajaxContentW = TB_WIDTH;
			ajaxContentH = TB_HEIGHT;
			//$("#TB_window").append("<div id='TB_header'><div id='TB_ajaxCaption'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><img src='images/b_close.gif' alt='CLOSE' width='34' height='9' border='0'></a></div><br clear='all'></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
			$("#TB_window").append("<div id='TB_header'><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
			$("#TB_closeWindowButton").click(TB_remove);
			$("#TB_ajaxContent").load(url, function(){
				TB_position();
				$("#TB_load").remove();
				$("#TB_window").slideDown("normal");
				location.hash = hash;
			});
		}
		
	} catch(e) {
		alert( e );
	}
}

//helper functions below

function TB_remove() {
	$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay,#TB_background').remove();});
	$("#TB_load").remove();
	//deconcept.SWFObjectUtil.cleanupSWFs();
	//alert($("flashcontent"));
	document.getElementById("player").style.display = 'none';
	return false;
}

function TB_position() {
	var pagesize = getPageSize();
  
  	if (window.innerHeight && window.scrollMaxY) {	
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		yScroll = document.body.offsetHeight;
  	}
	
	var arrayPageScroll = getPageScrollTop();
	
	$("#TB_window").css({width:TB_WIDTH+"px",height:TB_HEIGHT+"px",
	left: ((pagesize[0] - TB_WIDTH)/2)+"px", top: (arrayPageScroll[1] + ((pagesize[1]-TB_HEIGHT)/2))+"px" });
	$("#TB_overlay").css("height",yScroll +"px");
	$("#TB_background").css({width:(TB_WIDTH+14)+"px",height:319+"px", left:((pagesize[0]-TB_WIDTH)/2)+"px", top: (arrayPageScroll[1] + ((pagesize[1]-TB_HEIGHT)/2))+"px"});

}

function parseQuery ( query ) {
   var Params = new Object ();
   if ( ! query ) return Params; // return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) continue;
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}


function getPageScrollTop(){
	var yScrolltop;
	if (self.pageYOffset) {
		yScrolltop = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop){	 // Explorer 6 Strict
		yScrolltop = document.documentElement.scrollTop;
	} else if (document.body) {// all other Explorers
		yScrolltop = document.body.scrollTop;
	}
	arrayPageScroll = new Array('',yScrolltop) 
	return arrayPageScroll;
}

function getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	
	arrayPageSize = new Array(w,h) 
	return arrayPageSize;
}
