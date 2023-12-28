function solution(cacheSize, cities) {
  let set = new Set();
  let time = 0;
  for(let i=0; i<cities.length; i++){
    cities[i] = cities[i].toLowerCase();
    if(set.has(cities[i].toLowerCase())){
      time++;
      set.delete(cities[i]);
      set.add(cities[i])
    }
    else{
      time+=5;
      if(set.size<cacheSize){
        set.add(cities[i])
      }
      else{
        if(cacheSize==0){
          continue;
        }
        set.delete((Array.from(set.values()))[0])
        set.add(cities[i]);
      }
    }
  }
  return time;
  //큐 이용할래
  //큐 안될거 같아
  // 셋은 이용해야해
}