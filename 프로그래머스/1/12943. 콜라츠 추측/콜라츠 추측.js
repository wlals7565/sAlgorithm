function solution(num) {
    let answer = 0;
    let n = num;
    while (n != 1 && answer<500){
        if(n%2==0){
            n=n/2;
            answer++;
        }
        else {
            n=n*3+1;
            answer++;
        }
    }
    if(answer==500){
        answer= -1;
    }
    return answer;
}