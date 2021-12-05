def rotate(x):
  n = len(x)
  m = len(x[0])
  result = [[0] * n for _ in range(m)]
  for i in range(n):
    for j in range(m):
      result[j][n-i-1] = x[i][j]
  return result

def check(new_lock):
  lock_length = len(new_lock) // 3
  for i in range(lock_length, lock_length*2):
    for j in range(lock_length, lock_length*2):
      if new_lock[i][j] != 1:
        return False
  return True

def solution(key, lock):
  M, N = len(key), len(lock)
  new_lock = [[0] * (N*3) for _ in range(N*3)]

  for i in range(N):
    for j in range(N):
      new_lock[i+N][j+N] = lock[i][j]

  
  for r in range(4):
    key = rotate(key)
    for x in range(N*2):
      for y in range(N*2):
        for i in range(M):
          for j in range(M):
            new_lock[x+i][y+j] += key[i][j]

        if check(new_lock) == True:
          return True
        
        for i in range(M):
          for j in range(M):
            new_lock[x+i][y+j] -= key[i][j]
  return False

solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]])


[[0, 0, 0],
 [1, 0, 0],
  [0, 1, 1]]