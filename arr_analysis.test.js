const arr = require('./arr_analysis.js');
it('[1,2,3,4,5,6,7]', () => {
  expect(arr([1, 2, 3, 4, 5, 6, 7])).toMatchObject({average: 3.5, min: 1, max: 7, length: 8});
})
it('[1,8,3,4,2,6]', () => {
  expect(arr([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})
