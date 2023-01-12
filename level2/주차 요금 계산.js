// 49분 시작
// 47분 끝
// 58분 소모

function solution(fees, records) {
  // 해시를 이용한 파싱
  // fee는 마지막에 한 번에 계산

  const [basicT, basicF, extraT, extraF] = fees;
  const DB = {};
  const answer = [];

  function getFee(time) {
    const extraTime =
      0 < time - basicT ? Math.ceil((time - basicT) / extraT) : 0;
    return basicF + extraTime * extraF;
  }

  records.map((data) => {
    const parsed = data.split(" ");
    const [hour, minute] = parsed[0].split(":").map(Number);
    const totalTime = hour * 60 + minute;
    const id = +parsed[1];

    // isIn이 있을 때, 즉 나가게 될 때 현재 totalTime에 기존에 저장한 time을 뺀 값을 계속 누적
    if (DB[id]?.isIn)
      DB[id] = {
        // realTime: "" + hour + minute,
        time: totalTime,
        accTime: DB[id].accTime + totalTime - DB[id].time,
        isIn: 0,
      };
    else
      DB[id] = {
        // realTime: "" + hour + minute,
        time: totalTime,
        accTime: DB[id] ? DB[id].accTime : 0,
        isIn: 1,
      };
  });

  // 마지막까지 남아 있을 경우 처리
  Object.entries(DB).map((data) => {
    const id = data[0];
    const { time, accTime, isIn } = data[1];
    const END = 24 * 60 - 1;
    const lastTime = isIn ? END - time : 0;
    const fee = getFee(accTime + lastTime);

    // 배열에 {차량번호, 요금} 객체로 저장
    answer.push({ id, fee });
  });

  // 차량 번호 오름차순으로 배열 정렬
  return answer.sort((a, b) => a.id - b.id).map((i) => i.fee);
}

solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);

// const test = {};

// const a = "id";

// const arrA = {};
// const arrB = {};

// arrA.a = 123123;
// arrB[a] = 123123;

// console.log(arrA);
// console.log(arrB);

// // 이 때 객체.id로 검색하는 게 아니라 정말 그대로 객체.a 라는 속성값을 가리키게 된다.
// // {a : "123123"};
// // a에 담은 id라는 값을 객체의 속성 값으로 지정하고 싶으면 객체[a]라고 해주어야 한다.
// // {id : "123123"}
// // const a = "id";
// // 객체.a = "123123"
