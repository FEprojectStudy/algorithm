from itertools import permutations
import math

# 소수 구별 함수
def is_prime(n):
  
  # 해당 수가 0이나 1인 경우는 False 반환
  if n == 0 or n == 1:
    return False

  # 0 , 1 이외의 경우
  else:

    # 2부터 n의 제곱근 까지 수를 순회
    for i in range(2, int(math.sqrt(n))+1):

      # n을 2 ~ n 제곱근 수로 나눈 나머지가 0 이면
      if n%i == 0:
        # False 반환
        return False
    # 위의 조건을 pass 하면 True
    return True

def solution(numbers):
  answer = []

  # 1부터 수의 n자리 까지 순회
  for i in range(1, len(numbers)+1):

    # 가능한 경우의 수를 순열리스트로 만듦
    arr = list(permutations(numbers, i))

    # 순열 리스트의 인덱스 순회
    for j in range(len(arr)):

      # 경우의 수 순열을 num 변수 저장
      num = int(''.join(arr[j]))

      # 경우의 수가 소수라면
      if is_prime(num):

        # answer 배열에 추가
        answer.append(num)

  # answer 배열의 중복을 set 자료형으로 제거한 수, 길이를 반환
  return len(set(answer))

print(solution('17'))
