function solution(genres, plays) {
  var answer = [];
  const songs = {};
  const playCnt = {};

  //장르 리스트에 있는 요소와 인덱스에 있어
  genres.forEach((genre, idx) => {
    //songs 객체가 비어있다면 genre값을 추가
    if (!songs[genre]) songs[genre] = [];

    //플레이 수 객체의 value가 없거나 undefined면
    if (playCnt[genre] === null || playCnt[genre] === undefined) {
      //장르별 플레이 수 value를 0으로 초기화
      playCnt[genre] = 0;
    }

    //상수 data를 선언하여, 장르, 재생 수, 재생 장르의 인덱스를 저장
    const data = {
      genre: genre,
      played: plays[idx],
      index: idx,
    };

    //songs 객체의 장르 value에 data 객체를 넣는다.
    songs[genre].push(data);

    //장르 플레이 수 객체에 재생된 수를 더한다.
    playCnt[genre] += plays[idx];
  });

  //상수 플레이 카운트 리스트를 선언
  const playCntArr = [];

  // 플레이 수 객체의  각 키 '장르이름'를 순회
  for (let key in playCnt) {
    //리스트에 장르 이름과 플레이 수 누적한 값으로 각 객체를 만듦
    playCntArr.push({
      genre: key,
      count: playCnt[key],
    });
  }

  //플레이 수 리스트를 내림차 순으로 정렬한다. -> 가장 재생이 많이 된 순으로 하기 위해
  playCntArr.sort((a, b) => {
    return b.count - a.count;
  });

  // 플레이 수 리스트의 각 요소에 있어
  playCntArr.forEach((element) => {
    // 상수 선택된 장르 객체를 선언하여 songs 객체의 장르 값을 할당
    const sel_genre = songs[element.genre];

    // 선택된 장르 객체를 재생 수 기준 내림차순으로 정렬
    sel_genre.sort((a, b) => {
      return b.played - a.played;
    });

    // answer 배열에 선택장르 객체의 0번째 인덱스 즉, 도합 가장 많이 재생된 각 장르의 각 인덱스를 추가
    answer.push(sel_genre[0].index);
    answer.push(sel_genre[1].index);
  });

  // answer 배열 반환
  return answer;
}

let genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
let plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));
