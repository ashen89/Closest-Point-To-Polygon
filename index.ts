// Import stylesheets
import './style.css';
import { closestPointInPolygon } from './src/closestPointToPolygon';

interface Point {
  x: number;
  y: number;
}

const polygon = [
  { x: 200, y: 150 },
  { x: 150, y: 150 },
  { x: 50, y: 150 },
  { x: 100, y: 50 },
  { x: 200, y: 150 },
];

const Point = {
  x: 180,
  y: 80,
};

//Edit here for render x and y from console.log
const closePoint = {
  x: 155,
  y: 105,
};

var canvas = document.getElementById('canvas')! as HTMLCanvasElement;
var ctx = canvas.getContext('2d')!;
canvas.width = 400;
canvas.height = 500;

closestPointInPolygon(polygon, Point);

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
  closestPoint(closePoint);

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
