function solution(today, terms, privacies) {
  var answer = [];
  let arr = [];
  let map = new Map();
  terms = terms.map((term) =>  { return term.split(" ")})
  for (let i = 0; i < terms.length; i++) {
    map.set(terms[i][0], terms[i][1]);
  }
  let nowday = new Date(today);
  let dayandterm;
  let day;
  for (let i = 0; i < privacies.length; i++) {
    dayandterm = privacies[i].split(" ");
    day = new Date(dayandterm[0]);
    day.setMonth(day.getMonth() + parseInt(map.get(dayandterm[1])));
    answer.push(day);
  }
  for (let i = 0; i < answer.length; i++) {
    if (nowday >= answer[i]) {
      arr.push(i+1);
    }
  }
  return arr;
}