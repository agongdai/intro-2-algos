import { printLargeArray, printMemoryUsage, randomNumbers } from './_utils.mjs';

const numbers = randomNumbers(100000);

printLargeArray(numbers);
console.log('sorting ...');
console.time('selection-sort');

for (let j = 0; j < numbers.length - 1; j++) {
  let minIndex = j;
  for (let i = j + 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
      minIndex = i;
    }
  }
  if (minIndex !== j) {
    const temp = numbers[j];
    numbers[j] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
}

printLargeArray(numbers);
console.timeEnd('selection-sort');

printMemoryUsage();