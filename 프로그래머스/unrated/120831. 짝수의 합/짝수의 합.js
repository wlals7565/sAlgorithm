function solution(n) {
    if (n%2!=0){
        n-=1;
    };
    let answer = n/2*(2+n)/2;
    return answer;
}