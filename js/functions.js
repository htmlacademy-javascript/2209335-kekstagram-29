function checkMaxLengthStr(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}


const isPalindrome = (str) => {
  const normalizeStr = str.toLowerCase().replaceAll(' ','');
  console.log(normalizeStr);
  console.log(normalizeStr.split(''));
  const reversedStr = normalizeStr.split('').reverse().join(' ');

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

const validateMeeting = (startWork, endWork, startMeeting, delayMeeting) => {
  const currentDate = new Date();
  const [workStartHH, workStartMM] = startWork.split(':');
  const startWorkDate = new Date(currentDate.setHours(+workStartHH, +workStartMM, 0));
  const [workEndHH, workEndMM] = endWork.split(':');
  const endWorkData = new Date(currentDate.setHours(+workEndHH, +workEndMM, 0));
  const [meetingHH, meetingMM ] = startMeeting.split(':');
  const meetingDateStart = new Date(currentDate.setHours(+meetingHH, +meetingMM, 0));
  const meetingDateEnd = new Date(currentDate.setHours(+meetingHH, +meetingMM + delayMeeting, 0));

  return meetingDateStart >= startWorkDate && meetingDateEnd <= endWorkData;

};

