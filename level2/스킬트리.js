// 19분 시작

function solution(skill, skill_trees) {
  // 일치하는 배열을 push?
  return skill_trees.filter((tree) => {
    let indexArr = [];
    let isWrong = false;

    for (let i = 0; i < skill.length; i++)
      indexArr.push(tree.indexOf(skill[i]));

    const flag = indexArr.indexOf(-1);
    // flag까지 배열 잘라버리기 - 이후에는 -1만 나와야함
    if (flag !== -1)
      if (indexArr.slice(flag).filter((i) => i !== -1).length) return;

    indexArr = indexArr.filter((i) => i !== -1);
    const sorted = [...indexArr].sort((a, b) => a - b);

    console.log(tree);
    console.log("flag : ", flag);
    console.log(indexArr, sorted);
    indexArr.map((item, i) => {
      if (item !== sorted[i]) isWrong = true;
    });

    return !isWrong && tree;
  });
}

function solution(skill, skill_trees) {
  var answer = 0;

  var regex = new RegExp(`[^${skill}]`, "g");
  // skill에 해당하지 않는 요소들을 포함하는 정규식

  // replace로 skill이 아닌 것들을 날려버림
  return skill_trees
    .map((x) => x.replace(regex, ""))
    .filter((x) => {
      console.log(skill.indexOf(x));
      // skill에서 x를 찾는다. 일부만 있어도 순서가 같으면 0이 나오겠지만
      // 순서가 뒤바뀌거나 뒤에 있어야 할 게 앞에 나와 버리면 1 이상의 값이 나오게 된다
      return skill.indexOf(x) === 0 || x === "";
    }).length;
}

console.log(solution("BDC", ["AAAABCD"]));
