function solution(cacheSize, cities) {
  let cacheDic = {};
  let time = 0;
  if (cacheSize === 0) {
    return cities.length * 5;
  } else {
    for (let i = 0; i < cities.length; i++) {
      let thisWord = cities[i].toUpperCase();
      if (Object.keys(cacheDic).length < cacheSize) {
        if (cacheDic[thisWord] === undefined) {
          cacheDic[thisWord] = i;
          time += 5;
        } else {
          time += 1;
          cacheDic[thisWord]=i;
        }
      } else if (Object.keys(cacheDic).length === cacheSize) {
        if (cacheDic[thisWord] === undefined) {
          let a = [0, 1000000];
          for (let k in cacheDic) {
            if (cacheDic[k] < a[1]) {
              a[1] = cacheDic[k];
              a[0] = k;
            }
          }
          delete cacheDic[a[0]];
          cacheDic[thisWord] = i;
          time += 5;
        } else {
          time += 1;
          cacheDic[thisWord] =i;
        }
      }
    }

    return time;
  }
}
