// 콘이 무사히 셔틀을 타고 사무실로 갈 수 있는 제일 늦은 도착 시각을 출력한다. 도착 시각은 HH:MM 형식이며, 00:00에서 23:59 사이의 값이 될 수 있다
function solution(n, t, m, timetable) {
  // 일단 크루들 시간순대로 나열하기
  timetable.sort((a,b) => {
    let [aHour, aMinute] = a.split(':')
    let [bHour, bMinute] = b.split(':')
    if(aHour!=bHour) {
      return Number(aHour)-Number(bHour)
    }
    else {
      return Number(aMinute)-Number(bMinute)
    }
  })

  //각 배차 시간에 따라 인원 확인하기
  time = 9*60;
  let crewIndex = 0;
  let eachRider = [];
  for(let i=0; i<n; i++) {
    let inTheBus = 0;
    let riderArray = [];
    for(inTheBus; timetable[crewIndex] && toMinute(timetable[crewIndex]) <= time && inTheBus<m; inTheBus++) {
      riderArray.push(timetable[crewIndex])
      crewIndex++
    }
    eachRider.push(riderArray)
    time += t;
  }

  if(eachRider[eachRider.length-1].length < m) {
    let result = 60*9 + t*(n-1)
    return `${Math.floor(result/60).toString().padStart(2,0)}:${(result%60).toString().padStart(2,0)}`
  }
  else {
    let result = toMinute(eachRider[eachRider.length-1].pop()) - 1
    return `${Math.floor(result/60).toString().padStart(2,0)}:${(result%60).toString().padStart(2,0)}`
    
  }
}

const toMinute = (HHMM) => {
  const [hour, minute] = HHMM.split(':')
  return Number(hour)*60 + Number(minute)
}

