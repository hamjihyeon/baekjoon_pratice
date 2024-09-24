function solution(n) {
    var answer = n.toString(2).split(1).length
    
    while(true) {
        n++;
        if (answer === n.toString(2).split(1).length) {
            return n
        }
    }
    return answer;
}