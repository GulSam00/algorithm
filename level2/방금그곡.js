// 48분 시작
// 35분 끝

// C, C#, D, D#, E, F, F#, G, G#, A, A#, B

function invertMelody(str) {
  const melody = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") melody[melody.length - 1] += "#";
    else melody.push(str[i]);
  }
  return melody;
}

function solution(m, musicinfos) {
  const answer = ["(None)", 0];

  const memory = invertMelody(m);

  const newList = musicinfos.map((item) => {
    const arr = item.split(",");
    const startTime = arr[0].split(":").reduce((acc, cur, index) => {
      return index === 0 ? acc + +cur * 60 : acc + +cur;
    }, 0);
    const endTime = arr[1].split(":").reduce((acc, cur, index) => {
      return index === 0 ? acc + +cur * 60 : acc + +cur;
    }, 0);
    const playTime = endTime - startTime;
    const melody = invertMelody(arr[3]);
    const playMusic = [];
    for (let i = 0; i < playTime; i++) {
      playMusic.push(melody[i % melody.length]);
    }
    return [arr[2], playMusic];
  });

  newList.map(([name, melody]) => {
    for (let i = 0; i < melody.length; i++) {
      if (
        melody[i] === memory[0] &&
        melody.slice(i, i + memory.length).join("") === memory.join("")
      )
        if (answer[1] < melody.length) {
          answer[0] = name;
          answer[1] = melody.length;
          break;
        }
    }
  });

  return answer[0];
}

console.log(
  solution("CC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"])
);
