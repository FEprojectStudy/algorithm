# 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
# 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고,
# 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때
# 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
# 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
# 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때,
# 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

# 그래프의 전체 노드를 탐색하면서 연결관계를 확인해야 하기 때문에
# dfs 알고리즘을 통해 접근한다.

def solution(n, computers):

  # 네트워크 개수를 기록할 변수
  answer = 0;

  # 방문한 컴퓨터를 체크할 배열. 모든 컴퓨터 개수만큼 방문 전 상태인 False로 초기화한다.
  visited = [False for _ in range(n)]

  # 모든 컴퓨터를 순회하며
  for j in range(n):

    # 컴퓨터를 방문하지 않았다면
    if visited[j] == False:
      
      # DFS 함수를 돌림
      DFS(n, computers, visited, j)

      # 연결되지 않았으므로, 네트워크 개수를 1씩 증가한다 (모두 연결 되있을 경우 1개)
      answer+=1
  return answer
  
# 깊이 우선 탐색 DFS 함수
def DFS(n, computers, visited, vertex):

  #첫번째 노드 (컴퓨터는) 방문 처리한다.
  visited[vertex] = True
  
  # 모든 컴퓨터를 순회하며
  for i in range(n):

    # 다음으로 체크할 컴퓨터가 첫번째 컴퓨터가 아닌지 && 연결되어 있는지 체크하고 
    if i != vertex and computers[i][vertex] == 1:

      # 방문하지 않았다면
      if visited[i] == False:

        # DFS 함수를 재귀하여 다음 정점(컴퓨터)로 뻗어나간다.
        DFS(n, computers, visited, i)

print(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);