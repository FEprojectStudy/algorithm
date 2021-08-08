// 먼저 대기열에 들어온 것 먼저 내보내기 (선입선출 = 큐 자료구조)

//프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
//또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
//이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
//먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가
//적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

function solution(progresses, speeds) {
  let answer = [];
  let day = 0;
  let count = 0;

  //모든 작업을 완료할 때 까지
  while (progresses.length > 0) {
    // 작업량이 100에 이르면 작업을 마침 (진행률, 속도에서 빼냄)
    // 작업 종료: count를 1 증가
    if (progresses[0] + speeds[0] * day >= 100) {
      progresses.shift();
      speeds.shift();
      count++;

      // 작업이 종료되지 않았을 경우
    } else {
      // count가 1 이상이면
      if (count > 0) {
        // answer 배열에 count를 추가한다
        answer.push(count);

        // count 초기화
        count = 0;
      }
      // day를 증가: 작업량이 100에 이르기까지 계속 증가해야 하기 때문
      day++;
    }
  }
  //마지막 작업은 count가 1 이상이지만, 두번째 조건문에 걸리지 못하고 while 문이 종료되기 때문에
  // 반복문 이후에 한번 더 push 한다.
  answer.push(count);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
