import { printLargeArray, printMemoryUsage, randomNumbers } from './_utils.mjs';

const numbers = randomNumbers(100000);

printLargeArray(numbers);
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

printLargeArray(numbers);
console.timeEnd('insertion-sort');

printMemoryUsage();