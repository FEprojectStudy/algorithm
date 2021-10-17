def solution(s):

    # 처음 문자열의 길이
    answer = len(s)
    #  
    for i in range(1, len(s)// 2 +1):
      # 현재 탐색 위치
      cur = 0
      # 길이
      l = len(s)

      # 현재 위치를 기준으로 압축할 문자열을 순회
      while cur + i <= len(s):
        # i의 단위가 커질수록 자를 단위 증가
        size = s[cur:cur+i]
        # 단위가 커질수록 현재 위치도 커진다.
        cur += i

        # 단위만큼 반복되는 요소가 있는지 탐색
        count = 0
        while cur + i <= len(s):
          if size == s[cur:cur+i]:
            # 같은 문자열을 찾으면 count 증가
            count += 1
            # 위치를 다음 위치로 진행
            cur += 1 
          
          # 같은 패턴의 문자열이 없다면 탈출
          else:
            break;
        
        #반복된 패턴이 있을 경우
        if count > 0:
          l -= i * count

          #단위 수에 따라 단위 숫자 설정,
          if count < 9:
            l += 1
          elif count < 99:
            l += 2
          elif count < 999:
            l += 3
          else:
            l += 4

    # 초기 문자열과 압축 절차를 거친 문자열의 길이를 비교해서 최소값을 대입
    answer = min(answer, l)

    return answer