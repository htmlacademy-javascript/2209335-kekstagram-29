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


const isPalindrome = (str) => {
  const normalizeStr = str.replaceAll(' ').toUpperCase();
  const reversedStr = normalizeStr.split().reverse().join();

  return normalizeStr === reversedStr;
};
console.log('isPalindrome');
console.log('кекс', isPalindrome('кекс'));
console.log('топот', isPalindrome('топот'));
console.log('Лёша на полке клопа нашёл', isPalindrome('Лёша на полке клопа нашёл'));


const takeNum = (str) => {
  let result = '';
  const line = str.toString().split('');
  const testAll = (item) => +item;
  line.forEach((item) => {
    if (!Number.isNaN(testAll(item))) {
      result = result + item;
    }
  });
  return +result;
};
console.log('takeNum');
console.log(takeNum('2023 год'));
console.log(takeNum('ECMAScript 2022'));
console.log(takeNum('1 кефир, 0.5 батона'));
console.log(takeNum('агент 007'));
console.log(takeNum('а я томат'));
