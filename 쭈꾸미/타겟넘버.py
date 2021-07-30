answer = 0

def solution(numbers, target):
    DFS(0, len(numbers), 0, target, numbers)
    return answer

def DFS(idx, count, res, t, numbers):
    global answer

    if res == t and idx == count:
        answer += 1
        return

    if idx == count:
        return

    DFS(idx + 1, count, res + numbers[idx], t, numbers)
    DFS(idx + 1, count, res - numbers[idx], t, numbers)