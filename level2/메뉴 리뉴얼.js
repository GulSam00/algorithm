// 2:43 시작
// 3:46 성공

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]);
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

// function solution(orders, course) {
// //   const A = 65;

// //   // 알파벳 총 개수에 해당하는 배열. 각 index 값은 해당 메뉴가 주문된 횟수
// //   const bill = new Array(26).fill(0);
// //   const courseList = new Array(course.length).fill("");

// //   orders.map((order) => {
// //     orderFoods = order.split("");
// //     orderFoods.map((food) => bill[food.charCodeAt() - A]++);
// //   });

// //   console.log(bill);

// //   course.map((amount, courseIndex) => {
// //     return bill.map((count, alphaIndex) => {
// //       if (amount <= count)
// //         courseList[courseIndex] += String.fromCharCode(A + alphaIndex);
// //     });
// //   });

//   console.log(courseList);

//   // 20분 소모

//   //   return answer;
// }
function solution(orders, course) {
  let lists = {};
  let curMax;

  const answer = [];

  // 서순 이슈
  // course에서 한 번 찾을 때마다 해시 새로고침 해야함

  course.map((num) => {
    lists = {};
    curMax = 1;
    orders.map((order) => {
      orderFoods = order.split("").sort();
      const curCourse = getCombinations(orderFoods, num);
      curCourse.map((i) => {
        console.log("test", i);
        const sorted = i.sort().join("");

        if (lists[sorted]) lists[sorted]++;
        else lists[sorted] = 1;

        if (curMax < lists[sorted]) curMax = lists[sorted];
      });
    });
    console.log(lists, num, "개 코스의 최대", curMax);
    for (const key in lists) {
      if (curMax > 1 && lists[key] === curMax) answer.push(key);
    }
  });
  console.log(answer.sort());
}

// 잘못된 접근, 각각의 개수가 아닌 조합을 구해야 함

// 해시로 만들 수 있는 모든 조합을 다 만들어야함
// 순열 함수 이용

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
