var p = location.search;
if (p.charAt(0) == '?')  p = p.substr(1);
var param = eval("(" + unescape(p) + ")");

var movieDomain = 'http://' + location.href.split('/')[2] + '/';
var flvfile;
var cc = location.href.split('/')[3];

/*
if (cc == 'jp' && location.href.indexOf('wii.com') != -1) {
	flvfile = 'rtmp://fms.wii.com/wii/_definst_/' + param.mv + '.flv';
} else {
	flvfile = movieDomain + cc + '/movies/flv/' + param.mv + '.flv';
}
*/

flvfile = movieDomain +  '/movies/flv/' + param.mv + '.flv';

var so = new SWFObject("images/flvplayer.swf", "flvplayer", 384, 256, "7", "#666666");
so.addParam("menu", "false");
so.addParam("wmode", "trsansparent");
so.addVariable('flv', flvfile);
so.addVariable('totalTime', param.tt);
so.write("swfcontent");
