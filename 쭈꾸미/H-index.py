def solution(citations):
    max_h = 0

    for h in range(max(citations) + 1):
        count = 0

        # h번 이상 인용된 논문의 수
        for citation in citations:
            if citation >= h:
                count += 1

        # h번 이상 인용된 논문이 h편 이상인가?
        if h <= count and max_h < count:
            max_h = h

    return max_h

print(solution([3, 0, 6, 1, 5]))