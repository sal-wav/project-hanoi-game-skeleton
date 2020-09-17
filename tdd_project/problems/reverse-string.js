
function reverseString(str) {
  let letterArray = str.split('');
  let reversedArray = [];
  for (let i = 0; i < str.length; i++) {
    reversedArray.push(letterArray.pop())
  }
  return reversedArray.join('');
}


module.exports = reverseString;