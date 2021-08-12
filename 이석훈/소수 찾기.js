function solution(numbers) {
  //현재 조사하는 숫자의 위치를 나타냄(몇 번째 숫자인지)
  let thisNum = 2;
  //모든 경우의 수로 나오는 숫자를 넣기 위한 배열
  let allArr = [[]];
  //숫자들을 한자리씩 나누고, 숫자의 위치도 같이 배열에 넣어서 2차원 배열을 만듦
  //같은 숫자가 나오는 경우가 있어, 이를 구분하기 위함(첫번째 자리에 있는 1과 세번째 자리에 있는 1은 다른 숫자라 11이 나올 수 있는데,
  //위치를 구분해주지 않으면 밑에서 new Set으로 걸러지게 되어 1로 나와버리게 됨)
  for (let i = 0; i < numbers.length; i++) {
    allArr[0].push([numbers[i], [i]]);
  }
  //현재 첫번째 숫자는 다 조사했으므로, 조사하는 숫자가 1의 자리라면 while문에 들어가면 안되므로 if문으로 구별해줌
  if (numbers.length >= 2) {
    //모든 숫자를 다 조사할 때까지
    while (thisNum <= numbers.length) {
      //자릿수마다의 배열을 입력함. [한자리 숫자가 모인 하나의 배열], [두자리 숫자가 모인 배열]....이런 식으로 따로 묶음
      allArr.push([]);

      for (let k = 0; k < allArr[thisNum - 2].length; k++) {
        //이전 배열에서의 수를 하나 빼서 변수에 복사한 다음
        let addNum = allArr[thisNum - 2].shift();
        //다시 원래 배열에 넣음(경우의 수가 변하면 안되므로)
        allArr[thisNum - 2].push(addNum);

        for (let i = 0; i < numbers.length; i++) {
          //복사된 배열에서, 이미 포함된 요소는 제외하고
          if (addNum[1].includes(i)) {
            //포함되어 있지 않다면 앞에다 더함(위의 자릿수가 하나 추가되는것임-한자리 숫자면 10의 자리에 숫자가 하나 추가되는것)
            //문자열로 인식되어 숫자로 더해지지 않아 그냥 더했음.
          } else {
            let addNumResult = numbers[i] + addNum[0];
            //현재 이 숫자에 포함된 인덱스를 가진 두번째 위치에, 더해진 인덱스를 포함시킴
            let addNumIndex = [...addNum[1], ...[i]];
            //배열에 포함시킴
            allArr[thisNum - 1].push([addNumResult, addNumIndex]);
          }
        }
      }
      //모든 경우의 수를 다 조사했다면 다음 자릿수로 넘어감
      thisNum++;
    }
  } else {
  }
  //중복된 숫자가 있을 수 있으므로 new Set을 통해 제거. Number를 써 주는 이유는, 앞에 0이 붙어 있는 경우 제거하기 위함.
  //console.log(0098)는 98이다. 숫자로 변환하면 알아서 제거해줌.
  //flat을 쓴 이유는 2차원 배열을 1차원으로 바꿔주기 위함. 레츠기릿에서 봤던게 갑자기 생각나서 썼음.
  let allNum = [...new Set(allArr.flat().map((v) => Number(v[0])))];
  //소수를 담을 배열 설정
  let primeNum = [];

  for (let i = 0; i < allNum.length; i++) {
    //1과 0은 소수가 아니므로 제외함
    if (allNum[i] === 1 || allNum[i] === 0) {
      i++;
    }
    //2부터 시작
    for (let k = 2; k <= allNum[i]; k++) {
      //2는 소수이므로 배열에 포함시킴
      if (allNum[i] === 2) {
        primeNum.push(allNum[i]);
        //숫자가 자기 자신이 아닌, 나뉘어지는 숫자가 있다면 다음 숫자로 넘어감
      } else if (allNum[i] % k === 0 && k !== allNum[i]) {
        break;
        //끝까지 와서 자기 자신으로밖에 나누어지지 않는다면 배열에 포함시킴
      } else if (k === allNum[i]) {
        primeNum.push(allNum[i]);
      }
    }
  }
  //배열의 길이=숫자의 개수
  var answer = primeNum.length;

  return answer;
}
