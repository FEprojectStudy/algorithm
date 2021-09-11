answer = 51

def solution(begin, target, words):

    for i in words:
        arr_copy = words.copy()
        arr_copy.remove(i)
        DFS(1, begin, i, target, arr_copy)

    if answer == 51:
        return 0
    else:
        return answer

def DFS(idx, now_W, next_W, target, arr):
    global answer  # 최솟값
    count = 0

    for i, j in zip(now_W, next_W):
        if i != j:
            count += 1

    # 글자가 2개 이상 다르거나 더이상 변환할 수 없음
    if count > 1 or len(arr) == 0:
        return

    # 타겟과 일치하고 변환 횟수가 최소
    if next_W == target and idx < answer:
        answer = idx
        return

    for w in arr:
        arr_copy = arr.copy()
        arr_copy.remove(w)
        DFS(idx + 1, next_W, w, target, arr_copy)

print(solution("hit","cog",["hot", "dot", "dog", "lot", "log", "cog"]))