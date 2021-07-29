from collections import deque

#최단거리 문제: 넓은 범위를 탐색해나가는 BFS 알고리즘 사용

def solution(maps):

    # graph 변수에 이차원배열 maps를 저장
    graph = maps
    # x의 directions 좌, 우 저장
    dx = [-1,1,0,0]
    # y의 directions 상, 하 저장
    dy = [0,0,-1,1]

    # 맵의 vertical 높이
    v = len(maps)-1

    # 맵의 horizontal 너비
    h = len(maps[0])-1

    # 넓이우선탐색 함수
    def bfs(x,y):

        #큐를 만들어
        queue = deque()

        #처음 시작지점 (0,0) 을 append한다.
        queue.append((x,y))

        #queue가 비어있지 않을 동안
        while queue :

            # x,y에 queue를 popleft한 값을 저장한다ㄴ
            x,y = queue.popleft()

            # i == 0~3까지
            for i in range(4):

                # x축 다음 이동 지점은 x+dx[-1, 1, 0, 0 -> 네 방향]
                nx = x + dx[i]

                # y축 다음 이동 지점은 y+dy[0, 0, -1, 1 -> 네 방향]
                ny = y + dy[i]

                # nx, ny 좌표가 게임 맵을 벗어나는 경우 무시
                if 0 > nx or nx > v or 0 > ny or ny > h:
                    continue
                # 벽(0)을 만나는 경우에도 무시
                if graph[nx][ny] == 0:
                    continue
                # 길(1)을 만나면 
                if graph[nx][ny] == 1:

                    #길이 있는 곳을 체크한다.
                    graph[nx][ny] = graph[x][y] + 1

                    #큐에 nx,ny 좌표를 apppend함
                    queue.append((nx,ny))
        return graph[h][v]
    answer = bfs(0, 0)
    if answer == 1:
        answer = -1
    return answer

maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
print(solution(maps))