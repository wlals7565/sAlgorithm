function solution(n, roads, sources, destination) {
  let result = [];
  let map = new Map()
  for(let i=0; i<roads.length; i++) {
    let startPointArray = map.get(roads[i][0])
    if(!startPointArray) {
      map.set(roads[i][0], [roads[i][1]])
    }
    else {
      startPointArray.push(roads[i][1])
    }
    startPointArray = map.get(roads[i][1])
    if(!startPointArray) {
      map.set(roads[i][1], [roads[i][0]])
    }
    else {
      startPointArray.push(roads[i][0])
    }
  }

  const val = bfs(destination, map)
  for(let i=0; i<sources.length; i++) {
    if(val.get(sources[i])===undefined) {
      result.push(-1)
    }
    else {
      result.push(val.get(sources[i]))
    }
  }

  return result
}

function bfs(start, map) {
  let index = 0;
  let queue = [[start, 0]]
  //let min = 500001
  let visited = new Set()
  visited.add(start)
  let resultMap = new Map();
  resultMap.set(start, 0)
  while(queue.length !== index) {

    const [front, length] = queue[index++];
    /*
    if(front === destination) {
      if(min>length) {
        min = length;
        break;
      }
    }
    */
    const destinationArray = map.get(front)
    for(let i=0; i<destinationArray?.length||0; i++) {
      if(visited.has(destinationArray[i])) {
        continue
      }
      else {
        queue.push([destinationArray[i], length+1])
        resultMap.set(destinationArray[i], length+1)
        visited.add(destinationArray[i])
      }
    }
  }
  return resultMap
}