
def solution(n,t, m, timetable):
  
  # 초기값 0
  answer = 0

  # 1시간 => 60분

  # 크루별 도착 시간 (Estimated Time of Arrival) 리스트를 생성한다. (파이썬 문법 리스트 컴프리헨션)
  ETA = [int(time[:2]) *60 + int(time[3:]) for time in timetable ]

  # 시간별로 정렬한다.
  ETA.sort()

  # 인덱스 * 운행 간격으로 시간을 정하고, n번 만큼 오는 버스
  busArrival = [9*60 + t*i for i in range(n)]

  # 다음 버스에 탈 그룹은 따로 인덱스 변수를 선언한다.
  i = 0

  for turn in busArrival:
    
    # 그룹의 수를 저장할 cnt. 매회 순회할 때마다 초기화 
    cnt = 0

    '''탑승 최대 그룹 수 보다 현재 그룹 수가 작고, 
    다음 그룹의 인덱스가 그룹 도착시간 개수 내에 있으며, 
    다음 그룹 도착시간이 각 버스 도착시간내에 맞추어 지면
    ''' 
    while cnt < m and i <len(ETA) and ETA[i] <= turn:
      i += 1 # 다음 크루 인덱스 이동
      cnt += 1 # 버스에 태운다
    
    #버스에 자리가 남았다면
    if cnt < m :
      # 마지막으로 탈 수 있는 시간은 현재 시간
      answer = turn
    
    #버스에 자리가 없으면, 마지막 그룹보다 더 일찍 도착해야 되서
    else:
      answer = ETA[i-1] - 1 # 현재 탑승한 그룹의 도착시간에서 -1 

  #60분으로 환산 데이터 앞에 0을 채우는 zero fill
  return str(answer//60).zfill(2) + ':' + str(answer%60).zfill(2)



print(solution(2,10,2,["09:10", "09:09", "08:00"]))