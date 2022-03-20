export function closestPointInPolygon(poly, pos: Point): Point {
  //1- Checking if the point is inside the polygon. If it is then return point

  function checkPointInsidePolygon(poly, pos) {
    const n = poly.length;
    const x = pos.x;
    const y = pos.y;
    let count = 0;

    for (let i = 0; i < n - 1; i++) {
      let x1 = poly[i].x;
      let x2 = poly[i + 1].x;
      let y1 = poly[i].y;
      let y2 = poly[i + 1].y;

      if (y < y1 != y < y2 && x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1) {
        count += 1;
      }
    }
    return count % 2 === 0 ? false : true;
  }
  const rc = checkPointInsidePolygon(poly, pos);
  if (rc === true) {
    return pos;
  }

  //2- If the point is outside the polygon
  function outSideClosestPoint(poly, pos) {
    let map = [];
    let minDis = 0;

    for (let j = 0; j < poly.length - 1; j++) {
      let disArr = {};
      let A = pos.x - poly[j].x;
      let B = pos.y - poly[j].y;
      let C = poly[j + 1].x - poly[j].x;
      let D = poly[j + 1].y - poly[j].y;

      let dot = A * C + B * D;
      let len_sq = C * C + D * D;
      let param = -1;
      if (len_sq != 0)
        //in case of 0 length line
        param = dot / len_sq;

      let dx, dy;

      if (param < 0) {
        disArr['x'] = poly[j].x;
        disArr['y'] = poly[j].y;
      } else if (param > 1) {
        disArr['x'] = poly[j + 1].x;
        disArr['y'] = poly[j + 1].y;
      } else {
        disArr['x'] = poly[j].x + param * C;
        disArr['y'] = poly[j].y + param * D;
      }

      dx = pos.x - disArr['x'];
      dy = pos.y - disArr['y'];
      disArr['dis'] = Math.sqrt(dx * dx + dy * dy);
      map.push(disArr);
    }
    console.log(map);

    for (let k = 0; k < map.length; k++) {
      if (minDis === 0) {
        minDis = map[0].dis;
      } else {
        minDis = map[k].dis;
      }
    }

    for (let l = 0; l < map.length; l++) {
      if (map[l].dis === minDis) {
        return console.log(map[l]);
      }
    }
  }
  outSideClosestPoint(polygon, Point);
}
