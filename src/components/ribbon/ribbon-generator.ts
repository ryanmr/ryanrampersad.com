interface Point {
  x: number;
  y: number;
}

interface Segment {
  top: Point;
  bottom: Point;
}

export interface RibbonGeneratorOptions {
  /**
   * A stretch factor
   */
  factor: number;

  /**
   * Transparency factor as a decimal
   */
  alpha: number;

  /**
   * Determines where leftside begins vertically
   */
  initialOffset: number;

  /**
   * Stagger build out duration.
   */
  staggerBuildOutDuration: number;
}

export class RibbonGenerator {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;
  #pixelRatio: number;
  #width: number;
  #height: number;

  #animator: number = 0;

  #stagger: boolean = true;

  #options: RibbonGeneratorOptions = {
    factor: 120,
    alpha: 0.5,
    initialOffset: 0.7,
    staggerBuildOutDuration: 1000,
  };

  constructor(
    element: HTMLCanvasElement,
    options: Partial<RibbonGeneratorOptions> = {}
  ) {
    this.#canvas = element;
    this.#context = element.getContext("2d")!;

    this.#pixelRatio = window.devicePixelRatio || 1;
    this.#width = window.innerWidth;
    this.#height = window.innerHeight;

    this.#init(options);
  }

  #init(options: Partial<RibbonGeneratorOptions>) {
    this.#pixelRatio = window.devicePixelRatio || 1;
    this.#width = window.innerWidth;
    this.#height = window.innerHeight;

    this.#canvas.width = this.#width * this.#pixelRatio;
    this.#canvas.height = this.#height * this.#pixelRatio;

    this.#context.scale(this.#pixelRatio, this.#pixelRatio);

    this.#options = { ...this.#options, ...options };
    this.#context.globalAlpha = this.#options.alpha;
  }

  #calculateY(y: number): number {
    var t = y + (Math.random() * 2 - 1.3) * this.#options.factor;
    return t < this.#options.factor ? this.#calculateY(y) : t;
  }

  #calculateX(x: number): number {
    return x + Math.random() * 2 * this.#options.factor;
  }

  #getSegments(): Segment[] {
    var segments: Segment[] = [];
    var initial: Segment = {
      top: {
        x: 0,
        y:
          this.#height * this.#options.initialOffset +
          this.#options.factor * 0.7,
      },
      bottom: {
        x: 0,
        y:
          this.#height * this.#options.initialOffset -
          this.#options.factor * 0.7,
      },
    };
    segments.push(initial);
    var threshold = this.#width + this.#options.factor;

    while (segments[segments.length - 1].bottom.x < threshold) {
      var topPoint = segments[segments.length - 1].top;
      var bottomPoint = segments[segments.length - 1].bottom;

      let x = 0;
      let y = 0;
      let area = 0;

      // ensures beefy triangles
      do {
        x = this.#calculateX(bottomPoint.x);
        y = this.#calculateY(bottomPoint.y);
        area = triangleArea(topPoint, bottomPoint, { x, y });
      } while (area < 800);

      segments.push({
        top: segments[segments.length - 1].bottom,
        bottom: { x: x, y: y },
      });
    }

    return segments;
  }

  #getColors(number: number) {
    var theta = 0;
    var tau = 2 * Math.PI;
    var colors = [];
    for (var k = 0; k < number; k++) {
      theta += tau / 20;
      var red = Math.round(35 * Math.sin(theta) + 200);
      red += Math.floor(Math.random() * 30) - 15;
      var color = "rgb(" + red + ",0,0)";
      colors.push(color);
    }
    return colors;
  }

  public resetAndGenerate() {
    this.#init(this.#options);
    return this.generate();
  }

  public generate() {
    this.terminate();

    const allSegments = this.#getSegments();
    const red = this.#getColors(allSegments.length);

    var time0 = 0;

    let shouldMove = true;

    var redraw = (raf: number) => {
      if (time0 === 0) {
        time0 = raf;
      }

      const tDiff = raf - time0;

      const durationPerSegment =
        this.#options.staggerBuildOutDuration / allSegments.length;

      const segmentsToDraw = this.#stagger
        ? Math.floor(tDiff / durationPerSegment)
        : allSegments.length;

      const colors = red.slice(0, segmentsToDraw);
      const segments = allSegments.slice(0, segmentsToDraw);

      var computedSegments = [];

      for (var k = 0; k < segments.length; k++) {
        var segment = segments[k];

        if (shouldMove) {
          var offset = k + raf / 1000;
          var next_x = (1 / 10) * Math.cos(offset);
          var next_y = (1 / 4) * Math.sin(offset);
          if (k !== 0 && k !== segments.length - 1) {
            segment.bottom.x += next_x;
          }
          segment.bottom.y += next_y;
        }

        computedSegments.push(segment);
      }

      this.#tick(computedSegments, colors);
      this.#animator = requestAnimationFrame(redraw);
    };

    this.#animator = requestAnimationFrame(redraw);
  }

  public setStagger(val: boolean) {
    this.#stagger = val;
  }

  #tick(segments: Segment[], colors: string[]) {
    this.#context.clearRect(0, 0, this.#width, this.#height);
    for (var i = 1; i < segments.length; i++) {
      var previous = segments[i - 1];
      var top = previous.top;
      var bottom = previous.bottom;
      var next = segments[i].bottom;
      var color = colors[i - 1];

      var gradient = this.#context.createLinearGradient(
        top.x,
        top.y,
        next.x,
        next.y
      );

      gradient.addColorStop(0, color);
      gradient.addColorStop(0.5, "rgba(255, 0, 0, .75)");
      gradient.addColorStop(1, color);

      this.#context.beginPath();
      this.#context.moveTo(top.x, top.y);
      this.#context.lineTo(bottom.x, bottom.y);
      this.#context.lineTo(next.x, next.y);
      this.#context.closePath();
      this.#context.fillStyle = gradient;
      this.#context.strokeStyle = "rgba(0, 0, 0, .3)";
      this.#context.stroke();
      this.#context.fill();
    }
  }

  public terminate() {
    this.#animator && cancelAnimationFrame(this.#animator);
  }
}

function triangleArea(p1: Point, p2: Point, p3: Point) {
  return Math.abs(
    (p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2
  );
}
