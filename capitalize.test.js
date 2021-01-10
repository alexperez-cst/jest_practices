const cp = require('./capitalize.js');
it('Capitalize luxemburgo', () => {
  expect(cp('luxemburgo')).toBe('Luxemburgo');
});
it('Stay capitalized', () => {
  expect(cp('Spain')).toBe('Spain');
})

