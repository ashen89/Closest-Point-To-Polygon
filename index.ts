// Import stylesheets
import './style.css';
import { closestPointInPolygon } from './src/closestPointToPolygon';

interface Point {
  x: number;
  y: number;
}

const polygons = [
  [
    { x: 200, y: 150 },
    { x: 150, y: 150 },
    { x: 50, y: 150 },
    { x: 100, y: 50 },
    { x: 200, y: 150 },
  ],
  [
    { x: 350, y: 150 },
    { x: 250, y: 150 },
    { x: 250, y: 50 },
    { x: 350, y: 50 },
    { x: 350, y: 150 },
  ],
];

//RandomPoint x,y
let Point = {
  x: 160,
  y: 80,
};

var canvas = document.getElementById('canvas')! as HTMLCanvasElement;
var ctx = canvas.getContext('2d')!;
canvas.width = 400;
canvas.height = 500;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the point
  function drawPoint(point) {
    if (point) {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI, false);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.stroke();
    }
  }
  drawPoint(Point);

  function closestPoint(point) {
    if (point) {
      ctx.strokeStyle = 'rgba(255,0,0,.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI, false);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.stroke();
    }
  }
  polygons.forEach((polygon) => {
    closestPoint(closestPointInPolygon(polygon, Point));
  });
  // closestPoint(closestPointInPolygon(polygon, Point));

  // Draw polygons
  function drawPolygon(polygon) {
    ctx.fillStyle = 'rgba(0, 8, 247,.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    polygon.forEach(function (vertex) {
      ctx.lineTo(vertex.x, vertex.y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  polygons.forEach((polygon) => {
    drawPolygon(polygon);
  });
}

render();

function randomCordRender(c) {
  const coordinates = { x: c.clientX, y: c.clientY };
  const { x: Ox, y: Oy } = (
    c.target as HTMLCanvasElement
  ).getBoundingClientRect();
  Point = {
    x: Math.floor(coordinates.x - Ox),
    y: Math.floor(coordinates.y - Oy),
  };
  render();
}

let isMouseDown = false;

canvas.onmousedown = function (c) {
  isMouseDown = true;
  randomCordRender(c);
};
canvas.onmouseup = function (c) {
  isMouseDown = false;
  randomCordRender(c);
};
canvas.onmousemove = function (c) {
  if (isMouseDown) {
    randomCordRender(c);
  }
};
