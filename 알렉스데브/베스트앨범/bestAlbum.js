function solution(genres, plays) {
  var answer = [];
  const songs = {};
  const playCnt = {};
  genres.forEach((genre, idx) => {
    if (!songs[genre]) songs[genre] = [];
    if (playCnt[genre] === null || playCnt[genre] === undefined) {
      playCnt[genre] = 0;
    }
    const data = {
      genre: genre,
      played: plays[idx],
      index: idx,
    };
    songs[genre].push(data);
    playCnt[genre] += plays[idx];
  });

  const playCntArr = [];
  for (let key in playCnt) {
    playCntArr.push({
      genre: key,
      count: playCnt[key],
    });
  }
  playCntArr.sort((a, b) => {
    return b.count - a.count;
  });

  playCntArr.forEach((element) => {
    const sel_genre = songs[element.genre];
    sel_genre.sort((a, b) => {
      return b.played - a.played;
    });
    answer.push(sel_genre[0].index);
    answer.push(sel_genre[1].index);
  });
  console.log(songs, playCnt, playCntArr);
  return answer;
}

let genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
let plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));
