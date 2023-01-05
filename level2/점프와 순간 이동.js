// 27분 시작

// 치팅

function solution(n) {
  let batterry = 0;
  while (n) {
    if (n % 2 === 0) n /= 2;
    else {
      n -= 1;
      batterry++;
    }
  }

  return batterry;
}
