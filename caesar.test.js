const csr = require('./caesar.js')
it('cypher abcdefghijklmnopqrstuvwxyz', () => {
  expect(csr('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
})
it('cypher defend the east wall of the castle', () => {
  expect(csr('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})
