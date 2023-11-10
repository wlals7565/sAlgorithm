function solution(x) {
    let str = `${x}`;
    let sum = 0;
    for(let i=0; i<str.length; i++){
        sum += +str[i];
    }
    let answer = false; 
    if(x%sum==0){
     answer= true;
    }
    return answer;
}