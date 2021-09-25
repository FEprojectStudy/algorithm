def solution(number, k):
    # 큰 값이 앞에 오도록 저장하기 위한 리스트
    collected = []
    answer = ''
    
    # number 인덱스와 요소 값을 순회
    for idx, num in enumerate(number):
        # 리스트가 비어있지 않고 collected에 저장된 마지막 값이 순회 값보다 크고, k가 0보다 클 동안
        while collected and collected[-1] < num and k > 0:
            # collected 배열의 마지막 값을 꺼낸다
            collected.pop()
            # k를 1만큼 감소
            k -= 1
        # k 가 0과 같아지만
        if k == 0:
            # collected 배열에 number의 해당 인덱스부터 끝까지 자른 값을 저장
            collected += number[idx:]
            # 루프 탈출
            break
        # 조건에 해당하지 않는 값을 넣는다
        collected.append(num)
    
    # 마지막 k가 0보다 클 경우 뒤에서 k번째 인덱스를 제외한 모든 요소를 collected에 대입
    collected = collected[:-k] if k > 0 else collected
    # collected 배열의 요소 값을 합침
    answer = ''.join(collected)       
    
    return answer