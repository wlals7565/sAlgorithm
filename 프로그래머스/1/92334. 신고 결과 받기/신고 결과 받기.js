function solution(id_list, report, k) {
  var answer = [];
  let map = new Map();
  let arr = [];
  let obj = {};
  for (let i = 0; i < id_list.length; i++) {
    map.set(id_list[i], new Set());
    obj[id_list[i]] = 0;
  }
  for (let i = 0; i < report.length; i++) {
    arr = report[i].split(" ");
    map.get(arr[1]).add(arr[0]);
  }
  let array = Array.from(map.values());
  for (let i = 0; i < array.length; i++) {
    if (array[i].size >= k) {
        array[i].forEach((user) => {obj[user]++});
    }
  }
  for (let i = 0; i < id_list.length; i++) {
    answer.push(obj[id_list[i]]);
  }
  return answer
}