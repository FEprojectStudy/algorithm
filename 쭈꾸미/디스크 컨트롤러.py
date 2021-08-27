from collections import deque

def solution(jobs):
    answer = []
    now_ms = 1
    ongoing = False
    rest_job = len(jobs)
    rest_time = 0
    queue = deque([])

    while (rest_job != 0):

        for job in jobs:  # 새로 들어온 작업 확인 #시간초과
            if (now_ms - 1) == job[0]:
                queue.append(job)

        #대기중인 작업 소요시간 순으로 재정렬
        queue = deque(sorted(list(queue), key=lambda x: x[1]))
        if ongoing == False:  # 진행중인 작업이 없음
            if len(queue) > 0:  # 대기열에 작업이 있음
                now_job = queue.popleft()
                rest_time = now_job[1]
                ongoing = True

        if ongoing == True:  # 현재 진행중인 작업
            rest_time -= 1
            if rest_time == 0:  # 작업 끝
                rest_job -= 1
                ongoing = False
                answer.append(now_ms - now_job[0])

        now_ms += 1 

    return int(sum(answer) / len(answer))

print(solution([[0, 3], [1, 9], [2, 6]]))