function solution(number, limit, power) {
  let temp;
  let arr = [];
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    temp = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        temp+=2;
      }
    }
    if(Math.sqrt(i)==Math.floor(Math.sqrt(i))){
      temp--;
    }
    if (temp > limit) {
      arr.push(power);
    } else {
      arr.push(temp);
    }
  }
  for(let i=0; i<arr.length; i++){
    sum+= arr[i];
  }
  return sum;
}
