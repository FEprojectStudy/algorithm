function solution(n, computers) {
  let leftArr = Array(n)
    .fill()
    .map((v, i) => i);
  let network = [[]];
  let count = 0;
  while (count <= n - 1) {
    if (!isNaN(leftArr[count])) {
      findroute(count);
      network.push([]);
      count = 0;
    }
    count += 1;
  }

  function findroute(num) {
    leftArr[num] = "n";
    if (network[network.length - 1] == "") {
      network[network.length - 1].push(num);
    }
    for (let i = 0; i < n; i++) {
      if (computers[num][i] === 1 && !network[network.length - 1].includes(i)) {
        network[network.length - 1].push(i);
        findroute(i);
      }
    }
  }

  return network.length - 1;
}
