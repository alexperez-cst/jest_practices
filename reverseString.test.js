const rev = require('./reverseString.js')

it('Reverse Alex Perez', () => {
  expect(rev('Alex Perez')).toBe('zereP xelA');
})
it('Reverse Antonio Sarosi', () => {
  expect(rev('Antonio Sarosi')).toBe('isoraS oinotnA');
})
