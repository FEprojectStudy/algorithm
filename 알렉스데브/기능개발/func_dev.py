#먼저 대기열에 들어온 것 먼저 내보내기 (선입선출 = 큐 자료구조)
#프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
#또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
#이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
#먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가
#적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

def solution(progresses, speeds):

  # 각 배포마다 배포된 기능 수를 담을 배열
  answer = []

  # 날짜를 카운트할 변수
  day = 0

  # 기능 수를 누적할 변수
  count = 0

  # progresses 배열 안에 값이 존재할 동안 (speeds도 되지만 편의상 progresses로 설정)
  while len(progresses) > 0:

    # progresses의 첫 순서부터 작업 완료 시: 작업진도와 속도 리스트에서 제거한다. -> 완료할 때마다 기능의 수 누적
    if progresses[0] + (speeds[0]*day) >= 100:
      progresses.pop(0)
      speeds.pop(0)
      count += 1

    #완료되지 않았을 경우
    else:

      # day는 작업 완료 외의 경우, 1씩 누적
      day += 1

      # 누적된 기능의 수 체크: 1 이상 누적되었을 경우, 배열에 append하고 count를 초기화한다.
      if(count>0):
        answer.append(count)
        count = 0

  # 마지막으로 누적된 기능의 경우, 첫번째 조건문에 걸린 후 반복이 종료되기 때문에 반복문 밖에서 따로 append 해준다.
  answer.append(count)
  return answer

print(solution([93,30,55], [1,30,5]))