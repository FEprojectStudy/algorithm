from itertools import combinations

def solution(orders, course):
    answer = []
    tmp = []
    dict = {}
    tmp_len = 0
    max_val = 0

    for order in orders:
        arr = sorted(list(set(list(''.join(order)))))
        for i in course:
            if len(arr) < i : break; #조합 생성 불가

            for j in list(combinations(arr, i)):
                dict_key = ''.join(j)
                if dict.get(dict_key) == None:
                    dict[dict_key] = 1
                else:
                    dict[dict_key] = dict[dict_key] + 1

    key_arr = sorted(dict.keys(), key=lambda x: len(x))

    for k in key_arr:

        if len(k) != tmp_len: #길이 맞추기
            tmp_len = len(k)
            for v in tmp:
                answer.append(v)
            tmp = []
            max_val = 0

        if dict[k] >= 2:
            if dict[k] > max_val:
                tmp = [k]
                max_val = dict[k]
            elif dict[k] == max_val:
                tmp.append(k)

    else:
        for v in tmp:
            answer.append(v)

    return sorted(answer)

order = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
course = [2,3,4]
print(solution(order, course))