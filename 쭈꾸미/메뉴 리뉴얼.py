from itertools import combinations

def solution(orders, course):
    answer = []
    dict = {}

    for idx, order in enumerate(orders):
        arr = sorted(list(set(list(''.join(order)))))
        for i in course:
            if(len(arr) < i): break; #조합 생성 불가

            for j in list(combinations(arr, i)):
                dict_key = ''.join(j)
                if dict.get(dict_key) == None:
                    dict[dict_key] = 1
                else:
                    dict[dict_key] = dict[dict_key] + 1

    key_arr = sorted(dict.keys(), reverse=True, key=lambda x: len(x))
    for k in key_arr:
        if dict[k] >= 2:
            answer.append(k)

    return sorted(answer)
    # ['!AC', 'ACD', '!ACDE', 'ACE', 'AD', 'ADE', 'AE', 'BC', 'BCF', '!BCFG', 'BCG', 'BF', 'BFG', 'BG', 'CD', '!CDE', 'CE', 'CF', 'CFG', 'CG', 'DE', 'FG']

order = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
course = [2,3,4]
print(solution(order,course))