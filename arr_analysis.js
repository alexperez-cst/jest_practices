function arrAnalysis(arr) {
  return {
    average: aver(arr),
    min: min(arr),
    max: max(arr),
    length: length(arr),
  }
}

function aver(arr) {
  return arr.reduce((tot, act) => tot + act, 0) / arr.length;
}
function min(arr) {
  return Math.min(...arr);
}
function max(arr) {
  return Math.max(...arr);
}
function length(arr) {
  return arr.length;
}
module.exports = arrAnalysis;
