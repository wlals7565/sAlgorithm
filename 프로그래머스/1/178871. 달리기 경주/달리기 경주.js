function solution(players, callings) {
    let map = new Map();
    let index;
    let temp;
    for(let i=0; i<players.length; i++){
      map.set(players[i], i);
    }
    for(let i=0; i<callings.length; i++){
      index = map.get(callings[i]);
      temp = players[index];
      players[index] = players[index-1];
      players[index-1] = temp;
      map.set(players[index], index)
      map.set(players[index-1], index-1)
    }
    return players;
}