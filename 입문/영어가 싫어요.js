function solution(numbers) {
  const strs = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  strs.map((num, arrIndex) => {
    const i = numbers.indexOf(num);
    if (0 <= i) {
      let reg = new RegExp(num, "gi");
      numbers = numbers.replace(reg, arrIndex);
      // console.log("temp : ", temp);
      // console.log("str ", numbers);
    }
  });
  return Number(numbers);
}

console.log(solution("oneseveneightone"));
