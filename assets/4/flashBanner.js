if (typeof FLVPlayer == 'undefined') var FLVPlayer = new Object();

FLVPlayer.movieDomain = 'http://' + location.href.split('/')[2] + '/';
/*FLVPlayer.movieDomain = 'http://media.wii.com/';*/

FLVPlayer.embed = function (id, flv, w, h) {
	if (typeof w == 'undefined') w = 560;
	if (typeof h == 'undefined') h = 380;
	
	/*var flvfile;
	var cc = location.href.split('/')[3];
	if (cc == 'jp') {
		flvfile = 'rtmp://fms-wii.stream.co.jp/wii/_definst_/' + flv + '.flv';
	} else {
		flvfile = this.movieDomain + cc + '/movies/flv/' + flv + '.flv';
	}*/
	


	var so = new SWFObject('/swf/banner.swf', id + flv, w, h, '7', '#ffffff');

	so.write(id);
}
