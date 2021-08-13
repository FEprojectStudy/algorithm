
num = []

def isPrime(n):

    if n <= 1:
        return False

    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def solution(numbers):
    answer = 0
    DFS(numbers, '', len(numbers))
    for i in set(num):
        if isPrime(i) == True:
            answer += 1
    return answer

#완전탐색 : numbers로 만들 수 있는 모든 숫자 생성
def DFS(numbers, k, L):
    global num

    if len(k) != 0:
        num.append(int(k))

    if len(k) == L:
        return

    for i in range(len(numbers)):
        DFS(numbers[:i] + numbers[i+1:], k + numbers[i], L)

print(solution("011"))




