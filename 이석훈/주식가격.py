def solution(prices):
    answer = []
    for i in range(len(prices)):
        k = 0
        if i == len(prices)-1:
            answer.append(0)
        else:
            for j in range(i+1, len(prices)):
                k = k+1
                if prices[i] > prices[j]:
                    answer.append(j-i)
                    break
                    # 같은거도 포함
                elif j == len(prices)-1 and prices[i] <= prices[j]:
                    answer.append(len(prices)-1-i)
    return answer
