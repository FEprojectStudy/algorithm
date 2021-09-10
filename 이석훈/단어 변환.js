function solution(begin, target, words) {
  let ansArr = [];

  function findAns(change, count, wordArr) {
    let countNum = Array(words.length)
      .fill()
      .map((v, i) => 0);

    let changeIndex;

    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] === 1) {
      
      } else {
        for (let k = 0; k < wordArr[i].length; k++) {
          if (change[k] !== wordArr[i][k]) {
            countNum[i]++;
          }
        }
      }
    }

    if (!countNum.includes(1)) {
      ansArr.push(-1);
    } else {
      for (let j = 0; j < countNum.length; j++) {
        if (countNum[j] === 1 && wordArr[j] !== target) {
          changeIndex = wordArr[j];
          wordArr[j] = 1;

          findAns(changeIndex, count + 1, wordArr);
        } else if (countNum[j] === 1 && wordArr[j] === target) {
          ansArr.push(count + 1);
        }
      }
    }
  }
  findAns(begin, 0, words);

  ansArr = ansArr.sort((a, b) => a - b);
  if (ansArr[ansArr.length - 1] === -1) {
    return 0;
  } else {
    for (let i = 0; i < ansArr.length; i++) {
      if (ansArr[i] !== -1) {
        return ansArr[i];
      }
    }
  }
}
document.write(
  solution("1234567000", "1234567899", [
    "1234567800",
    "1234567890",
    "1234567899",
  ])
);
