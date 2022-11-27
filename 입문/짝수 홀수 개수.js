const solution = (num_list) => {
  const answer = [];
  let odd = 0;
  let even = 0;
  num_list.map((num) => (num % 2 === 0 ? even++ : odd++));
  answer.push(even, odd);
  return answer;
};

console.log(solution([1, 2, 3, 4]));
