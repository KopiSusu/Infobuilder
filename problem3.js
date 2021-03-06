// triangles can have a base of 1, 3, and 4 triangles;
// base triangles count as subtriangles with sides that help form the base of the overarching triangle;

function CountTriangles(base) {
  return Math.floor(base * (base + 2) * (2*base + 1) / 8);
}

console.log(CountTriangles(4));

