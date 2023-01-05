// 55분 시작
// 28분 종료

function solution(cacheSize, cities) {
  const queue = [];
  let running = 0;
  cities.map((city) => {
    city = city.toLowerCase();
    hitIndex = queue.indexOf(city);

    // console.log("HEAD ->", queue, "<- TAIL");
    // console.log(city);

    if (hitIndex != -1) {
      // hit 시 hit한 데이터를 맨 앞쪽으로

      //   console.log("HIT! index :", hitIndex);

      queue.splice(hitIndex, 1);
      queue.unshift(city);
      running++;
    } else {
      queue.unshift(city);
      if (queue.length > cacheSize) {
        queue.pop();
      }
      running += 5;
    }
  });
  return running;
}

// function solution(cacheSize, cities) {
//   const queue = [];
//   let running = 0;
//   cities.map((city) => {
//     city = city.toLowerCase();
//     hitIndex = queue.indexOf(city);

//     // console.log("TAIL ->", queue, "<- HEAD");
//     // console.log(city);

//     if (hitIndex != -1) {
//       // hit 시 hit한 데이터를 맨 앞쪽으로

//       //   console.log("HIT! index :", hitIndex);

//       queue.splice(hitIndex, 1);
//       queue.push(city);
//       running++;
//     } else {
//       queue.push(city);
//       if (queue.length > cacheSize) {
//         queue.shift();
//       }
//       running += 5;
//     }
//   });
//   return running;
// }

console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
