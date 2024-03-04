var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  const length = citations.length - 1;
  let h = citations.length;

  console.log(citations);

  for (let i = 0; i <= length; i++) {
    if (citations[i] < h) h--;
  }
  return h;
};

console.log(hIndex([2, 1, 5, 4, 3]));
