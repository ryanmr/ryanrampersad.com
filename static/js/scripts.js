
/**
 * Debounce by David Walsh.
 * https://davidwalsh.name/javascript-debounce-function
 */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function(){

  /**
   * I hate to do it, but I love this effect.
   *
   * This is a modified version of Evan You's fancy background canvas generator.
   *
   * http://evanyou.me/
   * https://gist.github.com/ryanmr/205ef4297e7821fad088 (original, in case you want to see it)
   */

  document.addEventListener('touchmove', function (e) {
      // e.preventDefault();
  });
  var c = document.getElementsByTagName('canvas');
  if (c.length == 0) {
    console.log(c);
    // if the canvas is not here, leave
    // // this will need adjusting later
    return;
  }
  c = c[0];
  var x = c.getContext('2d'),
      pr = window.devicePixelRatio || 1,
      w = window.innerWidth,
      h = window.innerHeight,
      f = 90,
      q,
      m = Math,
      r = 0,
      u = m.PI*2,
      v = m.tan,
      z = m.random;
  c.width = w*pr;
  c.height = h*pr;
  x.scale(pr, pr);
  x.globalAlpha = 0.4;
  function draw(){
      x.clearRect(0,0,w,h);
      q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}];
      while(q[1].x<w+f) draw_piece(q[0], q[1]);
  }
  function draw_piece(i,j){
      x.beginPath();
      x.moveTo(i.x, i.y);
      x.lineTo(j.x, j.y);
      var k = j.x + (z()*2-0.35)*f,
          n = y(j.y);
      x.lineTo(k, n);
      x.closePath();
      r-=u/-50;

      // I realize the numbers here
      // do not always make colorsense
      // but that's apparently okay...
      var color = '#'+(v(r)*127+128<<16).toString(16);

      x.fillStyle = color;
      x.fill();
      q[0] = q[1];
      q[1] = {x:k,y:n};
  }
  function y(p){
      var t = p + (z()*2-1.2)*f;
      return (t>h||t<0) ? y(p) : t;
  }

  var bgaction = debounce(function() {
    draw();
  }, 250);

  document.onclick = bgaction;
  document.ontouchstart = bgaction;
  draw();


})();
