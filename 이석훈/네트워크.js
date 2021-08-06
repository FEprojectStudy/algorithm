function solution(n, computers) {
  //전체 네트워크를 순서대로 나열
  let leftArr = Array(n)
    .fill()
    .map((v, i) => i);
  //하나로 이어져 있는 네트워크 묶음을 배열로 하나씩 network에 넣음
  let network = [[]];
  //현재 탐색하고 있는 네트워크가 몇 번째인지 나타냄(i)
  let count = 0;
  //끝에 있는 네트워크까지 탐색을 마치면 종료됨
  while (count <= n - 1) {
    //남아있는 네트워크 중, 현재 탐색하고 있는 네트워크가 따로 떨어져 있는(문자로 변환되지 않은) 것이라면
    if (!isNaN(leftArr[count])) {
      //함수에 그 네트워크를 입력하고
      findroute(count);
      //다음에 새로 생길 네트워크 묶음을 위해 새로운 배열 입력
      network.push([]);
      //중간에 건너뛴 네트워크가 있을 수 있기 때문에 다시 count 초기화하여 처음부터 탐색함
      count = 0;
    }
    //이미 탐색된 네트워크라면 다음 네트워크로 건너감
    count += 1;
  }

  function findroute(num) {
    //현재 탐색하는 네트워크이므로, 탐색을 했다는 표시로 배열에서의 네트워크 이름을 문자로 바꿈
    leftArr[num] = "n";
    //만약 새로운 네트워크 묶음으로 탐색이 시작된 거라면, 새로운 배열에 추가해줘야 하므로 while문 마지막에 넣어준 새로운 배열에 추가
    if (network[network.length - 1] == "") {
      network[network.length - 1].push(num);
    }
    //탐색하는 네트워크와의 관계가 표현되어 있는 배열을 꺼내 전체를 탐색
    for (let i = 0; i < n; i++) {
      //현재 탐색하는 네트워크와 연결된 네트워크이고, 이미 관계가 파악되어 배열에 넣지 않은 네트워크라면
      if (computers[num][i] === 1 && !network[network.length - 1].includes(i)) {
        //배열에 넣고
        network[network.length - 1].push(i);
        //이 네트워크와 연결된 다른 네트워크를 찾기 위해서 재귀함수를 사용함.
        //연결된 네트워크면 다른 묶음에 넣으면 안되므로 새로운 배열을 추가하지 않음. 함수가 모두 끝나서
        //하나의 배열에 모든 네트워크 묶음이 다 찾아지고 나서 새로 빈 배열에 추가됨.
        findroute(i);
      }
    }
  }
  //while문을 돌때 마지막에 빈 배열이 하나 추가되어서, 길이에서 1을 빼야함
  return network.length - 1;
}
