function solution(bridge_length, weight, truck_weights) {
  let queue = [];
  let sum = 0;
  let time = 0;
  let Tindex = 0;
  let Qindex = 0;
  for(let i=0; i<bridge_length-1; i++){
    queue.push(0);
  }
  queue.push(truck_weights[Tindex++])
  sum+=truck_weights[0]
  time++;
  while(truck_weights.length !=  Tindex || sum != 0){
    sum -= queue[Qindex++];
    if(truck_weights[Tindex]<=weight-sum){
      sum+=truck_weights[Tindex]
      queue.push(truck_weights[Tindex++]);
    }
    else{
      queue.push(0);
    }
    time++;
  }
  return time;
}