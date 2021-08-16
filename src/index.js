module.exports = function reverse (n) {
  const reversedNum = num => parseInt(num.toString().split('').reverse().join(''))
  return reversedNum(n)
}
