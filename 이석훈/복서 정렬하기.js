function solution(weights, head2head) {
  let sortArr = Array(weights.length)
    .fill()
    .map((v) => []);
  for (let i = 0; i < weights.length; i++) {
    sortArr[i].push([0, 0]);
    sortArr[i].push(0);
    sortArr[i].push(weights[i]);
    sortArr[i].push(weights.length - i);
    sortArr[i].push(i);
    for (let k = 0; k < head2head[i].length; k++) {
      if (head2head[i][k] === "W") {
        sortArr[i][0][0] += 1;
        if (weights[k] > weights[i]) {
          sortArr[i][1] += 1;
        }
      } else if (head2head[i][k] === "L") {
        sortArr[i][0][1] += 1;
      }
    }
  }
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i][0][0] === 0) {
      sortArr[i][0] = 0;
    } else {
      sortArr[i][0] = sortArr[i][0][0] / (sortArr[i][0][0] + sortArr[i][0][1]);
    }
  }
  sortArr.sort((a, b) => (a[0] === b[0] ? (a[1] === b[1] ? (a[2] === b[2] ? b[3] - a[3] : b[2] - a[2]) : b[1] - a[1]) : b[0] - a[0]));
  var answer = [];
  for (let i = 0; i < sortArr.length; i++) {
    answer.push(sortArr[i][4] + 1);
  }

  return answer;
}
