function solution(play_time, adv_time, logs) {
  let plus = 0;
  let minus = 0;
  let god = 0;

  // 시작 시각 종료 시각 저장 하는 맵 객체
  const endMap = new Map();
  const startMap = new Map();
  // 각 초단위로 계산
  const [playHH, playMM, playSS] = play_time.split(":");
  const [advHH, advMM, advSS] = adv_time.split(":");
  const playTimeAsSeconds =
    60 * 60 * Number(playHH) + 60 * Number(playMM) + Number(playSS);
  const advTimeAsSeconds =
    60 * 60 * Number(advHH) + 60 * Number(advMM) + Number(advSS);

  // logs형태를 초단위로 변환 [시작 시각 , 종료 시각]
  for (let i = 0; i < logs.length; i++) {
    const [startTime, endTime] = logs[i].split("-");
    const [startHH, startMM, startSS] = startTime.split(":");
    const [endHH, endMM, endSS] = endTime.split(":");
    const startTimeAsSeconds =
      60 * 60 * Number(startHH) + 60 * Number(startMM) + Number(startSS);
    const endTimeAsSeconds =
      60 * 60 * Number(endHH) + 60 * Number(endMM) + Number(endSS);
    logs[i] = [startTimeAsSeconds, endTimeAsSeconds];
  }
  logs.sort((a, b) => {
    return a[0] - b[0];
  });
  logs.push([0, 0]);
  // 여기서부터
  let arrayIndex = 0;
  let maxShowTime = 0;
  let showTime = 0;
  
  // 처음 시작부터 광고 시간까지 누적 상영시간 구하면서 가기
  for (let i = 0; i <= advTimeAsSeconds; i++) {
    showTime += plus - minus;
    if (showTime > maxShowTime) {
      maxShowTime = showTime;
    }
    while (logs[arrayIndex][0] === i) {
      if (startMap.has(logs[arrayIndex][0])) {
        startMap.set(
          logs[arrayIndex][0],
          startMap.get(logs[arrayIndex][0]) + 1
        );
        plus++;
      } else {
        startMap.set(logs[arrayIndex][0], 1);
        plus++;
      }
      if (endMap.has(logs[arrayIndex][1])) {
        endMap.set(logs[arrayIndex][1], endMap.get(logs[arrayIndex][1]) + 1);
      } else {
        endMap.set(logs[arrayIndex][1], 1);
      }
      arrayIndex++;
    }
    if (endMap.has(i)) {
      minus += endMap.get(i);
    }
  }
  god += startMap.get(0) || 0;
  let startTime = 1;
  let maxShowAdvStartTime = 0;
  // 광고 시간 완전히 채웠을 경우
  for (
    let advEndTime = advTimeAsSeconds + 1;
    advEndTime <= playTimeAsSeconds;
    advEndTime++, startTime++
  ) {
    // 이거 잘못된거 같은데 여기 잘못이 맞다. showTime제대로 계산 못하고 있다.
    showTime += (plus - minus - god);
    if (showTime > maxShowTime) {
      maxShowTime = showTime;
      maxShowAdvStartTime = startTime;
    }
    while (logs[arrayIndex][0] === advEndTime) {
      if (startMap.has(logs[arrayIndex][0])) {
        startMap.set(
          logs[arrayIndex][0],
          startMap.get(logs[arrayIndex][0]) + 1
        );
        plus++;
      } else {
        startMap.set(logs[arrayIndex][0], 1);
        plus++;
      }
      if (endMap.has(logs[arrayIndex][1])) {
        endMap.set(logs[arrayIndex][1], endMap.get(logs[arrayIndex][1]) + 1);
      } else {
        endMap.set(logs[arrayIndex][1], 1);
      }
      arrayIndex++;
    }
    if (endMap.has(advEndTime)) {
      minus += endMap.get(advEndTime);
    }
    if (startMap.has(startTime)) {
      god += startMap.get(startTime);
    }
    if (endMap.has(startTime)) {
      god -= endMap.get(startTime);
    }
  }
  const advStartHH = Math.floor(maxShowAdvStartTime / 3600);
  const advStartMM = Math.floor((maxShowAdvStartTime - 3600 * advStartHH) / 60);
  const advStartSS = maxShowAdvStartTime - advStartHH * 3600 - advStartMM * 60;

  console.log(`${advStartHH}:${advStartMM}:${advStartSS}`);
  return `${String(advStartHH).padStart(2,'0')}:${String(advStartMM).padStart(2,'0')}:${String(advStartSS).padStart(2,'0')}`;
}
