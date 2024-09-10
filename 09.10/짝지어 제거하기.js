function solution(s)
{
    var answer = -1;
    let list = [];

    for (let i = 0; i < s.length; i++) {
        if (list[list.length - 1] === s[i]) {
            list.pop();
        } else {
            list.push(s[i]);
        }
    }
    
    return !list.length? 1 : 0;
}