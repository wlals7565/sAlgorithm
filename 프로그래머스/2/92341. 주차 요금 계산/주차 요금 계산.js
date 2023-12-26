function solution(fees, records) {
  //fees 기본시간 기본요금 분단위 요금
  //records 시간 번호 입출차
  let obj = {}; //각 차량별 주차 총 시간
  //시간계산 해주자
  let map = new Map();
  for (let i = 0; i < records.length; i++) {
    let [time, number, INOUT] = records[i].split(" ");
    let [hour, minute] = time.split(":");
    if (INOUT == "IN") {
      map.set(number, parseInt(hour) * 60 + parseInt(minute));
    } else {
      if (!obj[number]) {
        obj[number] = parseInt(hour) * 60 + parseInt(minute) - map.get(number);
        map.delete(number);
      } else {
        obj[number] += parseInt(hour) * 60 + parseInt(minute) - map.get(number);
        map.delete(number);
      }
    }
  }

  let remainMap = Array.from(map.keys());
  for (let i = 0; i < remainMap.length; i++) {
    {
      if (!obj[remainMap[i]]) {
        obj[remainMap[i]] = 23 * 60 + 59 - map.get(remainMap[i]);
        map.delete(remainMap[i]);
      } else {
        obj[remainMap[i]] += 23 * 60 + 59 - map.get(remainMap[i]);
        map.delete(remainMap[i]);
      }
    }
  }

  //차량번호 작은애부터 함
  let set = new Set();
  for (let i = 0; i < records.length; i++) {
    set.add(records[i].split(" ")[1]);
  }
  let order = Array.from(set.values());
  order.sort((a, b) => {
    return a - b;
  });
  let time = [];

  //시간계산 차량번호 작은애부터
  let totalTime;
  let totalFees = [];
  let mock;
  let remain;
  for (let i = 0; i < order.length; i++) {
    totalTime = obj[order[i]];
    mock = 0;
    remain = 0;
    if (totalTime <= fees[0]) {
      totalFees.push(fees[1]);
      continue;
    } else {
      totalTime -= fees[0];
      mock = Math.floor(totalTime / fees[2]);
      remain = totalTime % fees[2];
      if (remain > 0) {
        mock++;
      }
      totalFees.push(fees[1] + mock * fees[3]);
    }
  }
  return totalFees;
}