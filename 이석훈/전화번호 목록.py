def solution(phone_book):
    answer = True
    hashMap = {}
    for phoneElement in phone_book:
        hashMap[phoneElement] = 0
    for phoneElement in phone_book:
        findSameElement = ""
        for num in range(0,len(phoneElement)):
            findSameElement = phoneElement[0:num]

            #앞에서부터 한글자씩 쌓아나가며 해시에 같은 값이 있는데 input으로 받은 Array에 같은 값이 없다면
            #어떠한 element는 다른 element 에 포함되며, 전체가 다른 element와 중복되는 것이므로
            if findSameElement in hashMap and findSameElement != phoneElement:
                return False

    return answer
