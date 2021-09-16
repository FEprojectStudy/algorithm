def solution(phone_book):
    answer = True
    dic = {}

    for p in phone_book: #해시 생성
        if p[0] not in dic.keys():
            dic[p[0]] = [p]
        else:
            dic[p[0]].append(p)

    for phone in dic.values():

        if len(phone) >= 2:  # 해당 key 배열 안에 요소가 2개 이상인 경우 정렬
            phone.sort(key=lambda x: len(x))
            phone.sort()
        else:
            continue

        for i in range(0, len(phone) - 1): #현재 요소와 다음 요소 비교
            if phone[i] == phone[i + 1][:len(phone[i])]:
                answer = False

    return answer

print(solution(["934793", "34", "4", "47"]))