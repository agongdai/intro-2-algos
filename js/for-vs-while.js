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

console.time('for-loop');
for(let f = 0; f < n; f++) {
  const j = f;
}
console.timeEnd('for-loop');
