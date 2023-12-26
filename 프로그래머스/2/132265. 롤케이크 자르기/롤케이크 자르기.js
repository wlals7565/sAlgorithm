function solution(topping) {
  let map1 = new Map();
  let map2 = new Map();
  let count = 0;
  for (let i = 0; i < topping.length; i++) {
    map1.set(topping[i], map1.get(topping[i]) + 1 || 1);
  }
  for (let i = 0; i < topping.length; i++) {
    map2.set(topping[i], map2.get(topping[i]) + 1 || 1);
    map1.set(topping[i], map1.get(topping[i]) - 1);
    if(map1.get(topping[i]) == 0){
      map1.delete(topping[i]);
    }
    if (map1.size == map2.size) {
      count++;
    }
  }
  return count;
}