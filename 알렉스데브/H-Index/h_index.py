def solution(citations):
  citations.sort()
  for i in range(len(citations)):
    #
    #h번 이상 인용된 논문이 h편이상일 때
    #citations[i]: 논문의 인용 회수, len(citations)-i 인용된 논문의 개수를 최대값부터 하나씩 감소시킴
    # 정렬된 citations [0,1,3,5,6] (5편)중, 3,5,6은 h = 3회 이상 인용됨,
    # 이와 동시에 나머지 논문이 3회 이하 인용횟수를 가지는 h의 최댓값이 h-index이므로
    # citations [0,1,3,5,6] 을 순회할 때마다, 전체길이에서 i 인덱스 마다 뺴주며,
    # citations[i]가 크거나 같아지는 포인트가 h-index
    # 정렬된 리스트에서 3의 인덱스는 2번째. 따라서 len(citations)-i는 3
    if citations[i] >= len(citations) - i:
      return len(citations)-i 
  return 0

print(solution([3,0,6,1,5]))