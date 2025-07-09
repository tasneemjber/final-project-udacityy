import { shuffle } from'../starter/src/shuffle.js'; 
import { strict as assert } from 'assert';

describe('shuffle function', () => {
  it('should reorder the array elements', () => {
    const original = [1, 2, 3, 4, 5];
    let isDifferent = false;


    for (let i = 0; i < 10; i++) {
      const result = shuffle(original);
      if (!isSame(result, original)) {
        isDifferent = true;
        break;
      }
    }

    assert.ok(isDifferent, 'Shuffle should return a different order at least once');

    // تأكد أن كل العناصر نفسها بدون نقصان
    const shuffled = shuffle(original);
    assert.deepEqual(
      [...shuffled].sort(),
      [...original].sort(),
      'Shuffled array should have same elements'
    );
  });
});

function isSame(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);
}
