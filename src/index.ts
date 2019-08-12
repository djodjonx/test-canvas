import "./style/style.css";
import Canvas from "./classes/Canvas";
import Element from "./classes/Element";

const canvasWidth = 450;
const canvasHeight = 450;

const canvas = new Canvas("app", canvasWidth, canvasHeight);

canvas.setBaseFill("red");

/**
function move(canvas, x, y) {
  const width = 30;
  const height = 5;
  let rec = new Element({
    width,
    height,
    x,
    y
  });

  canvas.add(rec);
  setTimeout(() => {
    x += 200;
    if (x >= canvas.width) {
      y += height;
      x = 0;
    }
    if (y === Math.floor(Math.random() * 200)) {
      y += 50;
    }

    canvas.removeDraw(rec);
    if (x <= canvas.width && y <= canvas.height) {
      move(canvas, x, y);
    }
  }, 1);
  console.info("end");
  return;
}
*/

let rec = new Element({
  width: 50,
  height: 10,
  x: 20,
  y: 50,
  name: "rec"
});

let arc = new Element({
  x: 240,
  y: 160,
  radius: 20,
  startPos: 0,
  endPos: Math.PI * 2,
  name: "arc"
});

canvas.addElement(arc);

canvas.addElement(rec);

canvas.start();

// canvas.getElement("rect").setPosition(100, 200);
// canvas.clear();

// move(canvas, Math.floor(Math.random() * 250), Math.floor(Math.random() * 250));
// move(canvas, Math.floor(Math.random() * 250), Math.floor(Math.random() * 250));
// move(canvas, Math.floor(Math.random() * 250), Math.floor(Math.random() * 250));
// move(canvas, Math.floor(Math.random() * 250), Math.floor(Math.random() * 250));
// move(canvas, Math.floor(Math.random() * 250), Math.floor(Math.random() * 250));
// move(canvas, Math.floor(Math.random() * 250), Math.floor(Math.random() * 250));
// move(canvas, Math.floor(Math.random() * 250), Math.floor(Math.random() * 250));
