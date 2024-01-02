let count= 0;
function heapify(array, index){
  let temp;
  if(array[index*2]==undefined && array[index*2+1]==undefined){
    return
  }
  else if(array[index*2]!=undefined && array[index*2+1]==undefined){
    if(array[index]>array[index*2]){
      temp = array[index];
      array[index] = array[index*2];
      array[index*2] = temp;
      heapify(array, index*2);
    }
  }
  else{
    if(array[index*2]<array[index*2+1]){
      if(array[index]>array[index*2]){
        temp = array[index];
        array[index] = array[index*2]
        array[index*2] = temp;
        heapify(array, index*2)
      }
      else{
        return
      }
    }
    else {
      if(array[index]>array[index*2+1]){
        temp = array[index];
        array[index] = array[index*2+1]
        array[index*2+1] = temp;
        heapify(array, index*2+1)
      }
      else{
        return
      }
    }
  }
}

function solution(scoville, K) {
  let heap  = [0].concat(scoville)
  for(let i=heap.length-1; i>=1; i--){
    heapify(heap, i);
  }
  let mult;
  while(heap.length>2 && heap[1]<K){
    mult = heap[1];
    heap[1] = heap.pop();
    heapify(heap, 1);
    mult = mult + heap[1]*2;
    heap[1] = mult
    heapify(heap, 1);
    count++;
  }
  if(heap[1]<K){
    return -1
  }
  console.log(heap)
  return count;
}