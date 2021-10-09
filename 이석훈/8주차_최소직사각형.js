function solution(sizes) {
  let size = [0, 0];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      if (size[0] < sizes[i][1]) {
        size[0] = sizes[i][1];
      }
      if (size[1] < sizes[i][0]) {
        size[1] = sizes[i][0];
      }
    } else {
      if (size[0] < sizes[i][0]) {
        size[0] = sizes[i][0];
      }
      if (size[1] < sizes[i][1]) {
        size[1] = sizes[i][1];
      }
    }
  }
  var answer = size[0] * size[1];
  return answer;
}
