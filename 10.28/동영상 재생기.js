function toMinutes(time) {
    const [hour, minute] = time.split(':');
    return Number(hour) * 60 + Number(minute);
}

function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let mPos = toMinutes(pos);
    const mVideo = toMinutes(video_len);
    const mStart = toMinutes(op_start);
    const mEnd = toMinutes(op_end);
    
    if (mPos >= mStart && mPos <= mEnd) {
        mPos = mEnd;
    }
    
    commands.forEach((p) => {
        mPos += p === 'prev' ? -10 : 10;
        
        if (mPos < 0) {
            mPos = 0;
        }
        if (mPos > mVideo) {
            mPos = mVideo
        }
        if (mPos >= mStart && mPos <= mEnd) {
            mPos = mEnd;
        }
    });
    
    const hour = Math.floor(mPos / 60) + '';
    const minute = (mPos % 60) + '';
    
    return `${hour.padStart(2,'0')}:${minute.padStart(2,'0')}`;
}