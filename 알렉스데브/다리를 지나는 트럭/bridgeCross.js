// 누적 함수 정의해서 만듬
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function solution(bridge_length, weight, truck_weights) {
  // 다리의 길이만큼 다리를 만든다
  let crossing = Array(bridge_length).fill(0);

  // 다리를 통과한 시간을 체크할 변수
  let timer = 0;

  // 건너야 할 트럭이 남아있을 동안
  while (truck_weights.length) {
    // 타이머를 시작하고 각 트럭이 다리에 오를 때마다 증가
    timer++;

    // 다리의 길이 만큼 채워진 트럭이 들어갈 공간 (0)을 앞에서 부터 비운다.
    crossing.shift();

    // 건널 트럭이 있으면
    if (truck_weights) {
      // 다리 위의 트럭 무게의 합과 더하기 다리에 오를 차례의 트럭의 무게 함이 다리가 견딜 수 있는 무게 이하라면
      if (sum(crossing) + truck_weights[0] <= weight) {
        // 다리 위이 다음 트럭을 오르게 한다.
        crossing.push(truck_weights.shift());

        // 다리가 견딜 수 있는 무게를 초과할 경우
      } else {
        // 다리 위에 있는 가장 앞의 트럭을 다리를 지나 도착시킨다.
        crossing.push(0);
      }
    }
  }
  // 다리의 길이 만큼 더 지나야 다리를 완전히 건너므로 트럭이 다리에 오를 때 카운트와 다리 길이를 더해서 반환한다.
  return bridge_length + timer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
