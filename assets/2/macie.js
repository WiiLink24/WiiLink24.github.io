var agt = navigator.userAgent.toLowerCase();
var appVer = navigator.appVersion.toLowerCase();
var iePos  = appVer.indexOf('msie');
var is_mac    = (agt.indexOf("mac")!=-1);
var is_opera = (agt.indexOf("opera") != -1);
var is_safari = ((agt.indexOf('safari')!=-1)&&(agt.indexOf('mac')!=-1))?true:false;
var is_ie   = ((iePos!=-1) && (!is_opera) && (!is_safari));
if (is_mac && is_ie) {
	window.onload = function() {
		var a = document.getElementsByTagName('a');
		for (var i=0; i<a.length; i++) {
			if (a[i].className == 'thickbox') {
				a[i].onclick = function() {
					var wd = 320+20;
					var ht = 274+20;
					var lf = (screen.width) ? (screen.width-wd)/2 : 0;
					var tp = (screen.height) ? (screen.height-ht)/2 : 0;
					var w = window.open(this.href, "player",'height='+ht+',width='+wd+',top='+tp+',left='+lf+',scrollbars=no,resizable=no');
					w.focus();
					return false;
				}
			}
		}
	}
}
