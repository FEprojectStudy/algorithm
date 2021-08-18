function solution(genres, plays) {
  //요소마다의 위치,장르,재생수를 각각 담은 배열과
  //각 장르별 재생수 총합, 정답 순서를 넣을 배열을 각각 생성함

  let songInfo = [];
  let songAmount;
  let answerArr = [];

  //각 요소마다 장르,재생수,위치 정보를 배열로 만듦
  for (let i = 0; i < genres.length; i++) {
    songInfo.push([genres[i], plays[i], i]);
  }
  //재생수에 따라 내림차순으로 정렬. 수가 같을 경우, 위치가 앞에 있는 것이 먼저 오도록 함.
  songInfo.sort((a, b) => (b[1] === a[1] ? a[2] - b[2] : b[1] - a[1]));
  //중복되지 않게 장르 제목을 배열에 넣고
  songAmount = [...new Set(songInfo.map((e) => e[0]))];
  for (let p = 0; p < songAmount.length; p++) {
    //장르 제목과 총 재생수가 하나의 배열에 포함될 수 있게 변환함
    let thisElement = songAmount.shift();
    songAmount.push([thisElement, 0]);
  }

  for (let i = 0; i < songInfo.length; i++) {
    for (let k = 0; k < songAmount.length; k++) {
      //장르 제목이 같다면, 현재 요쇼의 재생수를 더함
      if (songAmount[k][0] === songInfo[i][0]) {
        songAmount[k][1] += songInfo[i][1];
      }
    }
  }
  //가장 많이 재생된 장르가 앞에 오도록 나열
  songAmount.sort((a, b) => b[1] - a[1]);
  //음원 숫자만큼 배열 생성
  for (let i = 0; i < songAmount.length; i++) {
    answerArr.push([]);
  }
  for (let k = 0; k < songAmount.length; k++) {
    for (let i = 0; i < songInfo.length; i++) {
      //한 장르당 2곡까지만 제한시킴
      if (answerArr[k].length === 2) {
        //break랑 k++랑 다른점이 무엇인지? k++로 하면 다른 값이 나옴
        break;
        //재생수만큼 이미 배열을 분류해놓았으므로 순서대로 장르별로 뽑아서 정리함.
      } else if (songAmount[k][0] === songInfo[i][0]) {
        answerArr[k].push(songInfo[i]);
      }
    }
  }
  //각 장르별로 모아놓아 생성된 2차원 배열을 1차원으로 변환시키고 각 순서별로 return함.
  return answerArr.flat().map((a) => a[2]);
}
