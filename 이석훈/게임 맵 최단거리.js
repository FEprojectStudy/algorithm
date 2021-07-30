function solution(maps) {
  let route = maps;

  let ans = -1;
  let lastindex = [[0, 0, 1]];

  while (true) {
    let search = lastindex.shift();
    if (search === undefined) {
      break;
    }
    if (search[0] === maps[0].length - 1 && search[1] === maps.length - 1) {
      ans = search[2];
      break;
    }

    findroute(search[0], search[1], search[2]);
  }
    

  function findroute(x, y, z) {
    route[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      if (i === 0 && x !== maps[0].length - 1 && route[y][x + 1] === 1) {
        lastindex.push([x + 1, y, z + 1]);
          continue;
      }
      else if (i === 1 && y !== maps.length - 1 && route[y + 1][x] === 1) {
        lastindex.push([x, y + 1, z + 1]);continue;
      }
      else if (i === 2 && x !== 0 && route[y][x - 1] === 1) {
        lastindex.push([x - 1, y, z + 1]);continue;
      }
      else if (i === 3 && y !== 0 && route[y - 1][x] === 1) {
        lastindex.push([x, y - 1, z + 1]);
      }
    }
  }
  return ans;
}
