interface ICanvasElement {
  x: number;
  y: number;
  width?: number;
  height?: number;
  radius?: number;
  startPos?: number;
  endPos?: number;
  anticlockwise?: boolean;
  name?: string;
  color?: string;
}

export default class Element implements ICanvasElement {
  public id: number;
  public x: number;
  public y: number;
  public width?: number;
  public height?: number;
  public radius?: number;
  public startPos?: number;
  public endPos?: number;
  public anticlockwise?: boolean;
  public color?: string;
  public name?: string;

  constructor(elementObject: ICanvasElement) {
    this.x = elementObject.x;
    this.y = elementObject.y;
    this.width = elementObject.width;
    this.height = elementObject.height;
    this.radius = elementObject.radius;
    this.startPos = elementObject.startPos;
    this.endPos = elementObject.endPos;
    this.anticlockwise = elementObject.anticlockwise;
    this.name = elementObject.name;
    this.color = elementObject.color;
    this.id = Math.floor(Math.random() * 100000);
  }

  public setPosition(x?: number, y?: number) {
    this.x = x;
    this.y = 0;
  }
}
