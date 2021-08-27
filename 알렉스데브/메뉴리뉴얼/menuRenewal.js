/**공통문자열을 찾는 문제
 *  문자열의 요소로 조합 (combination) 을 만드는 방법: 모든 경우의 수를 따져보는 것이기 때문에 완전탐색이다.
 * 각각의 문자열을 순회하면서 공통문자열의 길이가 2이고 같은 요소가 2번 이상 있을 경우, 새로운 배열에 공통문자열을 추가한다.
 *  중복을 배제하고, 입출력 예의 법칙을 따라 각각으 공통문자열은 사전순으로 정렬하여 추가
 */

function solution(orders, course) {
  let answer = [];
  const single = orders.map((x) => x.split(''));
  console.log(single);
  return answer;
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
);
