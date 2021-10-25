function solution(m, n, board) {
  //     인덱스를 저장할때 문자열에 저장 하면 안됩니다. (리스트 사용 권장)
  // ex) i = 1, j = 11일때 index를 저장을 문자열에 한다면 '111'로 저장되는데 j = 11, i = 1 일때와 같아짐
  let deleteCount = 0;
  let boardArr = Array(n)
    .fill()
    .map((v, i) => []);
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      boardArr[i].push(board[k][n - 1 - i]);
    }
  }

  let sameBlocks = [];

  while (true) {
    sameBlocks = [];

    for (let i = 0; i < n - 1; i++) {
      for (let k = m - 1; k >= 0; k--) {
        if (boardArr[i][k] === 0) {
          break;
        } else if (boardArr[i][k] !== 0 && boardArr[i][k] == boardArr[i + 1][k] && boardArr[i][k] == boardArr[i][k + 1] && boardArr[i][k] == boardArr[i + 1][k + 1]) {
          sameBlocks.push([i, k]);
          sameBlocks.push([i + 1, k]);
          sameBlocks.push([i, k + 1]);
          sameBlocks.push([i + 1, k + 1]);
        }
      }
    }

    sameBlocks.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

    //   if sameBlocks 비어있으면 while 문 break
    if (sameBlocks.length === 0) {
      break;
    } else {
      for (let i = sameBlocks.length - 1; i >= 1; i--) {
        if (sameBlocks[i][0] === sameBlocks[i - 1][0] && sameBlocks[i][1] === sameBlocks[i - 1][1]) {
          sameBlocks.splice(i, 1);
        }
      }

      deleteCount += sameBlocks.length;
      for (let i = 0; i < sameBlocks.length; i++) {
        boardArr[sameBlocks[i][0]][sameBlocks[i][1]] = 0;
      }
      for (let i = 0; i < boardArr.length; i++) {
        boardArr[i].sort((a, b) => (a === 0 ? -1 : ""));
      }
    }
  }

  return deleteCount;
}
