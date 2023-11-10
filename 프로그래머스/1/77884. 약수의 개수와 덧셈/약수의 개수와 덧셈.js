function solution(left, right) {
    var answer = 0;
    let isEven;
    for(let i = left; i<=right; i++){
        isEven = 1;
        for(let j = 1; j<=i/2; j++){
            if(i%j==0){
                isEven+=1;
            }
        }
        if(isEven%2==0){
            answer+= i;
        }
        else{
            answer-=i;
        }
    }
    return answer;
}