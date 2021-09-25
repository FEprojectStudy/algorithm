function solution(number, k) {
  let collected = [];
  answer = "";

  let arr = Array.from(number);

  arr.forEach((idx, num) => {
    while (collected && collected[-1] < num && k > 0) {
      collected.pop();
      k -= 1;

      if (k === 0) {
        collected += number[idx];
        break;
      }
    }
    collected.push(num);
  });
  if (k > 0) {
    collected = collected.slice(0, -k);
  } else {
    collected = collected;
  }
  answer = collected.join("");
  return answer;
}

console.log(solution("1924", 2));
