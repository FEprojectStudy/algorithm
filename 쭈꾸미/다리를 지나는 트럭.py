from collections import deque;

def solution(bridge_length, weight, truck_weights):
    answer = 0
    queue = deque(truck_weights)  # 대기트럭
    bridge = deque([])  # 다리 위 트럭 [무게, 도착까지 남은 거리]
    complete = 0  # 다리를 지난 트럭

    while complete < len(truck_weights):

        answer += 1

        if len(bridge) > 0:

            for i in range(len(bridge)): #다리 위에서 이동 #남은거리 감소
                bridge[i][1] = bridge[i][1] - 1

            if bridge[0][1] == 0: #다리 건넌 트럭
                bridge.popleft()
                complete += 1

        if len(queue) != 0:
            #대기 트럭 진입 여부 확인
            if (sum([i[0] for i in bridge]) + queue[0] <= weight and len(bridge) < bridge_length):
                bridge.append([queue.popleft(), bridge_length])

    return answer

print(solution(2,10,[7,4,5,6]))