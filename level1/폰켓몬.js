// set을 이용한 날먹
function solution(nums) {
  const set = new Set(nums);
  return set.size < nums.length / 2 ? set.size : nums.length / 2;
}

// hash table 이용
class hashTable {
  table = [];
  numItems = 0;

  hashStringToInt = (s) => {
    let hash = 17;

    for (let i = 0; i < s.length; i++) {
      hash = 13 * hash * s.charCodeAt(i);
    }
    return hash;
  };

  setItem = (key, value) => {
    this.numItems++;
    const idx = this.hashStringToInt(key);
    console.log("idx: ", idx);
    this.table[idx] = value;
  };
  getItem = (key) => {
    const idx = this.hashStringToInt(key);
    console.log("idx: ", idx);
    return this.table[idx];
  };
}

const newTable = new hashTable();
newTable.setItem("1", "John");
newTable.setItem("1", "JoJO");

newTable.setItem("2", "ㄹㄴㅇㅁ");
newTable.setItem("3", "ㅈㄷㄱ");

console.log("data : ", newTable.getItem("1"));
