function solution(number, k) {
    //현재 index 값
  let nowIndex = 0;
    //input값을 숫자로 변환하여 한 글자씩 배열에 넣음
  let numArr = number.split("").map((v, i) => Number(v));
    //정답을 출력할 배열과, 모든 요소의 개수를 변수로 추가함.
  let ansArr = [];
  let allarrLength = [numArr.length];
//주어진 k 값 만큼 제거할 때 까지,
  while (k !== 0) {
      //현재 index값이 배열의 길이를 초과한 경우, k는 0이 아니므로 더 이상 제거할 값이 없는 경우임.
      //따라서, 중복되는 숫자가 이어지는 것
    if (nowIndex > numArr.length - 1) {
      numArr = ansArr;
      allarrLength.push(numArr.length);
      ansArr = [];
      nowIndex = 0;
      //중복되는 수가 계속 남아있으면 k가 지워지지 않으므로 오류가 난다고 생각했음.
      //11111의 경우 오류가 남.
      //수가 같은 경우를 고려=>더 이상 지워지지 않는, 중복되는 수를 삭제
      //444433332222 같은 경우, 4가 먼저 지워짐. 맨 마지막부터 중복되는 경우의 수를 세어야 맞음
      //+ ansArr.reverse().join("");을 쓰면, 다른 숫자인 경우 낮은 숫자가 남아 있게 됨.
      //"444433332222", 4인 경우, 4444332로 답이 나오게 됨.
           // for (let i = numArr.length - 1; i >= 0; i--) {
        //여기 for문에서 i = numArr.length - 2가 되면 맨 마지막 요소를 지나치게 됨. 실수하지 말것.
        // if (numArr[i] === numArr[i - 1]) {
        //   k--;
        //   if (k === 0) {
        //     return numArr.slice(0, i + 1).join("");
        //   }
        // } else {
        // }
        // }
        //생각해 보니 어차피 더이상 줄일 수 있는 수가 없으므로, 굳이 for문으로 찾을 필요가 없음
        //뒤에서부터 자름.
      if (allarrLength.length >= 2 && allarrLength[allarrLength - 1] === allarrLength[allarrLength - 2]) {
     
        return numArr.slice(0, numArr.length - k).join("");
      }
        //아직 index가 배열 길이를 초과하지 않았다면, 앞 뒤 숫자를 비교하여 뒤 숫자가 더 크다면 앞의 숫자를 지우고 뒤의 숫자를 취함.
    } else {
        //ansArr에 아직 아무런 값을 넣지 않은 경우
      if (ansArr.length === 0 && numArr[nowIndex] < numArr[nowIndex + 1]) {
        ansArr.push(numArr[nowIndex + 1]);
        k--;
        nowIndex += 2;
      } else if (ansArr && ansArr[ansArr.length - 1] < numArr[nowIndex]) {
          //ansArr의 마지막 값이 더 작은 것이므로 pop()을 이용
        while (ansArr && ansArr[ansArr.length - 1] < numArr[nowIndex]) {
          ansArr.pop();
          k--;
        //k개 만큼 삭제했다면 반복문을 빠져나옴
          if (k === 0 || ansArr.length === 0) {
            break;
          }
        }

        ansArr.push(numArr[nowIndex]);
       
        nowIndex += 1;
      } else {
        ansArr.push(numArr[nowIndex]);
        nowIndex++;
      }
    }
  }

  const ans = ansArr.join("") + numArr.slice(nowIndex).join("");

  var answer = ans;
  return answer;
}
