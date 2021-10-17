def solution(cacheSize, cities):
    # 실행시간
    answer = 0
    # 초기 캐시 인덱스
    i = 0
    #city를 넣고 뺄 cache 공간     
    cache = []
    # 캐시 사이즈가 0일 경우,
    if cacheSize == 0:
        #모든 city가 cache miss 라서 길이 곱하기 5를 해서 리턴
        return len(cities)*5
    # 도시를 순회하며
    for c in cities:
        # city 이름 소문자로 초기화 (대소문자를 구분하지 않기 떄문)           
        city = c.lower()

        # 캐시에 이미 있는 city의 경우
        if city in cache:
            # 현재 city는 가장 나중에 사용되어, 맨 마지막으로 위치를 옮긴다.          
            cache.remove(city)       
            cache.append(city)
            # 실행시간 증가 (cache hit = 1)
            answer += 1

        # 캐시에 없는 city의 경우    
        else:
            # 실행시간 증가 (cache miss = 5)
            answer += 5
            
            # 아직 캐시에 빈 공간이 있다면 
            if i < cacheSize:
                # 캐시에 city 데이터를 넣는다.
                cache.append(city)
                # 캐시 인덱스를 증가
                i += 1
            # 캐시에 빈 공간이 없다면
            else:
                # 캐시 안의 가장 오래된 캐시를 빼고                     
                cache.pop(0)
                # 현재 캐시를 넣는다.          
                cache.append(city)

    return answer