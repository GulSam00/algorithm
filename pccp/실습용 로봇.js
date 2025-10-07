// 7:34 ~ 7:44

function solution(command) {
    const direction = [[0, 1], [1, 0], [0, -1],[-1, 0]];
    const answer = [0, 0];
    let direction_index = 0;
    let index = 0;
    while (command[index])
    {
        switch (command[index]) {
        case 'R':
        {
            if (direction_index === 3) direction_index = 0;
            else direction_index++; 
            break;
        }
        case 'L':
        {
            if (direction_index === 0) direction_index = 3;
            else direction_index--; 
            break;

        }
        case 'G':
        {
            const moving = direction[direction_index];
            answer[0] += moving[0];
            answer[1] += moving[1];
            break;

        }
        case 'B':
        {
            const moving = direction[direction_index];
            answer[0] -= moving[0];
            answer[1] -= moving[1];
            break;
        }
    }
        index++;
    }
    
    return answer;
}

console.log(solution("GRGRGRB"));