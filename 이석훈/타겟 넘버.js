function solution(numbers, target) {
  const A = Array(2 ** numbers.length).fill().map((v, i) => 0);
  function allArr(num, K) {
    let x = 2 ** (num.length - K);
    for (let i = 0; i < A.length; i++) {
      if (i % x <= 2 ** (num.length - 1 - K) && i % x !== 0) {
        A[i] = A[i] + num[K];
      } else if (i % x > 2 ** (num.length - 1 - K) || i % x === 0) {
        A[i] = A[i] - num[K];
      }
    }
  }

  for (let j = 0; j < numbers.length; j++) {
    allArr(numbers, j);
  }

  let answer = 0;
  for (let e = 0; e < A.length; e++) {
    if (A[e] === target) {
      answer += 1;
    }
  }
  return answer;
}
