def solution(prices):

    # 각 시점마다 가격이 떨어지지 않은 시간을 넣을 배열
    answer = []

    # prices 배열을 순회하며
    for i in range(len(prices)):

        # j의 순회 범위는 바깥 for문이 한번 돌 때 마다 1씩 좁아진다.
        for j in range(i+1,len(prices)):
            
            #비교하는 가격보다 앞의 가격들이 작다면 조건 종료. 다음 숫자로 이동
            if prices[i] > prices[j]:
                break
        answer.append(j-i)
    return answer