import React from 'react'

class Ribbon extends React.Component {
  componentDidUpdate() {
    this.generate()
  }
  componentDidMount() {
    const canvas = this.refs.canvas
    this.generator = new RibbonGenerator(canvas)
    this.generator.generate()
    this._addListener()
  }

  componentWillUnmount() {
    this._removeListener()
  }

  _addListener() {
    if (window) {
      window.addEventListener('click', this.generate.bind(this))
    }
  }

  _removeListener() {
    if (window) {
      window.addEventListener('click', this.generate.bind(this))
    }
  }

  generate(event) {
    if (this.generator) {
      this.generator.generate()
    }
  }

  render() {
    return <canvas id="ribbon" ref="canvas" />
  }
}

export { Ribbon }

class RibbonGenerator {
  constructor(element, options = {}) {
    this.canvas = element
    this.context = element.getContext('2d')
    this.pixelRatio = window.devicePixelRatio || 1
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.canvas.width = this.width * this.pixelRatio
    this.canvas.height = this.height * this.pixelRatio

    this.context.scale(this.pixelRatio, this.pixelRatio)

    const defaultOptions = {
      factor: 120,
      alpha: 0.5,
      initialOffset: 0.7
    }

    this.options = { ...defaultOptions, ...options }
    this.context.globalAlpha = this.options.alpha
  }

  _calculateY(y) {
    var t = y + (Math.random() * 2 - 1.2) * this.options.factor
    return t > this.options.height || t < this.options.factor ? this._calculateY(y) : t
  }

  _calculateX(x) {
    return x + Math.random() * 2 * this.options.factor
  }

  getSegments() {
    var segments = []
    var initial = {
      top: { x: 0, y: this.height * this.options.initialOffset + this.options.factor },
      bottom: { x: 0, y: this.height * this.options.initialOffset - this.options.factor }
    }
    segments.push(initial)
    var threshold = this.width + this.options.factor
    while (segments[segments.length - 1].bottom.x < threshold) {
      var bottomPoint = segments[segments.length - 1].bottom
      var x = this._calculateX(bottomPoint.x)
      var y = this._calculateY(bottomPoint.y)
      segments.push({
        top: segments[segments.length - 1].bottom,
        bottom: { x: x, y: y }
      })
    }
    return segments
  }

  getColors(number) {
    var theta = 0
    var tau = 2 * Math.PI
    var colors = []
    for (var k = 0; k < number; k++) {
      theta += tau / 20
      var red = Math.round(35 * Math.sin(theta) + 200)
      red += Math.floor(Math.random() * 30) - 15
      var color = 'rgb(' + red + ',0,0)'
      colors.push(color)
    }
    return colors
  }

  generate(segments, colors) {
    var self = this
    segments = segments || this.getSegments()
    colors = colors || this.getColors(segments.length)
    var counter = 0

    var draw = function() {
      counter++
      var diff = []

      for (var k = 0; k < segments.length; k++) {
        var offset = k + counter / 100
        var next_x = 1 / 10 * Math.cos(offset)
        var next_y = 1 / 4 * Math.sin(offset)
        var segment = segments[k]
        if (k !== 0 && k !== segments.length - 1) {
          segment.bottom.x += next_x
        }
        segment.bottom.y += next_y
        diff.push(segment)
      }
      self._draw(diff, colors)
    }

    var redraw = function() {
      draw()
      requestAnimationFrame(redraw)
    }

    requestAnimationFrame(redraw)
  }

  _draw(segments, colors) {
    this.context.clearRect(0, 0, this.width, this.height)
    for (var i = 1; i < segments.length; i++) {
      var previous = segments[i - 1]
      var top = previous.top
      var bottom = previous.bottom
      var next = segments[i].bottom
      var color = colors[i - 1]

      var gradient = this.context.createLinearGradient(top.x, top.y, next.x, next.y)
      gradient.addColorStop(0, color)
      gradient.addColorStop(0.5, 'rgba(255, 0, 0, .75)')
      gradient.addColorStop(1, color)

      this.context.beginPath()
      this.context.moveTo(top.x, top.y)
      this.context.lineTo(bottom.x, bottom.y)
      this.context.lineTo(next.x, next.y)
      this.context.closePath()
      this.context.fillStyle = gradient
      this.context.strokeStyle = 'rgba(0, 0, 0, .3)'
      this.context.stroke()
      this.context.fill()
    }
  }
}

// ;(function() {

// var canvas = document.getElementById('ribbon');
// if (canvas) {
//   var generator = new Ribbon(canvas);
//   generator.generate();

//   var bgaction = debounce(function () {
//     generator.generate();
//   }, 250);
//   document.onclick = bgaction;
//   document.ontouchstart = bgaction;
// }
// })()
