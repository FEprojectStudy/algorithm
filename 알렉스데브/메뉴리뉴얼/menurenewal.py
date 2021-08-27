from itertools import combinations

def solution (orders, course):
  answer = []

  #코스요리 단품개수를 순회하며 dict를 선언
  for dish in course:
    dict = {}

    # 주문을 순회하며
    for i in range(len(orders)):

      # 주문에서 메뉴의 조합을 만들고, 그것을 이어 문자열로 만든 것을 요소로 하는 배열 선언.
      comb = [ ''.join(c) for c in combinations(sorted(orders[i]), dish)]

      # 메뉴 조합 배열을 순회하며
      for j in range(len(comb)):

        # 조합 가능한 것을 dict으로 카운트
        dict[comb[j]] = dict.get(comb[j], 0) +1

  # 딕셔너리를 순회하며 dict 안의 최대값을 구하고
  for k in dict:
    DICT_MAX = max(dict.values())
    #딕셔너리의 최대값이 2 이상이고 순회하는 각각 값이 최대값과 같을 경우
    if DICT_MAX >= 2 and dict[k] == DICT_MAX:
      # 조건에 맞으므로 정답 배열에 넣는다.
      answer.append(k)
  return sorted(answer)
  
print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))