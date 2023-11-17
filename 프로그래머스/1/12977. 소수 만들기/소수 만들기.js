function solution(nums) {
  var answer = 0;
  let temp;
  let Is;
  for(let i=0; i<nums.length-2;i++){
    for(let j=i+1; j<nums.length-1; j++){
      for(let k=j+1; k<nums.length; k++){
        temp = nums[i]+nums[j]+nums[k];
        Is = true;
        for(let start = 2; start<temp; start++){
          if(temp%start==0){
            Is =false;
            break;
          }
        }
        if(Is==true){
          answer++;
        }
      }
    }
  }
  return answer;
}