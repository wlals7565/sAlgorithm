function solution(numbers) {
  let result = [];
  for(let i=0; i<numbers.length; i++){
    if(Math.log2(numbers[i]+1)==Math.floor(Math.log2(numbers[i]+1))){
      result.push(Math.ceil((numbers[i]+1)/2)+numbers[i])
    }
    else{
      let count = 0;
      let number = numbers[i]
      while(number%2 != 0){
        number = Math.floor(number/2)
        count++;
      }
      result.push(numbers[i]+2**count-Math.floor((2**count)/2));
    }
  }
  return result;
}