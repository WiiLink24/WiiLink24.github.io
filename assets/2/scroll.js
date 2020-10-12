var Mac = navigator.appVersion.indexOf('Mac',0) != -1;
var Win = navigator.appVersion.indexOf('Win',0) != -1;
var IE  = navigator.appName.indexOf("Microsoft Internet Explorer",0) != -1;
var NN  = navigator.appName.indexOf("Netscape",0) != -1;
var Moz = navigator.userAgent.indexOf("Gecko/",0) != -1;
var Opera = window.opera;
var Vmajor = parseInt(navigator.appVersion); // ex. 3
var Vminor = parseFloat(navigator.appVersion); // ex. 3.01

var MacIE4 = ((Mac && navigator.appVersion.indexOf('MSIE 4.',0) != -1));
var MacIE3 = ((Mac && navigator.appVersion.indexOf('MSIE 3.',0) != -1));

function scroll (target) {
  /*
  if (navigator.appVersion.indexOf('MSIE') > -1) {
    var target_top = target == 'top' ? 0 : document.getElementById('content').offsetTop + document.getElementById(target).offsetTop;
  } else {
    var target_top = document.getElementById(target).offsetTop;
  }
  */
  var target_top = document.getElementById(target).offsetTop;

  var window_height = typeof(window.innerHeight) == 'number' ? window.innerHeight : (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : (document.body && document.body.clientHeight) ? document.body.clientHeight : 0;

  if (window_height > (document.getElementById('footer').offsetTop+47-target_top)) {
    target_top -= window_height - (document.getElementById('footer').offsetTop+47-target_top);
  }

  if (IE) {
    location.hash = target;
  } else if (!MacIE3 && !MacIE4 && !NN && window.scrollTo || NN && (Vminor >= 4.75) && window.scrollTo) {
    pageScroll(0,target_top,5);
  } else {
    location.hash = target;
  }

}

var pageScrollTimer;
function pageScroll(toX,toY,frms,cuX,cuY) { // 020314
  if (pageScrollTimer) clearTimeout(pageScrollTimer);
  if (!toX || toX < 0) toX = 0;
  if (!toY || toY < 0) toY = 0;
  if (!cuX) cuX = 0 + getScrollLeft();
  if (!cuY) cuY = 0 + getScrollTop();
  if (!frms) frms = 6;

  cuX += (toX - getScrollLeft()) / frms; if (cuX < 0) cuX = 0;
  cuY += (toY - getScrollTop()) / frms;  if (cuY < 0) cuY = 0;
  var posX = Math.floor(cuX);
  var posY = Math.floor(cuY);
  window.scrollTo(posX, posY);
  if (posX != toX || posY != toY) {
    pageScrollTimer = setTimeout("pageScroll("+toX+","+toY+","+frms+","+cuX+","+cuY+")",16);
  }
}

function getScrollLeft() { // 020225
  if ((navigator.appName.indexOf("Microsoft Internet Explorer",0) != -1)) {
    return document.body.scrollLeft;
  } else if (window.pageXOffset) {
    return window.pageXOffset;
  } else {
    return 0;
  }
}

function getScrollTop() { // 020225
  if ((navigator.appName.indexOf("Microsoft Internet Explorer",0) != -1)) {
    return document.body.scrollTop;
  } else if (window.pageYOffset) {
    return window.pageYOffset;
  } else {
    return 0;
  }
}