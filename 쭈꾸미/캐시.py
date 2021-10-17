from collections import deque

def solution(cacheSize, cities):
    answer = 0
    cache = deque([])
    
    #캐시 사이즈가 0인 경우 : 페이지 수 * cache hit(5)
    if cacheSize == 0:
        return len(cities) * 5
    
    for data in cities:
        
        data = data.lower()
        
        #cache hit : 해당 페이지가 캐시에 있는 경우
        if data in cache:
            cache.remove(data)
            cache.append(data)
            answer += 1
            continue
              
        #cache miss : 캐시가 가득 차있거나 캐시에 빈 공간이 있음
        if len(cache) + 1 > cacheSize:
            cache.popleft()
       
        cache.append(data)
        answer += 5
    
    return answer