// Import stylesheets
import './style.css';
import { closestPointInPolygon } from './src/closestPointToPolygon';

interface Point {
  x: number;
  y: number;
}

const polygon = [
  { x: 400, y: 200 },
  { x: 200, y: 200 },
  { x: 200, y: 50 },
  { x: 400, y: 50 },
  { x: 400, y: 200 },
];

const Point = {
  x: 100,
  y: 100,
};

const cPoint = {
  x: 400,
  y: 100,
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
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI, false);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.stroke();
    }
  }
  closestPoint(cPoint);

  // Draw polygons
  ctx.fillStyle = 'rgba(0, 8, 247,.1)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  polygon.forEach(function (vertex) {
    ctx.lineTo(vertex.x, vertex.y);
  });
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

render();
