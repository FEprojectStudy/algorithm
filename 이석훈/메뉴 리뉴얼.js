function solution(orders, course) {
  //정렬된 전체 문자열, course에 있는 개수만큼의 길이를 가진 모든 경우의 문자열을 넣을 배열
  //그 중에서 가장 빈도가 높은 문자열을 반환할 배열을 생성
  let orderLetters = [];
  let allNumArr = [];
  let Ans = [];

  //각 요소에 포함된 문자를 오름차순으로 정렬하는 것

  for (let i = 0; i < orders.length; i++) {
    let sortArr = [];
    let element = orders.shift();
    for (let k = 0; k < element.length; k++) {
      sortArr.push(element[k]);
    }
    orderLetters.push(sortArr.sort());
    //문자열로 나열해야 나중에 비교(===)나 sort가 가능하여  join을 써서 문자열로 변환.
    orders.push(sortArr.join(""));
  }

  for (let i = 0; i < orderLetters.length; i++) {
    //orders에 있는 요소별로 2개부터 요소의 길이까지 모든 경우의 단어를 도출해냄
    let k = 0;
    allNumArr.push([]);
    allNumArr[i].push([]);
    for (let p = 0; p < orderLetters[i].length; p++) {
      allNumArr[i][0].push([orderLetters[i][p]]);
    }
    //한 단어씩 분해해서 첫 array에 포함시킴(한 요소에서 글자는 중복되지 않으므로)

    while (k !== orderLetters[i].length) {
      //마지막 글자까지 계속 for문을 돌며 한 글자씩 붙여나감
      //글자 길이마다 배열을 하나씩 생성하여 같은 길이면 한 배열에 속하도록 함.
      allNumArr[i].push([]);

      //이전 배열에서 꺼내지 않았던 단어를 꺼내서
      for (let j = 0; j < allNumArr[i][k].length; j++) {
        let compareArr = allNumArr[i][k].shift();
        //원래 단어에는 포함되어 있지만, 이전 배열에 포함되어 있지 않는 글자라면
        //덧붙여서 길이를 1 늘린 이후, 이전 배열은 다시 저장하고 덧붙인 단어는 현재 생성된 배열에 저장
        for (let p = 0; p < orderLetters[i].length; p++) {
          if (!compareArr.includes(orderLetters[i][p])) {
            allNumArr[i][k + 1].push(
              [...compareArr, orderLetters[i][p]].sort().join("")
            );
          }
        } //중복을 제거
        allNumArr[i][k + 1] = [...new Set(allNumArr[i][k + 1])];
        allNumArr[i][k].push(compareArr);
      }
      k++;
    }
    //마지막 빈 배열 삭제
    allNumArr[i].pop();
  }

  //course에서 요구하는 글자수에 맞는 배열을 찾아, ansArr에 넣고 1차원 배열로 만든 후 정렬함
  //여기서 정렬을 쓴 이유는, 같은 문자면 연속적으로 나타나게 하기 위해서임.
  for (let i = 0; i < course.length; i++) {
    let ansArr = [];
    for (let k = 0; k < allNumArr.length; k++) {
      if (allNumArr[k][course[i] - 1]) {
        ansArr.push(allNumArr[k][course[i] - 1]);
      }
    }
    ansArr = ansArr.flat().sort();
    //최소 2개 이상은 있어야 하므로, if문을 사용하였고
    //[단어, 단어가 나타난 횟수]의 배열을 numArr에 저장함

    if (ansArr.length >= 2) {
      let numArr = [[ansArr[0], 1]];
      for (let j = 1; j < ansArr.length; j++) {
        if (numArr[numArr.length - 1][0] !== ansArr[j]) {
          numArr.push([ansArr[j], 1]);
        } else if (numArr[numArr.length - 1][0] === ansArr[j]) {
          numArr[numArr.length - 1][1] += 1;
        }
      }
      //개수가 많은 순으로 정렬하고, 가장 높은 수와 같은 다른 단어가 있다면 그것도 추가하여 배열에 넣음.
      numArr = numArr.sort((a, b) => b[1] - a[1]);
      console.log(numArr);
      if (numArr[0][1] >= 2) {
        Ans.push(numArr[0][0]);
        for (let e = 1; e < numArr.length; e++) {
          if (numArr[0][1] === numArr[e][1]) {
            Ans.push(numArr[e][0]);
          }
        }
      }
    }
  }
  //배열을 정렬해야해서 마지막에 정렬을 씀.
  return Ans.sort();
}
