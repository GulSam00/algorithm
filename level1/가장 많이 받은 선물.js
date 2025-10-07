function solution(friends, gifts) {
  var answer = 0;

  const giftTable = new Array(friends.length).fill(
    new Array(friends.length).fill(0)
  );

  console.log(giftTable);
  console.log(giftTable[0]);

  //  gifts.foreach((gift, idx) => {

  //   const [give, get] = gift.split(" ");
  //   const giveIdx = friends.findIndex(give);
  //   const getIdx = friends.findIndex(get);

  // });

  return answer;
}

solution(["a", "b", "c"], []);
