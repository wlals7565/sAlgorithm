function solution(numbers) {
  let str = "";
  numbers.sort((a, b) => {
    let stra = a.toString();
    let strb = b.toString();
    stra = stra + stra + stra + stra;
    strb = strb + strb + strb + strb;
    stra = stra.slice(0, 4);
    strb = strb.slice(0, 4);
    return strb - stra;
  });
  for (let i = 0; i < numbers.length; i++) {
    str += numbers[i];
  }
  if (str[0] == "0") {
    return "0";
  }
  return str;
}
