const populateArrayWithSequence = (start, numItems) => {
  return Array.from({length: numItems},(v, i) => i + start);
};

export default populateArrayWithSequence;
