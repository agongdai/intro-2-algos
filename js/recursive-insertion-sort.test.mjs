import { describe, it } from 'node:test';
import assert from 'node:assert';
import { binaryFindPosToInsert, insert, recursiveInsertionSort } from './recursive-insertion-sort.mjs';
import { isArraySorted, randomNumbers } from './_utils.mjs';

describe('binaryFindPosToInsert function', () => {
  it('should return the correct position to insert a new item to a sorted array', () => {
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 0), 0);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 1), 1);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 2), 1);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 3), 2);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 4), 2);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 5), 3);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 6), 3);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 7), 4);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 8), 4);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 9), 5);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 5, 7, 9], 10), 5);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 3, 3, 5, 7, 7, 7, 7, 7, 9], 6), 5);
    assert.strictEqual(binaryFindPosToInsert([1, 3, 3, 3, 5, 7, 7, 7, 7, 7, 9], 7), 10);
    assert.strictEqual(binaryFindPosToInsert([1, 1, 1, 3, 5, 7, 9], 1), 3);
    assert.strictEqual(binaryFindPosToInsert([1, 1, 1, 3, 5, 7, 9, 9, 9], 9), 9);
  });

  it('should sort the array after inserting a new item', () => {
    const arr = [1, 3, 5, 7, 9];
    insert(arr, 0);
    assert.deepEqual(arr, [0, 1, 3, 5, 7, 9]);
    insert(arr, 3);
    assert.deepEqual(arr, [0, 1, 3, 3, 5, 7, 9]);
    insert(arr, 4);
    assert.deepEqual(arr, [0, 1, 3, 3, 4, 5, 7, 9]);
    insert(arr, 9);
    assert.deepEqual(arr, [0, 1, 3, 3, 4, 5, 7, 9, 9]);
    insert(arr, 11);
    assert.deepEqual(arr, [0, 1, 3, 3, 4, 5, 7, 9, 9, 11]);
  });

  it('should sort the array increasingly', () => {
    assert.deepEqual(recursiveInsertionSort([9, 7, 5, 3, 1]), [1, 3, 5, 7, 9]);
    assert.deepEqual(
      recursiveInsertionSort([9, 7, 8, 3, 1, 8, 11, 2, 0, 4, 9, 7, 6, 12]),
      [0, 1, 2, 3, 4, 6, 7, 7, 8, 8, 9, 9, 11, 12]
    );
  });

  it('should sort large arrays correctly', () => {
    const numbers = randomNumbers(1000);
    recursiveInsertionSort(numbers);
    assert.ok(isArraySorted(numbers));
  });
});