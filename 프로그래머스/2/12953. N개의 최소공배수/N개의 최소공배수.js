function gdc(a, b){
  return b ? gdc(b, a%b) : a;
}

function solution(arr) {
  for(let i=0; i<arr.length-1; i++){
    arr[i+1] = arr[i]*arr[i+1]/gdc(arr[i],arr[i+1]);
  }
  console.log(arr);
  return arr[arr.length-1];
}