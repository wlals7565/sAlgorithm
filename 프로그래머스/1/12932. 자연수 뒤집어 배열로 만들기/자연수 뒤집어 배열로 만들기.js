function solution(n) {
    let str = `${n}`;
    let answer = [];
    let j = 0;
    for(let i=str.length-1; i>=0; i--){
        answer[j]= parseInt(str[i]);
        j++;
    }
    return answer;
}