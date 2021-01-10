const clc = require('./calculator.js');

it('sum 23 + 17', () => {
  expect(clc.sum(23, 17)).toBe(40);
})
it('sum negatives -12 + -45', () => {
  expect(clc.sum(-12, -45)).toBe(-57);
})
it('substract 52 - 24', () => {
  expect(clc.subs(52, 24)).toBe(28);
})
it('multiply 45 * 2', () => {
  expect(clc.mult(45, 2)).toBe(90);
})
it('divide 25 / 5', () => {
  expect(clc.div(25, 5)).toBe(5);
})
