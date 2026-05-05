module.exports = function towelSort(matrix) {
  if (!matrix) return [];

  const matrixAll = matrix.map((item, index) => {
    if (index % 2 !== 0) {
      item.reverse();
    }
    return item;
  });

  const result = [].concat(...matrixAll);

  return result;
};
