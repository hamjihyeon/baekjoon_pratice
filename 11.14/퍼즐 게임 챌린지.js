function solution(diffs, times, limit) {
    let min = 1, max = 100000;
    
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let value = cal(mid, diffs, times, limit);
        
        if (value) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return min;
    
    function cal(level, diffs, times, limit) {
        let result = 0;
        
        for (let i = 0; i < diffs.length; i++) {
            if (level >= diffs[i]) {
                result += times[i];
                if (result > limit) {
                    return false;
                }
            } else {
                let count = diffs[i] - level;
                let amount = (times[i] + times[i - 1]) * count + times[i];
                
                result += amount;
                if (result > limit) {
                    return false;
                }
            }
        }
        if (result <= limit) {
            return true;
        } else {
            return false;
        }
    }
}