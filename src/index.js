module.exports = function getZerosCount(number) {
  // your implementation
  var number;
  var result = 0;
  while (number > 0) {
    number = parseInt(number / 5);
    result = parseInt(result + number);
  }
  return result;
}