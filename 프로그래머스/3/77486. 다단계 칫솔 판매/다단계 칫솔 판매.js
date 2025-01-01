const PER_PRICE = 100
// key(판매원)-value(추천인)
const map = new Map();
// 조직도 key(이름) - value(이익금)
const revenueMap = new Map();

function solution(enroll, referral, seller, amount) {
  // 초기 설정
  for(let i =0; i<enroll.length; i++) {
    map.set(enroll[i], referral[i])
    revenueMap.set(enroll[i], 0)
  }

  for(let i=0; i<seller.length; i++) {
    coumputeRevenueRecursive(seller[i], amount[i]*100)
  }
  const answer = [];
  for(let i=0; i<enroll.length; i++) {
    answer.push(revenueMap.get(enroll[i]))
  }
  return answer
}

const coumputeRevenueRecursive = (target, revenue) => {
  if(revenue === 0 || target === '-') {
    return
  }
  const previousRevenue = revenueMap.get(target)
  const share = Math.floor(revenue*0.1)
  revenueMap.set(target, previousRevenue+revenue-share)
  coumputeRevenueRecursive(map.get(target), share)
}