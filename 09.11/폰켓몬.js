function solution(nums) {
    let answer = [];
    let max = nums.length / 2;
    
    for (let i = 0; i < nums.length; i++) {
        if (answer.length < max && !answer.includes(nums[i])) {
            answer.push(nums[i])
        }
    }
    return answer.length;
}