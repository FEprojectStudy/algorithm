def solution(sizes):
    answer = 0
    cards = sizes
    wallet_width = 0
    wallet_height = 0

    for i in range(len(cards)):
      x = max(cards[i][0],cards[i][1])
      y = min(cards[i][0],cards[i][1])
      wallet_width = max(wallet_width, x)
      wallet_height = max(wallet_height, y)
      
    answer = wallet_width * wallet_height

    return answer

print(solution([[60,50],[30,70],[60,30],[80,40]]))