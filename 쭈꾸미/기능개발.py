from collections import deque

def solution(progresses, speeds):
    p = deque(progresses)
    s = deque(speeds)
    answer = []
    count = 0

    while p:
        while p[0] >= 100:  # 배포
            p.popleft()
            s.popleft()
            count += 1
            if len(p) == 0: break
        if count != 0:
            answer.append(count)
            count = 0

        for i in range(len(p)):
            p[i] = p[i] + s[i]

    return answer

print(solution([93, 30, 55],[1, 30, 5]))
# [93, 30, 55]	[1, 30, 5]	[2, 1]
# [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]