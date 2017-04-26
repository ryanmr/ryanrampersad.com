
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
      while(q[1].x<w+f) {
        draw_piece(q[0], q[1]);
      }
  }
  function draw_piece(i,j){
      x.beginPath();
      x.moveTo(i.x, i.y); // q0-top
      x.lineTo(j.x, j.y); // q1-bottom
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
      var t = p + ( z() * 2 - 1.2) * f;
      return (t > h || t < 0) ? y(p) : t;
  }

  function get_segments() {
      var segments = [];
      var initial = {
          top: {x: 0, y: h * .7 + f},
          bottom: {x: 0, y: h * .7 - f}
      };
      segments.push(initial);
      var threshold = w+f;
      while (segments[segments.length-1].bottom.x < threshold) {
        var j = segments[segments.length-1].bottom;
        var k = j.x + (z() * 2 - 0.35) * f;
        var n = y(j.y);
        segments.push({
            top: segments[segments.length-1].bottom,
            bottom: {x:k, y:n}
        });
      }
    //   console.log("initial segments", segments);
      return segments;
  }

    function get_new_destination(segments) {
        var next = segments.map(function(segment, index) {
            var _nnn = Object.assign({}, segment);
            var _bbb = Object.assign({}, _nnn.bottom);
            if (index == 0 || index == segments.length-1) {
                return _nnn;
            }

            _bbb.x += (Math.random() - .5) * (Math.random() * 60);
            _bbb.y += (Math.random() - .5) * (Math.random() * 60);
            
            _nnn.bottom = _bbb;
            return _nnn;
        });
        return next;
    }

  function get_colors(number) {
      var _r = 0;
      var _u = m.PI*2;
      var _v = Math.tan;
      var colors = [];
      for (var k = 0; k < number; k++) {
        _r -= _u / -50;
            // I realize the numbers here
            // do not always make colorsense
            // but that's apparently okay...
        var color = '#'+(_v(_r)*127+128<<16).toString(16);
        colors.push(color);
      }
      return colors;
  }

  function generate_segments() {
      var segments = get_segments();
      var colors = get_colors(segments.length);

      var counter = 0;

      var d = function() {
        counter++;
        var diff = [];

        for (var k = 0; k < segments.length; k++) {
            var offset_x2 = (1/25)*Math.cos(k + counter/100);
            var offset_y2 = (1/4)*Math.sin(k + counter/100);
            var hh = segments[k];
            if (k !== 0 && k !== segments.length - 1) {
                hh.bottom.x += offset_x2;
            }
            hh.bottom.y += offset_y2;
            diff.push(hh);
        }
        draw_segment(diff, colors);
      }

      var rd = function() {
          d();
          requestAnimationFrame(rd);
      }

      requestAnimationFrame(rd);
  }

  function draw_segment(segmentsFrom, colors) {
      x.clearRect(0,0,w,h);
      for (var _i = 1; _i < segmentsFrom.length; _i++) {
        var i = segmentsFrom[_i-1].top;
        var j = segmentsFrom[_i-1].bottom;
        var next = segmentsFrom[_i].bottom;
        x.beginPath();
        x.moveTo(i.x, i.y);
        x.lineTo(j.x, j.y);
        x.lineTo(next.x, next.y);
        x.closePath();
        x.fillStyle = colors[_i-1];
        x.fill();
      }
  }

  var bgaction = debounce(function() {
    // draw();
    generate_segments();
  }, 250);

  document.onclick = bgaction;
  document.ontouchstart = bgaction;
//   draw();
    generate_segments();

})();
