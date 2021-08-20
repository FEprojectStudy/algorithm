// 작업 시간이 짧은 순서대로 정렬. 첫번째로 도착한 작업이 최소 작업 시간이면,
// 작업 시간을 카운트 하고, 카운트가 작업 시간 과 같아지면 pop한다.
// 다음 작업은 작업 시작 시간이 되는 대로 대기리스트에 저장하여 대기
// 처리 작업이 끝나면, 대기리스트에 올라온 순서대로 작업리스트에 올려 위의 작업을 반복한다.
// 마지막으로 count를 반환한다.

function solution(jobs) {
  let answer = 0;

  // 첫 작업은 가장 먼저 도착하는 순
  jobs.sort((a, b) => {
    return a[0] - b[0];
  });

  // 우선 순위 큐 (작업 착수 가능 한 일들 먼저, 작업시간 오른 차순 정력)
  const primary = [];
  let i = 0,
    time = 0;

  // 우선 순위 큐가 비어야 종료
  while (i < jobs.length || primary != 0) {
    // 작업이 남아 있고, 작업대에 각 작업이 도착하는 시작하는 시간이 더 작다면
    if (i < jobs.length && jobs[i][0] <= time) {
      //우선 순위 큐에 i번째 작업을 넣고 i를 증가시킨다.
      primary.push(jobs[i++]);

      // 우선 순위 큐에 저장된 작업을 작업 소요 시간 별로 정렬
      primary.sort((a, b) => {
        return a[1] - b[1];
      });
    }

    // 현재 도착한 작업이 없다면
    if (primary.length === 0) {
      // time에 첫 작업의 도착 시간 대입
      time = jobs[i][0];

      // 새로운 작업이 도착하면
    } else {
      const [start, work] = primary.shift();
      answer += time + work - start;
      time += work;
    }
  }
  return parseInt(answer / jobs.length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
