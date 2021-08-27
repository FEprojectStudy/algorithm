function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function solution(bridge_length, weight, truck_weights) {
  let crossing = Array(bridge_length).fill(0);
  let timer = 0;
  while (truck_weights.length) {
    timer++;
    crossing.shift();
    if (truck_weights) {
      if (sum(crossing) + truck_weights[0] <= weight) {
        crossing.push(truck_weights.shift());
      } else {
        crossing.push(0);
      }
    }
  }
  return bridge_length + timer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
