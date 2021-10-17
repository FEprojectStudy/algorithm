function solution(sizes) {
  let answer = 0;
  let cards = sizes;

  // 지갑의 최소 넓이와 길이를 저장할 변수 선언
  let card_width = 0;
  let card_height = 0;

  // 겉 배열을 순회하며
  for (let i = 0; i < cards.length; i++) {
    // 가로와 세로를 비교해 더 큰 값을 x 변수에 저장
    let x = Math.max(cards[i][0], cards[i][1]);

    // 가로와 세로를 비교해 더 작은 값을 y 변수에 저장
    let y = Math.min(cards[i][0], cards[i][1]);

    // 지갑의 최소 넓이의 현재 값과 가로 or 세로 최대값인  x값을 비교해 더 큰 값 대입
    card_width = Math.max(card_width, x);
    // 지갑의 최소 넓이의 현재 값과 가로 or 세로 최대값인 y값을 비교해 더 큰 값 대입
    card_height = Math.max(card_height, y);
  }

  console.log(`max_width: ${card_width}`);
  console.log(`max_height: ${card_height}`);

  //모든 명함을 넣을 수 있는 최소 지갑 크기
  answer = card_width * card_height;
  return answer;
}

console.log(`min_wallet_size: ${solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
])}
`);
