function checkMaxLengthStr(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
console.log('Hellow', checkMaxLengthStr('Hellow', 5));
console.log('result', checkMaxLengthStr('result', 3));
console.log('StartResult', checkMaxLengthStr('StartResult', 20));
console.log('finish');


function isPalindrome(str) {
  const normalizeStr = str.replaceAll(' ').toUpperCase();
  let resultStr = '';
  for (let i = normalizeStr.length - 1; i >= 0; i--) {
    resultStr += normalizeStr.at(i);
  }
  return resultStr === normalizeStr;
}
console.log('кекс', isPalindrome('кекс'));
console.log('топот', isPalindrome('топот'));
