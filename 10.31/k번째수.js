function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        let select = array.slice(commands[i][0] - 1, commands[i][1]);
        select.sort((a,b) => a - b)
        answer.push(select[commands[i][2] - 1])
    }
    
    return answer;
}