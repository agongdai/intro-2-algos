/**
 * Try different n.
 *
 * `while` is slower when n is smaller than ~1 million. Then they are pretty close.
 *
 * @type {number}
 */

const n = 1000000000;

let i = 0;
console.time('while-loop');
while (i++ < n) {
  const j = i; // dummy nothing
}
console.timeEnd('while-loop');

const usedByWhile = process.memoryUsage();
for (let key in usedByWhile) {
  console.log(`${key} ${Math.round(usedByWhile[key] / 1024 / 1024 * 100) / 100} MB`);
}
