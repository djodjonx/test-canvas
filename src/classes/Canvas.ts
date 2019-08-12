import Element from "./Element";

interface CanvasDrawRectObject {
  width: number;
  height: number;
  x: number;
  y: number;
  color?: string;
  name?: string;
}

interface CanvasDrawArcObject {
  x: number;
  y: number;
  radius: number;
  start: number;
  end: number;
  anticlockwise?: boolean;
  color?: string;
  name?: string;
}

export default class Canvas {
  mountPoint: string;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  elements: Element[];
  frameRate?: number;

  private appDiv: HTMLElement;
  private canvas: any;
  private baseFill: string;
  private action: any;

  constructor(
    mountPoint: string,
    width: number,
    height: number,
    frameRate?: number
  ) {
    this.mountPoint = mountPoint;
    this.width = width;
    this.height = height;
    this.elements = [];
    this.canvas = this.createCanvas();
    this.frameRate = frameRate || 60;
  }

  private createCanvas() {
    this.appDiv = document.getElementById(this.mountPoint);
    this.appDiv.innerHTML = `<canvas id="canvas" width="${
      this.width
    }" height="${this.height}"></canvas>`;

    return document.getElementById("canvas");
  }

  public get context(): CanvasRenderingContext2D {
    return this.canvas.getContext("2d");
  }

  public setBaseFill(color: string): void {
    this.baseFill = color;
  }

  public setFrameRate(value: number): void {
    this.frameRate = value;
  }

  public drawRect(drawObject: Element): void {
    this.context.beginPath();
    this.context.fillStyle = drawObject.color || this.baseFill;
    this.context.rect(
      drawObject.x,
      drawObject.y,
      drawObject.width,
      drawObject.height
    );
    this.context.fill();
    this.context.closePath();
  }

  public drawCircle(drawObject: Element): void {
    this.context.beginPath();
    this.context.fillStyle = drawObject.color || this.baseFill;
    this.context.arc(
      drawObject.x,
      drawObject.y,
      drawObject.radius,
      drawObject.startPos,
      drawObject.endPos,
      drawObject.anticlockwise || false
    );
    this.context.fill();
    this.context.closePath();
  }

  public clear(): void {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  public addElement(element: Element): void {
    this.elements.push(element);
  }

  public start() {
    this.action = setInterval(() => this.motion(), this.getRate());
  }

  public end() {
    this.action.clearInterval();
  }

  private motion(): void {
    // this.clear();
    for (let i = 0; i < this.elements.length; i++) {
      console.info("loop");
      if (this.elements[i].radius) {
        console.info("circle");
        this.drawCircle(this.elements[i]);
      } else {
        this.drawRect(this.elements[i]);
      }
    }
  }

  public getElement(id): Element {
    return this.elements[this.findElement(id)];
  }

  public removeElement(id: number | string): void {
    const index = this.findElement(id);
    this.elements.splice(index, 1);
  }

  private findElement(identifier: number | string): number {
    return this.elements.findIndex(el => {
      console.log(el);
      if (typeof identifier === "number") {
        return el.id === identifier;
      } else {
        return el.name === identifier;
      }
    });
  }

  private getRate(): number {
    return 1000;
  }
}
