// 정렬

// 발표한 논문 n 편 중, h 번 이상 인용된 논문이 h 편 이상,
// 나머지 논문이 h 번 이하 인용되었다면 h의 최댓값이 h-index 값

//citations === 발표한 논문의 인용 횟수를 담은 배열

function solution(citations) {
  let answer = [];
  citations.sort((a, b) => {
    return a - b;
  });
  console.log(citations.slice(2, citations.length));
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= citations.slice(i, citations.length)) {
      answer.push(citations[i]);
    }
  }
  console.log(answer);
}

console.log(solution([3, 0, 6, 1, 5]));
// 배열 요소는 각 인용 횟수
