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
}
