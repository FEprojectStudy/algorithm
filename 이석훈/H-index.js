function solution(citations) {
  //오름차순으로 정렬
  let sortArr = citations.sort((a, b) => a - b);
  //H-index를 만족하는 숫자들을 넣는 배열
  let HArr = [];
  //정렬된 배열에서 요소를 하나씩 꺼내
  for (let i = 0; i < sortArr[sortArr.length - 1]; i++) {
    //현재 숫자보다 높은 숫자의 개수가 더 많거나 같고, 적은 숫자의 개수는 현재 숫자보다 적은 수를 구함
    for (let k = 0; k < sortArr.length; k++) {
      if (sortArr[k] >= i && sortArr.length - k >= i && i >= k) {
        //조건을 만족하면 배열에 넣음
        HArr.push(i);
      }
    }
  }
  //배열에서 가장 마지막 수가 가장 높은 수가 될 것이므로, 마지막 수를 도출해냄

  return HArr[HArr.length - 1];
}
document.write(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
