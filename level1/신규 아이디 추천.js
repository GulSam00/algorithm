// 50분 시작
// 34분 끝

// 정규식

function solution(new_id) {
  const case2 = new RegExp(/[^\w|\-\.]/, "g");
  const case3 = new RegExp(/\.+/, "g");
  const case4 = new RegExp(/^\.|\.$/, "g");
  new_id = new_id.toLowerCase(); // 1
  new_id = new_id.replace(case2, ""); // 2
  new_id = new_id.replace(case3, "."); // 3
  new_id = new_id.replace(case4, ""); // 4
  if (!new_id.length) new_id = "a"; // 5
  if (new_id.length > 15) new_id = new_id.substr(0, 15).replace(case4, ""); // 6
  while (new_id.length < 3) new_id += new_id[new_id.length - 1]; // 7
  return new_id;
}

console.log("result : ", solution("...!@BaT#*..y.abcdefghijklm"));
