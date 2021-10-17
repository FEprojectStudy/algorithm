function solution(s) {
  let resultArr = Array(Math.floor(s.length / 2) + 1)
    .fill()
    .map((v, i) => []);

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let k = 0;
    while (k <= s.length - 1) {
      if (k + i <= s.length - 1) {
        let p = s.slice(k, k + i);

        if ((resultArr[i][resultArr[i].length - 1] && p !== resultArr[i][resultArr[i].length - 1][0]) || !resultArr[i][resultArr[i].length - 1]) {
          resultArr[i].push([p, 1]);
          k = k + i;
        } else if (p === resultArr[i][resultArr[i].length - 1][0]) {
          resultArr[i][resultArr[i].length - 1][1]++;

          k = k + i;
        }
      } else if (k + i > s.length - 1) {
        let p = s.slice(k);
        if ((resultArr[i][resultArr[i].length - 1] && p !== resultArr[i][resultArr[i].length - 1][0]) || !resultArr[i][resultArr[i].length - 1]) {
          resultArr[i].push([p, 1]);
          break;
        } else if (p === resultArr[i][resultArr[i].length - 1][0]) {
          resultArr[i][resultArr[i].length - 1][1]++;

          break;
        }
      }
    }
  }
  let minLength = 1000;
  if (s.length === 1) {
    minLength = 1;
  } else {
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
      let thisLength = 0;
      for (let j = 0; j < resultArr[i].length; j++) {
        thisLength += resultArr[i][j][0].length;
        thisLength += resultArr[i][j][1] === 1 ? 0 : String(resultArr[i][j][1]).length;
      }

      thisLength < minLength ? (minLength = thisLength) : "";
    }
  }

  return minLength;
}
