//  string 자료형의 key에 해당하는 공간에 string 자료형의 value를 집어넣은 것

// hash table 생성
class hashTable {
  table = new Array(5);
  numItems = 0;

  hashStringToInt = (s) => {
    let hash = 17;

    for (let i = 0; i < s.length; i++) {
      hash = 13 * hash * s.charCodeAt(i) * this.numItems;
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
    return this.table[idx];
  };
}

const newTable = new hashTable();
newTable.setItem("firstName", "John");
console.log("data : ", newTable.getItem("firstName"));
