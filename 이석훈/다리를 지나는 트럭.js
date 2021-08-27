function solution(bridge_length, weight, truck_weights) {
  const length = truck_weights.length;
  const after = [];
  const bridge = Array(bridge_length)
    .fill()
    .map((v, i) => 0);
  let trucks = truck_weights;
  let time = 0;
  let bridgeWeight = 0;
  let answer = 0;

  while (after.length !== length) {
    time += 1;
    //나갈 무게를 미리 빼서 계산해야함(나갈 무게가 그대로 있으면 빠져나간 후 트럭이 들어오는 경우의 수가 없어지는 경우가 있음)
    if (
      trucks[0] &&
      bridgeWeight + trucks[0] - bridge[bridge.length - 1] <= weight
    ) {
      let thistruck = trucks.shift();

      bridge.unshift(thistruck);
      bridgeWeight += thistruck;
      let lastOut = bridge.pop();
      if (lastOut !== 0) {
        after.push(lastOut);
        //  무게를 실시간으로 바꿔주지 않으면 트럭이 바로바로 옮겨타지 않음
        bridgeWeight -= lastOut;
      }
    }

    //trucks[0] 이 없을때 오류가 남-중요!(없어서 undefind가 되는 경우를 찾기)
    //if가 아닌 else if 로 해주는 이유? -위의 if문을 거치고 난 이후 이 if문을 또 거치는 경우가 생김(둘 중에 하나만 통과해야함)
    else if (
      (trucks[0] &&
        bridgeWeight + trucks[0] - bridge[bridge.length - 1] > weight) ||
      !trucks[0]
    ) {
      bridge.unshift(0);
      let lastOut = bridge.pop();
      if (lastOut !== 0) {
        bridgeWeight -= lastOut;
        after.push(lastOut);
      }
    }
  }
  answer = time;

  return answer;
}
