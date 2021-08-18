def solution(genres, plays):
    # 장르별로 많이 재생된 노래 두개씩
    # 1. 총 재생 합계가 많은 장르 순
    # 2. 장르 내에서 재생수 많은 순
    # 3. 장르 내에서 재생수 같으면 고유번호가 낮은 노래순
    answer = []
    dict = {}
    dict_play = {}
    num = 0

    for genre, play in zip(genres, plays):
        if genre not in dict.keys():
            dict[genre] = []
            dict_play[genre] = 0 #재생 합계
        #(고유번호, 재생수) 형태로 딕셔너리에 삽입
        dict[genre].append((num, play))
        dict_play[genre] += play
        num += 1

    #재생 합계 기준으로 정렬
    dict_to_list = sorted(zip(dict.items(), list(dict_play.values())), reverse=True, key=lambda x: x[1])
    dict_to_list = [i[0] for i in dict_to_list]

    for dict in dict_to_list:
        if len(dict[1]) == 1: #수록 노래 단일
            answer.append(dict[1][0][0])
        else: #수록 노래 다수
            arr = sorted(dict[1], key=lambda x: x[0])  # 고유번호 오름차순
            arr = sorted(dict[1], reverse=True, key=lambda x: x[1])  # 재생수 내림차순
            answer.append(arr[0][0])
            answer.append(arr[1][0])

    return answer

j = ["classic", "pop", "classic", "classic", "pop","balad"]
s = [500, 600, 150, 800, 2500, 100]
print(solution(j,s))
