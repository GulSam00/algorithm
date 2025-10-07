// 8:35 ~
function solution(menu, order, k) {
    const timeArr = Array(10000).fill(0);
    let orderIndex = 0;
    let answer = 0;
    let mustWait = 0;

    while (orderIndex < order.length)
    {
        let i = 0;

        let startTime = k * orderIndex;
        mustWait += menu[order[orderIndex]];
        // console.log(startTime, mustWait, menu[order[orderIndex]]);
        while (startTime + i < mustWait)
        {
            timeArr[startTime + i]++;
            if (answer < timeArr[startTime + i])
                answer = timeArr[startTime + i];
            i++;
        }
        orderIndex++;
        // console.log(timeArr);

    }
    return answer;
}

solution([5, 12, 30],	[1, 2, 0, 1], 10);

// 0 ~ 12
// 10 ~ 40
// 20 ~ 25
// 30 ~ 42