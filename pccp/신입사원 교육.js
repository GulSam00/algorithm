// 7:45 ~ 8:30 포기
// function solution(ability, number) {
//     ability.sort((a, b) => a - b);
//     let i = 0;
//     let min1 = 0;
//     let min2 = 1;

//     while (i < number)
//     {
//         const sum = ability[min1 % ability.length] + ability[min2 % ability.length];
//         ability[min1 % ability.length] = sum;
//         ability[min2 % ability.length] = sum;
        
//         if (ability[min1 % ability.length] >= ability[min2 + 1 % ability.length])
//         {
//             min1 = min2 + 1;
//         }
//         if (ability[min2 % ability.length] >= ability[min1 % ability.length])
//         {
//             min2 = min1 + 1;
//         }

//         i++;
//     }
//     return (ability.reduce((cur, prev) => cur + prev));
// }

// function solution(ability, number) {
//     ability.sort((a, b) => a - b);
//     let i = 0;
//     let min1 ;
//     let min2;
//     let prevSum = 101;

//     while (i < number)
//     {
//         min1 = 0;
//         min2 = 1;
//         while (min1 < ability.length && ability[min1] > prevSum)
//             min1++;
//         while (min2 < ability.length && ability[min2] > prevSum)
//             min2++;
//         console.log("cur : ",min1, min2, prevSum);
//         prevSum = ability[min1] + ability[min2];
//         ability[min1] = prevSum;
//         ability[min2] = prevSum;
//         i++;
//         console.log(ability);
//     }
//     // console.log(ability.reduce((cur, prev) => cur + prev));
//     return (ability.reduce((cur, prev) => cur + prev));
// }

function solution(ability, number) {
    // 최소 힙을 사용하기 위해 배열을 정렬한다.
    const minHeap = ability.sort((a, b) => a - b);
    console.log(" minHeap ",minHeap);
    
    for (let i = 0; i < number; i++) {
        // 가장 작은 두 값을 꺼내서 합친다.
        let first = minHeap.shift();
        let second = minHeap.shift();
        
        let newAbility = first + second;
        
        // 합친 두 값을 다시 힙에 넣어준다.
        minHeap.push(newAbility, newAbility);
        
        // 배열을 다시 정렬한다.
        minHeap.sort((a, b) => a - b);
        console.log(" minHeap ",minHeap);

    }
    
    // 모든 능력치의 합을 반환한다.
    return minHeap.reduce((acc, cur) => acc + cur, 0);
}

// 테스트 예시
console.log(solution([10, 3, 7, 2], 2));  // 37
console.log(solution([1, 2, 3, 4], 3));   // 26


console.log(solution(	[1,2,3,4,5,6,6,7,8,8,9,9,1], 4));
