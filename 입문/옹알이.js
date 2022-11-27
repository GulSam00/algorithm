function solution(babbling) {
  const wordList = ["aya", "ye", "woo", "ma"];
  let wordIndex = 0;

  babbling.filter((babble) => {
    const ListArray = wordList.filter((word) => babble.includes(word)); // word 문자열이 wordList 중 일치하는지
    const uniqueArray = ListArray.filter(
      // wordList와 일치한 문장 중 중복 제거
      (word, index) => ListArray.indexOf(word) === index
    );
    console.log("ListArray", ListArray);
    console.log("babble ", babble);
    console.log("uniqueArray  ", uniqueArray.join(""));
    console.log(uniqueArray.join("").length === babble.length);
    if (uniqueArray.join("").length === babble.length) wordIndex++;
  });

  return wordIndex;
}

solution(["ayaye aya"]);
