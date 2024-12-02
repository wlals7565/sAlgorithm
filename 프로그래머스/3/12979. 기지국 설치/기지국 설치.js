function solution(n, stations, w) {
  const division = 1+2*w;
  let start = 1;
  let countOfStation = 0;
  let length;
  for(let i=0; i<stations.length; i++) {
    if(stations[i]-w<=start) {
      start = stations[i]+w+1;
    }
    else {
      length = stations[i]-w-start
      start = stations[i]+w+1;
      countOfStation += Math.ceil(length/division)
    }
  }
  if(start<n+1) {
    countOfStation += Math.ceil((n+1-start)/division)
  }
  return countOfStation
}
