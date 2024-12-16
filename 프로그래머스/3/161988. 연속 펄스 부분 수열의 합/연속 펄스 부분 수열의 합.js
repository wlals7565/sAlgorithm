function solution(sequence) {
  let arr1 = sequence.map((val, index) => {
    if(index%2 ===0) {
      return -val
    }
    return val
  })

  let sum = 0;
  let isPositive = true;
  let arr2 = [];
  for(let i=0; i<=arr1.length; i++) {
    if(arr1.length == i) {
      arr2.push(sum)
      break;
    }
    if(arr1[i]>=0) {
      if(!isPositive) {
        arr2.push(sum);
        sum = 0;
      }
      sum += arr1[i]
      isPositive= true
    }
    else {
      if(isPositive) {
        arr2.push(sum)
        sum = 0;
      }
      sum += arr1[i]
      isPositive = false
    }
  }

  let max = -100001;
  sum = 0;
  for(let i=0; i<arr2.length; i++) {
    sum+= arr2[i]
    if(sum>max) {
      max = sum
    }
    else if(sum<0) {
      sum = 0;
    }
    
  }
  
  sum = 0;
  let min = -100001;
  for(let i=0; i<arr2.length; i++) {
    sum+= (arr2[i]*-1)
    if(sum>min) {
      min = sum
    }
    else if(sum<0) {
      sum = 0;
    }
    
  }
  
  console.log(arr2)
  return Math.max(min,max)
}