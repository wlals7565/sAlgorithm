function solution(phone_book) {
  let set = new Set();
  let str;
  let isFalse = true;
  phone_book.sort((a,b)=>{return a.length-b.length})
  console.log(phone_book)
  point: for (let i = 0; i < phone_book.length; i++) {
    str = "";
    for (let j = 0; j < phone_book[i].length; j++) {
      str += phone_book[i][j];
      if (set.has(str)) {
        isFalse = false;
        break point;
      }
    }
    set.add(phone_book[i]);
  }
  return isFalse;
}