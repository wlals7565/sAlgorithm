function solution(genres, plays) {
  // 인덱스가 고유 번호 재생 횟수 같으면 고유 번호 낮은애로
  // 일단 [종류, 횟수, 인덱스] 형식으로 만들고
  // 종류 기준으로 정렬하고
  // 종류를 유지한채 횟수로 정렬
  // [종류, 횟수, 인덱스] 뒤에서부터 앞으로 가면서 1순위 2순위 구하고 해쉬에 저장
  // 이후 [종류, 총횟수] 만들고
  // 총횟수 기준으로 정렬
  //

  // [종류, 횟수, 인덱스] 형식으로 만들기
  const arr1 = []
  for(let i=0; i<genres.length; i++) {
    arr1.push([genres[i], plays[i], i])
  }

  // 종류를 기준으로 정렬 및 횟수를 기준으로 정렬 오름차순
  arr1.sort((a,b)=> {
    if(a[0]===b[0]) {
      if(a[1]===b[1]) {
        return b[2]-a[2]
      }
      else return a[1]-b[1]
    }
    else {
      if(a[0]<b[0]) {
        return -1
      }
      else {
        return 1
      }
    }
  })
  // 최댓 횟수 인덱스 저장기
  const map = new Map()
  let totalCountOfPlay;
  // [종류, 총횟수]
  const arr2 = []
  let genreArray = []
  for(let i=arr1.length-1;i>=0; i--) {
    if(!map.get(arr1[i][0])) {
      map.set(arr1[i][0], 1)
      if(arr1[i+1]){
        arr2.push([arr1[i+1][0], totalCountOfPlay])
        map.set(arr1[i+1][0], genreArray)
      }
      genreArray = [arr1[i][2]]
      totalCountOfPlay = arr1[i][1];
      
    }
    else {
      totalCountOfPlay += arr1[i][1]
      if(genreArray.length <2 ) {
        genreArray.push(arr1[i][2])
      }
    }
  }
  arr2.push([arr1[0][0], totalCountOfPlay])
  map.set(arr1[0][0], genreArray)
  arr2.sort((a,b)=> a[1]-b[1]);

  const answer = []
  for(let i = arr2.length-1;i>=0;i--) {
    console.log(map.get(arr2[i][0]))
    answer.push(...map.get(arr2[i][0]))
  }

  return answer;
}
