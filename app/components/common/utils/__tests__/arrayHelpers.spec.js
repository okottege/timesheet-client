import {populateArrayWithSequence} from '../arrayHelpers';

describe('Populate Array With Sequence should', () => {
  test.each([0, 1, 100])('handle %i as number of elements', (numItems) => {
    const sequence = populateArrayWithSequence(100, numItems);
    expect(sequence.length).toBe(numItems);
  });
  test('return empty sequence if number of items is zero', () => {
    const sequence = populateArrayWithSequence(100, -1);
    expect(sequence).toEqual([]);
  });
});
