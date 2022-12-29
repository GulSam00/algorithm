// 시작 12분
// 종료 46분

// 24분 소요

function solution(numbers, hand) {
  const onlyLeft = new RegExp("[1|4|7]");
  const onlyRight = new RegExp("[3|6|9]");

  const keyPad = {
    1: [0, 0],
    2: [1, 0],
    3: [2, 0],
    4: [0, 1],
    5: [1, 1],
    6: [2, 1],
    7: [0, 2],
    8: [1, 2],
    9: [2, 2],
    0: [1, 3],
  };
  let left = [0, 3];
  let right = [2, 3];

  const answer = numbers.map((number) => {
    // console.log("-----");
    // console.log("num : ", number);
    // console.log("left : ", left, "right", right);
    let pressHand;
    if (onlyLeft.test(number)) pressHand = "L";
    else if (onlyRight.test(number)) pressHand = "R";
    else {
      const leftDistance =
        Math.abs(left[0] - keyPad[number][0]) +
        Math.abs(left[1] - keyPad[number][1]);
      const rightDistance =
        Math.abs(right[0] - keyPad[number][0]) +
        Math.abs(right[1] - keyPad[number][1]);
      //   console.log("L R : ", leftDistance, rightDistance);
      if (leftDistance < rightDistance) pressHand = "L";
      else if (rightDistance < leftDistance) pressHand = "R";
      else {
        pressHand = hand[0].toUpperCase();
      }
    }
    // console.log("press by ", pressHand);
    if (pressHand === "L") left = keyPad[number];
    else right = keyPad[number];

    return pressHand;
  });
  return answer.join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
