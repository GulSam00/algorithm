function solution(my_string, num1, num2) {
  const arr = my_string.split("");
  const temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
  console.log(
    ([my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]])
  );
  return arr.join("");
}

solution("helloworld", 0, 1);
