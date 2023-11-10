function solution(n) {
    let num = Math.floor(Math.sqrt(n));
    if(num**2 == n){
        answer = (num+1)**2;
    }
    else{
        answer = -1
    }
    return answer;
}