/**
 * Try different n.
 *
 * `while` is slower when n is smaller than ~1 million. Then they are pretty close.
 *
 * @type {number}
 */

const n = 1000000000;

console.time('for-loop');
for(let f = 0; f < n; f++) {
  const j = f;
}
console.timeEnd('for-loop');

const usedByFor = process.memoryUsage();
for (let key in usedByFor) {
  console.log(`${key} ${Math.round(usedByFor[key] / 1024 / 1024 * 100) / 100} MB`);
}
