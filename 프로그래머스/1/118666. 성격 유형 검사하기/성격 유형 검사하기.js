function solution(survey, choices) {
  var answer = '';
  let map = new Map();
  map.set('R', 0);
  map.set('C', 0);
  map.set('J', 0);
  map.set('A', 0);
  let map2= new Map();
  map2.set(1, -3);
  map2.set(2, -2);
  map2.set(3, -1);
  map2.set(4, 0);
  map2.set(5, 1);
  map2.set(6, 2);
  map2.set(7, 3);
  for(let i=0; i<survey.length; i++){
    if(survey[i][0] =='A' || survey[i][0] == 'N'){
      if(survey[i][0] == 'N') {
        map.set('A', map.get('A')+map2.get(choices[i]))
      }
      else {
        map.set('A', map.get('A')-map2.get(choices[i]))
      }
    }
    else if(survey[i][0] =='C' || survey[i][0] == 'F'){
      if(survey[i][0] == 'F') {
        map.set('C', map.get('C')+map2.get(choices[i]))
      }
      else {
        map.set('C', map.get('C')-map2.get(choices[i]))
      }
    }
    else if(survey[i][0] =='J' || survey[i][0] == 'M'){
      if(survey[i][0] == 'M') {
        map.set('J', map.get('J')+map2.get(choices[i]))
      }
      else {
        map.set('J', map.get('J')-map2.get(choices[i]))
      }
    }
    else {
      if(survey[i][0] == 'T') {
        map.set('R', map.get('R')+map2.get(choices[i]))
      }
      else {
        map.set('R', map.get('R')-map2.get(choices[i]))
      }
    }
  }
  let arr = Array.from(map.values())
  if(arr[0]<0) {
    answer+= 'T'
  }
  else {
    answer += 'R'
  }
  if(arr[1]<0) {
    answer+= 'F'
  }
  else {
    answer += 'C'
  }
  if(arr[2]<0) {
    answer+= 'M'
  }
  else {
    answer += 'J'
  }
  if(arr[3]<0) {
    answer+= 'N'
  }
  else {
    answer += 'A'
  }
  return answer;
}