function solution(name) {
    //알파벳을 A에서 움직여야 하는 횟수로 바꾸어 저장하는 배열, 바꿀 필요가 없는 index의 개수
    //현재 조작할 위치, 그 위치의 알파벳으 바꾸는 최소한의 수를 저장할 변수를 생성
  const nameArr = [];
  let searchedIndex = 0;
  let nowIndex = 0;
  let countNum = 0;
    //charCodeAt를 사용하여 A를 첫번째로 두고, 몇번째 알파벳인지를 nameArr에 저장(최소횟수는 아님)
  for (let i = 0; i < name.length; i++) {
    nameArr.push(Number(name.charCodeAt(i)) - 65);
    if (Number(name.charCodeAt(i)) - 65 === 0) {
      searchedIndex++;
    }
  }
//첫 글자가 A가 아니라면, A에서 최소한 몇번 움직이면 타겟 알파벳이 되는지를 countNum에 저장.
  if (nameArr[0] !== 0) {
    if (nameArr[0] - 13 <= 0) {
      countNum = nameArr[0];
    } else {
      countNum = 26 - nameArr[0];
    }
      //첫번째 글자를 조사했으므로,0으로 바꾸고(0이면 조사를 건너뛰므로) searchedIndex에 1을 더함.
    nameArr[0] = 0;
    searchedIndex++;
  }
//모든 글자를 다 변환할 때 까지
  while (searchedIndex !== nameArr.length) {
      //현재 글자를 기준으로, 왼쪽과 오른쪽 중 0이 아닌 숫자가 가장 빨리 나오는 부분을 탐색.
    let goLeft = nowIndex;
    let goRight = nowIndex;
    let leftCount = 0;
    let rightCount = 0;
    while (nameArr[goLeft] === 0) {
      if (goLeft === 0) {
        goLeft = nameArr.length - 1;
        leftCount++;
      } else {
        goLeft--;
        leftCount++;
      }
    }
    while (nameArr[goRight] === 0) {
      if (goRight === nameArr.length - 1) {
        goRight = 0;
        rightCount++;
      } else {
        goRight++;
        rightCount++;
      }
    }
       // 둘 중 이동횟수가 짧은 방향을 선택하여 A에서 최소한 몇번 움직이면 타겟 알파벳이 되는지를 countNum에 추가.
    if (rightCount <= leftCount) {
      nowIndex = goRight;
      searchedIndex++;
       
      if (nameArr[nowIndex] - 13 <= 0) {

        countNum += rightCount + nameArr[nowIndex];
      } else {
        countNum += rightCount + 26 - nameArr[nowIndex];
      }

      nameArr[nowIndex] = 0;
    } else {
      nowIndex = goLeft;
      searchedIndex++;
      if (nameArr[nowIndex] - 13 <= 0) {
        countNum += leftCount + nameArr[nowIndex];
      } else {
        countNum += leftCount + 26 - nameArr[nowIndex];
      }
//조사한 이후 해당 index 값을 0으로 변환
      nameArr[nowIndex] = 0;
    }
  }
//모든 조작 횟수를 return
  return countNum;
}
