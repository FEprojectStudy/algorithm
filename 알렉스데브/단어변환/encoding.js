function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  let queue = [];

  // words 배열에 target이 없는 경우 함수를 종료
  if(!words.includes(target)) {
    return 0;
  }

  // 큐 배열에 시작단어와 answer를 삽입
  queue.push([begin, answer]);
  
  // 큐가 비어있지 않은 동안
  while(queue) {

    // 큐의 첫번째 값을 꺼낸다
    let [vertex, count] = queue.shift();

    // 첫번째로 꺼낸 값이 target이라면 횟수를 return
    if (vertex === target) {
      return count;
    }
  
    words.forEach((el) => {
      // 단어를 비교해 차이 개수 카운트
      let diff = 0;
      // 확인한 단어라면 함수 종료
      if(visited.includes(el)) return;

      // 요소인 단어를 순회하며
      for(let i = 0; i<el.length; i++) {
        
        // 처음 꺼낸 값과 다른 단어라면
        if(el[i] !== vertex[i])  diff++;
      }
      
      // 단어의 차이가 1개 라면
      if (diff === 1) {

        //큐 배열에 해당 단어, 회수를 증가하여 넣는다.
        queue.push([el, ++count]);
        visited.push(el);
      } 
    });
  }
  return answer;
}

console.log(solution('hit','cog',['hot', "dot", "dog", "lot", "log", "cog"]))