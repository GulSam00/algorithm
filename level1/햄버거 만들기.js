// 35분 시작
// 55분 끝

function checkRecipe(com, index) {
  const recipe = [1, 2, 3, 1];

  for (let i = 0; i < 4; i++) {
    if (com[index + i] !== recipe[i]) return false;
  }
  return true;
}

function solution(ingredient) {
  let index = 0;
  let count = 0;
  while (ingredient.length >= 4 && index < ingredient.length) {
    if (checkRecipe(ingredient, index)) {
      count++;
      ingredient.splice(index, 4);
      index = 4 <= index ? index - 4 : -index;
    } else index++;
  }
  return count;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));

// slice를 이용한 풀이

// function solution(ingredient) {
//     let count = 0;

//     for (let i = 0; i < ingredient.length; i++) {
//         if (ingredient.slice(i, i + 4).join('') === '1231') {
//             count++;
//             ingredient.splice(i, 4);
//             i -= 3;
//         }
//     }

//     return count;
// }

// 스택을 이용한 풀이 - 모범 접근인 듯
// function solution(ingredient) {
//     let stk = [];
//     let count = 0;
//     for (let i = 0; i < ingredient.length; i++) {
//         stk.push(ingredient[i]);
//         if (
//             stk[stk.length-1] === 1 &&
//             stk[stk.length-2] === 3 &&
//             stk[stk.length-3] === 2 &&
//             stk[stk.length-4] === 1
//         ) {
//             count++;
//             stk.splice(-4);
//         }
//     }
//     return count;
// }
