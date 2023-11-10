function solution(arr) {
    let answer = [];
    const minValue = Math.min(...arr); // 배열의 최솟값 계산

    if (arr.length === 1) {
        answer.push(-1);
    } else {
        answer = arr.filter((num) => num !== minValue);
    }

    return answer;
}
