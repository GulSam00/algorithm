function solution(emergency) {
  const answer = emergency.map((num) => {
    let emer = emergency.length;
    for (let i = 0; i < emergency.length; i++) {
      if (num > emergency[i]) emer--;
    }
    return emer;
  });
  console.log(answer);
  return answer;
}

solution([3, 76, 24]);
