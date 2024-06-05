import { printLargeArray, printMemoryUsage, randomNumbers } from './_utils.mjs';

// const input = await readInput();
// const numbers = input.map(Number);

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

export const mergeWithoutSentinels = (arr, start, middle, end) => {
  const left = arr.slice(start, middle + 1);
  const right = arr.slice(middle + 1, end + 1);
  let i = 0;
  let j = 0;
  for (let k = start; k <= end; k++) {
    if (i < left.length && (j >= right.length || left[i] <= right[j])) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
  }
}

/**
 * Merge sort an array in place.
 * @param arr
 * @param start
 * @param end
 */
const mergeSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);
    merge(arr, start, middle, end);
  }
}

/**
 * Merge sort an array in place without sentinels.
 * @param arr
 * @param start
 * @param end
 */
const mergeSortWithoutSentinels = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);
    mergeSortWithoutSentinels(arr, start, middle);
    mergeSortWithoutSentinels(arr, middle + 1, end);
    mergeWithoutSentinels(arr, start, middle, end);
  }
}

const numbers = randomNumbers(1000000);
console.time('merge-sort');
printLargeArray(numbers);
console.log('sorting ...');
mergeSort(numbers);
printLargeArray(numbers);
printMemoryUsage();
console.timeEnd('merge-sort');

const numbers2 = randomNumbers(1000000);
console.time('merge-sort without sentinels');
printLargeArray(numbers2);
console.log('sorting ...');
mergeSortWithoutSentinels(numbers2);
printLargeArray(numbers2);
printMemoryUsage();
console.timeEnd('merge-sort without sentinels');