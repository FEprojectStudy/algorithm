function solution(maps) {
  //맵 가져오기
  let route = maps;
  //원래 값을 -1로 해놔서 값이 나오지 않으면 -1이 되게 하기
  let ans = -1;
  //처음 출발값,이동횟수
  let lastindex = [[0, 0, 1]];

  while (true) {
    //pop으로 하니 값이 잘못 나온다. push를 해서 pop을 해야하는 걸로 생각했는데 잘못된것?
    let search = lastindex.shift();
    //값을 찾지 못할경우 나오기
    if (search === undefined) {
      break;
    }
    //끝에 도달할 경우 이동값을 ans에 저장
    if (search[0] === maps[0].length - 1 && search[1] === maps.length - 1) {
      ans = search[2];
      break;
    }
    //함수실행
    findroute(search[0], search[1], search[2]);
  }

  function findroute(x, y, z) {
    //되돌아가는 것을 방지하기 위해 현재 있는 좌표값을 0으로 설정
    route[y][x] = 0;
    //상,하,좌,우로 움직일 수 있는 경우의 수를 모두 고려하여 갈 수 있는 좌표값을 입력
    for (let i = 0; i < 4; i++) {
      if (i === 0 && x !== maps[0].length - 1 && route[y][x + 1] === 1) {
        lastindex.push([x + 1, y, z + 1]);
      }
      if (i === 1 && y !== maps.length - 1 && route[y + 1][x] === 1) {
        lastindex.push([x, y + 1, z + 1]);
      }
      if (i === 2 && x !== 0 && route[y][x - 1] === 1) {
        lastindex.push([x - 1, y, z + 1]);
      }
      if (i === 3 && y !== 0 && route[y - 1][x] === 1) {
        lastindex.push([x, y - 1, z + 1]);
      }
    }
  }
  //ans출력
  return ans;
}
