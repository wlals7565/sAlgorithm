function solution(n) {
    let str = `${n}`;
    let arr = [];
    for(let i=0; i<str.length; i++){
        arr[i]= parseInt(str[i]);
    }
    arr.sort().reverse();
    let str2 = "";
    for(let i=0; i<str.length; i++){
        str2 += `${arr[i]}`;
    }
    str2 = parseInt(str2);
    return str2;
}