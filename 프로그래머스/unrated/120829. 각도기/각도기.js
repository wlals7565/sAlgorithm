function solution(angle) {
    let answer = 0;
    while(angle>0){
        answer+=2;
        angle-=90;
    }
    if(angle!=0){
        answer-=1;
    }
    return answer;
}