/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let x = 0;
  let p = preferences;
  for (i = 0; i<p.length; i++) {
    let ic = p[i] - 1;
    let ia = p[ic] - 1;
    let ib = p[ia] - 1;
    if (ib == i & ia != i) {
      x++;
    }
  }
  return x / 3;
}
  
