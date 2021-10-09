function solution(enter, leave) {
  let enterIndex = 0;
  let leaveIndex = 0;
  let room = {};
  let result = Array(enter.slice().length)
    .fill()
    .map((v, i) => 0);
  //enterIndex말고 leaveIndex가 와야함(모두 빠져나가야 하므로)
  while (leaveIndex !== enter.length) {
    if (enterIndex === enter.length) {
    } else {
      room[enter[enterIndex] - 1] = 0;
    }
    console.log(room);
    if (room[leave[leaveIndex] - 1] !== undefined) {
      while (room[leave[leaveIndex] - 1] !== undefined) {
        result[leave[leaveIndex] - 1] = Object.keys(room).length - 1 + room[leave[leaveIndex] - 1];
        for (let i in room) {
          room[i] += 1;
        }
        delete room[leave[leaveIndex] - 1];
        leaveIndex++;
      }
    }
    if (enterIndex === enter.length) {
    } else {
      enterIndex++;
    }
  }

  return result;
}
document.write(solution([1, 3, 2], [1, 2, 3]));
// if [1]이 뒷자리가 더 빠르다면,
// =[0]에 있는 숫자보다 이하의 element는 다 만나게 됨
// if [0]이 뒷자리가 더 빠르다면,
// 무조건 만남
