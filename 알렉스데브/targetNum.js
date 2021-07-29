function solution(numbers, target) {
  var answer = 0;
  dfs(0, 0);
  return answer;

  //node는 각 1을
  function dfs(node, sum) {
    // node 값이 numbers의 길이와 같고
    if (node === numbers.length) {
      // sum의 값이 target의 값과 같은 경우: answer를 1씩 증가
      if (sum === target) answer += 1;
      //함수 종료
      return;
    }

    // 그 외의 경우 실행:
    // dfs 함수를 재귀호출(node를 1 증가하고, sum 더하기 numbers의 노드 인덱스를 인자로 넘긴다)
    dfs(node + 1, sum + numbers[node]);
    // dfs 함수를 재귀호출(node를 1 증가하고, sum 빼기 numbers의 노드 인덱스를 인자로 넘긴다)
    dfs(node + 1, sum - numbers[node]);
  }
}

console.log(solution([1, 1, 1, 1, 1], 3));
