import { printLargeArray, printMemoryUsage, randomNumbers, isArraySorted } from './_utils.mjs';

/**
 * For an existing sorted sub array, find the position to insert a new item.
 * If the new item is equal to an existing element, it should be inserted after the existing element.
 * If the new item is not in the array, it should be inserted at the position to keep the array sorted.
 *
 * @param arr
 * @param newItem
 * @param endIndex
 * @returns {*|number}
 */
export const binaryFindPosToInsert = (arr, newItem, endIndex = arr.length - 1) => {
  if (arr.length === 0 || endIndex < 0 || endIndex > arr.length - 1) {
    return 0;
  } 

  // if the new item is less than the first element, insert it at the beginning.
  if (newItem < arr[0]) {
    return 0;
  }

  // if the new item is greater than or equal to the last element, insert it at the end.
  if (newItem >= arr[endIndex]) {
    return endIndex + 1;
  }

  // `left` and `right` are inclusive indexes of the array, `middle` is the index of the middle element.
  let middle = Math.floor(endIndex / 2);
  let left = 0;
  let right = endIndex;

  // binary search. The loop will stop when `middle` is the position to insert the new item.
  while (middle > left && middle < right) {
    // if the new item is equal to the middle element, consider it should be inserted after the middle element.
    if (newItem >= arr[middle]) {
      left = middle;
    } else {
      right = middle;
    }
    middle = Math.floor((left + right) / 2);
  }

  return middle + 1;
}

/**
 * Insert a new item into a sorted array in place.
 * @param arr
 * @param newItem
 * @param endIndex
 */
export const insert = (arr, newItem, endIndex = arr.length - 1) => {
  const posToInsert = binaryFindPosToInsert(arr, newItem, endIndex);
  arr.splice(endIndex + 1, 1);
  arr.splice(posToInsert, 0, newItem);
};

/**
 * Recursive insertion sort.
 *
 * @note the recursive insertion sort is not efficient for large arrays due to the overhead of function calls.
 * @param arr
 * @param endIndex
 */
export const recursiveInsertionSort = (arr, endIndex = arr.length - 1) => {
  if (endIndex > 0) {
    recursiveInsertionSort(arr, endIndex - 1);
    insert(arr, arr[endIndex], endIndex - 1);
  }
  return arr;
}

const numbers = randomNumbers(1000);
console.time('recursive-insertion-sort');
printLargeArray(numbers);
console.log('sorting ...');
recursiveInsertionSort(numbers);
printLargeArray(numbers);
console.log('sorted: ', isArraySorted(numbers));
printMemoryUsage();
console.timeEnd('recursive-insertion-sort');



