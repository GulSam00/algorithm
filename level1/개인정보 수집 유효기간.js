function solution(today, terms, privacies) {
  var answer = [];

  const termObject = {};

  terms.forEach((term) => {
    const [type, duration] = term.split(" ");
    termObject[type] = parseInt(duration);
  });

  privacies.forEach((privacy, index) => {
    const [date, type] = privacy.split(" ");
    const expirationDate = new Date(date);
    expirationDate.setMonth(expirationDate.getMonth() + termObject[type]);
    console.log(expirationDate, new Date(today));
    if (expirationDate <= new Date(today)) {
      answer.push(index + 1);
    }
  });

  return answer;
}
