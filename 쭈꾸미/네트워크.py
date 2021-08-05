from collections import deque

def solution(n, computers):
    answer = 0
    visited = [False] * n

    for i in range(n):
        if visited[i] == False:
            visited = bfs(i, n, computers, visited)
            answer += 1
    return answer

def bfs(idx, n, computers, visited):
    queue = deque([])
    queue.append(idx)

    while queue:
        v = queue.pop()
        visited[v] = True #현재노드 방문처리

        for i in range(n):
            # 현재 노드와 인접한 노드를 전부 방문처리 해준다
            if computers[v][i] == 1 and visited[i] == False:
                queue.append(i)

    return visited
