if (typeof FLVPlayer == 'undefined') var FLVPlayer = new Object();

//FLVPlayer.movieDomain = 'http://' + location.href.split('/')[2] + '/';
FLVPlayer.movieDomain = 'http://' + 'media.nintendo.com/uswii' + '/';

FLVPlayer.embed = function (id, flv, w, h, tt) {
	if (typeof w == 'undefined') w = 560;
	if (typeof h == 'undefined') h = 380;
	
	
	/*var flvfile;
	var cc = location.href.split('/')[3];
	if (cc == 'jp' && location.href.indexOf('wii.com') != -1) {
		flvfile = 'rtmp://fms.wii.com/wii/_definst_/' + flv + '.flv';
	} else {
		flvfile = this.movieDomain + cc + '/movies/flv/' + flv + '.flv';
	}*/
	
	var	flvfile = this.movieDomain + 'movies/flv/' + flv + '.flv';
//	var	flvfile = 'http://media.pubs.noa.com/uswii/movies/flv/' + flv + '.flv';
//	var	flvfile = 'http://media.wii.com/movies/flv/' + flv + '.flv';

	var so = new SWFObject('/swf/flvplayer.swf', id + flv, w, h, '7', '#ffffff');
	so.addVariable('flv', flvfile);
	so.addVariable('totalTime', tt);
	so.write(id);
}
