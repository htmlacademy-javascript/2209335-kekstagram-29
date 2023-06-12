function checkMaxLengthStr(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
console.log('Проверяемая строка', checkMaxLengthStr('Проверяемая строка', 20));
console.log('Проверяемая строка', checkMaxLengthStr('Проверяемая строка', 18));
console.log('Проверяемая строка', checkMaxLengthStr('Проверяемая строка', 10));


const isPalindrome = (str) => {
  const normalizeStr = str.toLowerCase().replaceAll(' ','');
  console.log(normalizeStr);
  console.log(normalizeStr.split(''));
  const reversedStr = normalizeStr.split('').reverse().join('');

  return normalizeStr === reversedStr;
};
console.log('isPalindrome');
console.log(isPalindrome('топот'));
console.log(isPalindrome('Довод'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл'));


const takeNum = (str) => {
  let result = '';
  for (const el of str.toString()) {
    if (!Number.isNaN(parseInt(el, 10))){
      result += el;
    }
  }
  return +result !== 0 ? +result : NaN;
};

console.log('takeNum');
console.log(takeNum('2023 год'));
console.log(takeNum('ECMAScript 2022'));
console.log(takeNum('1 кефир, 0.5 батона'));
console.log(takeNum('агент 007'));
console.log(takeNum('а я томат'));
console.log(takeNum(-1));

