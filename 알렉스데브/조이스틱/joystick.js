function solution(name) {
  // A의 최대 개수
  let maxLenA = 0;

  //인덱스가 13인 N을 중간 지점으로, 다음 문자가 더 작으면 정순, 더 크면 역순으로 letter를 연산
  const changeAlphabet = (letter) => (letter > 78 ? 91 - letter : letter - 65);

  const findConsA = (str, i) => {
    // 이동 홧수
    let cnt;

    // 순회하며
    for (cnt = 0; cnt < str.length; cnt++) {
      // A가 아닌 경우는 함수 종료
      if (str[cnt] !== "A") break;
    }

    // 다음 숫자가 A일 때, A가 연달아 존재하면 이전 idx와 뺄셈, 최소 이동횟수 구함
    return cnt - (i - 1) > maxLenA ? cnt - (i - 1) : maxLenA;
  };

  const total = [...name].reduce((total, letter, i) => {
    // 다음 글자가 A가 아니면 누적 total에 변경한 알파벳의 아스키코드 값을 누적 (알파벳 순서)
    if (letter !== "A") return total + changeAlphabet(name.charCodeAt(i)) + 1;

    // 인덱스가 0이거나 이전 인덱스가 A가 아니면, A의 연속 개수 찾기
    if (i === 0 || name[i - 1] !== "A") {
      // 조건에 맞으면 글자에서 해당 인덱스 부분을 잘라 maxLenA에 대입
      maxLenA = findConsA(name.slice(i), 1);
    }

    // 누적 개수를 반환
    return total + 1;
  }, 0);

  // 0 인덱스의 경우 제외
  return total - maxLenA - 1;
}
