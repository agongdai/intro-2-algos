import { printLargeArray, printMemoryUsage, randomNumbers } from './_utils.mjs';

// const input = await readInput();
// const numbers = input.map(Number);

const numbers = randomNumbers(1000000);

printLargeArray(numbers);
console.log('sorting ...');
console.time('merge-sort');

/**
 * Merge two sorted subarrays into a sorted subarray in place.
 * @param arr
 * @param start
 * @param middle
 * @param end
 */
const merge = (arr, start, middle, end) => {
  const left = arr.slice(start, middle + 1);
  const right = arr.slice(middle + 1, end + 1);
  left.push(Infinity);
  right.push(Infinity);
  let i = 0;
  let j = 0;
  for (let k = start; k <= end; k++) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
  }
}

const mergeSort = (arr, start, end) => {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);
    merge(arr, start, middle, end);
  }
}

mergeSort(numbers, 0, numbers.length - 1);

printLargeArray(numbers);
console.timeEnd('merge-sort');

printMemoryUsage();