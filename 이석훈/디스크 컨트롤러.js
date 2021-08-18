function solution(jobs) {
  //현재 시각 표시
  let nowTime = 0;
  //한 작업당 끝나기까지의 시간을 측정하여 배열에 포함시킴
  let finishTime = [];
  //작업시간이 짧은 순으로 정렬하되, 같은 작업시간이라면 시작시간이 더 빠른 순으로 정렬
  let jobsSort = jobs
    .slice()
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
//전체 작업 개수만큼 반복
  for (let k = 0; k < jobs.length; k++) {
    //현재 남은 작업 개수를 변수에 담음
    let nowAmount = jobsSort.length;
    
    for (let i = 0; i < jobsSort.length; i++) {
      //작업이 이미 시작했어야 하는 시각이라면
      if (jobsSort[i][0] <= nowTime) {
        //작업이 요청받은 시각부터 현재까지의 시간 길이를 측정하여 배열에 포함시킴
        finishTime.push(nowTime + jobsSort[i][1] - jobsSort[i][0]);
        //시각에 작업 시간을 더하여 현재 시간을 구함
        nowTime += jobsSort[i][1];
        //끝낸 작업을 배열에서 제외시킴
        jobsSort.splice(i, 1);
        //다시 처음으로 돌아가 현재 시각보다 요청받은 시각이 더 빠른 작업을 찾음
        break;
      }
    }
    //맨 상위의 for문에서 변수에 담았던 작업 개수와 현재 이 코드까지 내려왔을때의 개수가 같다면
    //즉, 모든 작업이 현재 시각보다 요청받은 시각이 더 느리다면,
    if (nowAmount === jobsSort.length) {
      //작업을 하고 있지 않을 때에는 요청받은 순으로 작업을 시작하므로,
      //요청 시간이 가장 빠른 작업을 구하되, 요청 시간이 같다면 가장 작업시간이 짧은 요소를 구함.
      jobsSort.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
      //요청 시간은 현재에 영향을 받지 않으므로(요청 시간이 더 느리므로) 작업시간만 배열에 포함시킴
      finishTime.push(jobsSort[0][1]);
      //현재 시간은 요청 시간에 작업 시간을 더한 것이므로, 이를 대입함.
      nowTime = jobsSort[0][0] + jobsSort[0][1];
            //끝낸 작업을 배열에서 제외시킴
      jobsSort.splice(0, 1);
      //다시 작업시간이 짧은 순으로 정렬하되, 같은 작업시간이라면 시작시간이 더 빠른 순으로 정렬
      jobsSort.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
    }
  }
//소숫점 이하는 제외하고, 작업 개수만큼 시간을 나누어 답을 구함.
  return Math.floor(finishTime.reduce((a, b) => a + b) / jobs.length);
}
