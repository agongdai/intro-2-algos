import { readInput, printMemoryUsage, randomNumbers } from './_utils.mjs';

// const input = await readInput();
// const numbers = input.map(Number);

const numbers = randomNumbers(100000);

console.log('Before sorting:', numbers);
console.log('sorting ...');
console.time('insertion-sort');

for (let j = 1; j < numbers.length; j++) {
  const key = numbers[j];
  let i = j - 1;
  while (i >= 0 && numbers[i] > key) {
    numbers[i + 1] = numbers[i];
    i--;
  }
  numbers[i + 1] = key;
}

console.log('After sorting:', numbers);
console.timeEnd('insertion-sort');

printMemoryUsage();