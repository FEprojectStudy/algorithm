//네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
//예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고,
//컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때
//컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
//따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
// 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때,
// 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

// 그래프의 전체 노드를 탐색하면서 연결관계를 확인해야 하기 때문에
// dfs 알고리즘을 통해 접근한다.

function solution(n, computers) {
  let answer = 0;

  // 정점 방문 체크를 할 배열을 선언
  // 컴퓨터의 개수 만큼 false로 초기화 한다. (아직 방문되지 않은 정점)
  let visited = Array(n).fill(false);

  // 모든 컴퓨터를 순회하며
  for (let j = 0; j < n; j++) {
    //방문하지 않은 노드가 있는지 확인한다.
    if (visited[j] === false) {
      //있다면 dfs 함수를 실행
      dfs(n, computers, visited, j);

      // 연결되지 않았으므로, 네트워크 개수는 1씩 늘어남
      answer++;
    }
  }
  return answer;
}

// 깊이 우선 탐색을 할
function dfs(n, computers, visited, vertex) {
  //시작점은 true로 대입
  visited[vertex] = true;

  // 모든 컴퓨터를 순회하며
  for (let j = 0; j < n; j++) {
    //새로 탐색할 j 점이 시작점이 아니고, 값이 1(연결됨)이며
    if (j !== vertex && computers[j][vertex] === 1) {
      // 아직 방문한 정점이 아니라면
      if (visited[j] === false) {
        // dfs 함수를 재귀하여 새로운 정점으로 뻗어나간다.
        dfs(n, computers, visited, j);
      }
    }
  }
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
