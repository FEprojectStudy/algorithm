def solution(s):
    answer = len(s)
    
    #문자열 최대 압축 단위 : n//2
    for i in range(1, len(s)//2 + 1):
        
        # i개씩 잘라서 배열 생성
        arr = [ s[k:k+i] for k in range(0, len(s), i) ]
        arr.append(' ') #마무리용 의미없는 문자
        
        tmpAnswer = ''
        count = 1
        before = arr[0]
        
        for now in range(1, len(arr)):
            if before == arr[now]:
                count += 1
            else: #이전까지 내용 압축
                if count > 1: #압축 가능
                    tmpAnswer += str(count) + before
                else: #압축 불가
                    tmpAnswer += before
                count = 1
            before = arr[now]
        
        #더 짧은가?
        if len(tmpAnswer) < answer: 
            answer = len(tmpAnswer)
            
    return answer

print(solution("aabbaccc"))
