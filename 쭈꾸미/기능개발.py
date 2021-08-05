from collections import deque

def solution(progresses, speeds):
    p = deque(progresses)
    s = deque(speeds)
    answer = []
    count = 0

    while p: #배포 가능여부 판단
        while p[0] >= 100:
            p.popleft()
            s.popleft()
            count += 1
            if len(p) == 0: break
        if count != 0: #배포 가능한 작업이 있는 경우
            answer.append(count)
            count = 0

        #작업 수행
        for i in range(len(p)):
            p[i] = p[i] + s[i]

    return answer

print(solution([93, 30, 55],[1, 30, 5]))
# [93, 30, 55]	[1, 30, 5]	[2, 1]
# [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]