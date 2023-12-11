function solution(wallpaper) { //wallpaper은 1차원 배열 예시 [".#...", "..#..", "...#."]
    let ltx = 999;
    let lty = 999;
    let rbx = 0; // 1+
    let rby = 0; // 1+
    for(let i=0; i<wallpaper.length; i++){
      for(let j=0; j<wallpaper[i].length; j++){
        if(wallpaper[i][j]==='#'){
          if(ltx > i){
            ltx = i;
          }
          if(lty > j){
            lty = j;
          }
          if(rbx < i+1){
            rbx = i+1
          }
          if(rby < j+1){
            rby = j+1
          }
        }
      }
    }
    return [ltx,lty,rbx,rby]
}