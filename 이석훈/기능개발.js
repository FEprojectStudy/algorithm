function solution(progresses, speeds) {
  //초기 기능 개수(for문을 돌릴때 개수가 적어져 다 돌리지 못하는 경우가 발생하기 때문)
  const num = progresses.length;
  //각 날짜별 완성 기능 개수를 담는 array
  const dayamount = [];
  //초기 날짜
  let day = 1;
  //날짜를 제외한 기능개수만 담는 배열
  let ans = [];
  //날짜별로 변화하는 기능,속도 배열(앞에서 완성된 기능,속도는 빠지므로)
  let $progresses = progresses;
  let $speeds = speeds;
  //기능 개수가 0(다 완성)이 될때까지
  while ($progresses.length !== 0) {
    //모든 기능 배열에 속도를 더함(하루가 끝난 지점에서의 완성도를 나타냄)
    for (let p = 0; p < $progresses.length; p++) {
      let thispro = $progresses.shift();
      $progresses.push(thispro + $speeds[p]);
    }
  
    for (let i = 0; i < num; i++) {
        //기능의 처음이 완성되었는가를 파악
      //완성이 되지 않았다면 for문을 나와 하루를 더하고 다시 while문을 돈다
      if ($progresses[0] < 100) {
        break;
        //완성되었을 경우, 배열에서 제외시킴(speed를 제외시키지 않으면 제외된 기능의 빠르기가 적용될 수 있음)
      } else if ($progresses[0] >= 100) {
        $progresses.shift();
        $speeds.shift();
      //완성된 날짜가 배열에 없다면, 새로 만들고 기존에 존재한다면 개수를 더함
        if (!dayamount[dayamount.length - 1] || dayamount[dayamount.length - 1][0] !== day) {
          dayamount.push([day, 1]);
        } else if (dayamount[dayamount.length - 1][0] === day) {
          dayamount[dayamount.length - 1][1] += 1;
        }
      }
    }
    //기능이 다 완성되지 않았을 경우 하루를 더함
    day += 1;
  }

  //날짜별 완성 개수만 빼서 return
  for (let k = 0; k < dayamount.length; k++) {
    ans.push(dayamount[k][1]);
  }
  return ans;
}
