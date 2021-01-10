function reverseString(str) {
  return str.split('').reduce((final, act) => act + final, '');
}
module.exports = reverseString;
