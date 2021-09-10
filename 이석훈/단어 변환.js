function solution(begin, target, words) {
  let ansArr = [];
//bfs 함수 생성
  function findAns(change, count, wordArr) {
   //변환할 단어와 words에 있는 단어와 한글자만 차이나야 하므로 차이가 얼마나 나는지를 저장할 변수 생성
    let countNum = Array(words.length)
      .fill()
      .map((v, i) => 0);

    
    //바뀔 단어를 넣을 변수 생성
    let changeIndex;

    for (let i = 0; i < wordArr.length; i++) {
      //이미 탐색된 word라면 지나감
      if (wordArr[i] === 1) {
      
      } else {
        //같은 위치에서 다른 알파벳이라면 해당 위치의 countNum 인자에 1을 더함(몇개나 다른지를 알기 위해)
        for (let k = 0; k < wordArr[i].length; k++) {
          if (change[k] !== wordArr[i][k]) {
            countNum[i]++;
          }
        }
      }
    }
//모든 단어를 다 파악한 이후, 한글자만 바뀌는 것이 없다면(바꿀수 있는 글자가 없다면) -1을 넣음
    if (!countNum.includes(1)) {
      ansArr.push(-1);
    } else {
      //바꿀 수 있는 단어가 타겟과 다르다면 바꿀 수 있는 단어를 함수에 넣고 count+1, 바꿀 단어는 words에서 1로 바꾸고 다시 탐색
      for (let j = 0; j < countNum.length; j++) {
        if (countNum[j] === 1 && wordArr[j] !== target) {
          changeIndex = wordArr[j];
          wordArr[j] = 1;

          findAns(changeIndex, count + 1, wordArr);
          //타겟과 같다면 count+1을 넣음
        } else if (countNum[j] === 1 && wordArr[j] === target) {
          ansArr.push(count + 1);
        }
      }
    }
  }
  //처음 탐색 시 초기값을 넣음.
  findAns(begin, 0, words);
//오름차순으로 변환하여, -1만 있을 때는 -1을 반환, 아니라면 -1이 아닌 가장 작은 수를 반환함.
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
