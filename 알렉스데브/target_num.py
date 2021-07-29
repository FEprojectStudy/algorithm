# answer를 전역 변수로 선언한다.
answer = 0;

#dfs(깊이 우선 탐색 함수) 파라미터 (정점, numbers 그래프, target 목표 합, acc 합의 모든 경우의 수)
def dfs(node, numbers, target, acc):
  # 전역 변수 선언
  global answer
  
  #정점의 수가 number의 길이와 같고
  if node == len(numbers):
    #합의 경우의 수가 target과 같다면
    if acc == target:
      # answer에 1 증가
      answer += 1
    #함수 종료
    return

  # 그 외의 경우는 node에 1을 더하고, acc 매개변수에 
  # numbers[node]번째 인덱스 값을 더한 것을 새로 넘겨주어 함수를 재귀한다.
  dfs(node+1, numbers, target, acc + numbers[node])
  # numbers[node]번째 인덱스 값을 뺀 것을 새로 넘겨주어 함수를 재귀한다.
  dfs(node+1, numbers, target, acc - numbers[node])

#이를 통해 처음 5개 함수 
#dfs(1,numbers, target, 1), dfs(2,numbers, target, 2), dfs(3,numbers, target, 3), dfs(4, numbers, target, 4), dfs(5, numbers, target, 5) 
# 호출된 것이 스택에서 종료되고 재귀하면서 각 단계 당 dfs(5,numbers, target, 3) 가 반복됨
# 결과적으로 answer 변수는 1을 5번 축적하기 때문에 답은 5가 됩니다.

def solution(numbers, target):
  # 전역 변수 선언
  global answer

  #dfs 함수 호출: 넘겨줄 시작노드는 0, 초기 합의 경우의 수는 0
  dfs(0, numbers, target,0)
  
  # answer 전역변수 반환.
  return answer
  
print(solution([1,1,1,1,1], 3))