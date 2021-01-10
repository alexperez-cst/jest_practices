function caesar(init) {
  let total = '';
  for (const char of init) {
    if (/[\s\d]/.test(char)) {
      total += char;
      continue;
    }
    if (char.toUpperCase() === char) {
      total += encrypt(char, true);
      continue;
    }
    total += encrypt(char, false)
  }
  return total;
}
function encrypt(char, mayus) {
  if (mayus) {
    return stringify(((char.charCodeAt() + 1 - 65) % 26) + 65);
  }
  return stringify(((char.charCodeAt() + 1 - 97) % 26) + 97);
}
function stringify(code) {
  return String.fromCodePoint(code);
}
module.exports = caesar;
