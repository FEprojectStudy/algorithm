from collections import deque

def solution(maps):
    N, M = len(maps), len(maps[0])
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    answer = bfs(0, 0, N, M, maps, dx, dy)
    if answer == 1:
        return -1
    else:
        return answer

def bfs(x, y, N, M, maps, dx, dy):
    queue = deque()
    queue.append((x, y))

    while queue:

        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            #영역을 벗어나거나 벽을 만났을 경우
            if nx < 0 or ny < 0 or nx >= N or ny >= M:
                continue

            if maps[nx][ny] == 0:
                continue

            if maps[nx][ny] == 1:
                maps[nx][ny] = maps[x][y] + 1
                queue.append((nx, ny))
            else: #이미 지나간 길을 만났을 때 최단거리 비교
                if maps[nx][ny] > maps[x][y] + 1:
                    maps[nx][ny] = maps[x][y] + 1
                    queue.append((nx, ny))

    return maps[N - 1][M - 1]