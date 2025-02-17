let isRight = true;
function solution(numbers) {
  // 일단 수가 주어졌을 이진수로 나타내 보자.
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let binary = "";
    while (number) {
      let remain = number % 2;
      binary = remain + binary;
      number = Math.floor(number / 2);
    }
    // 포화 이진 트리로 만들어 줘야 한다.
    let length = binary.length;
    let height = 1;
    let bi = 2 ** height - 1;
    while (length > bi) {
      height++;
      bi = 2 ** height - 1;
    }
    for (let j = length; j < bi; j++) {
      binary = "0" + binary;
    }
    // 이제 트리를 정상적으로 이루는지 확인만 하면 된다.
    isRight = true;
    checkTree(binary, 0, binary.length, 1);
    if(isRight) {
      result.push(1)
    }
    else {
      result.push(0)
    }
  }
  return result;
}

const checkTree = (tree, start, end, parent) => {
  if (start > end || !isRight) {
    return 0;
  }
  let middle = Math.floor((start + end) / 2);
  if (Number(parent)) {
    checkTree(tree, start, middle - 1, tree[middle]);
    checkTree(tree, middle + 1, end, tree[middle]);
  } else {
    if (Number(tree[middle])) {
      isRight = false;
    } else {
      checkTree(tree, start, middle - 1, tree[middle]);
      checkTree(tree, middle + 1, end, tree[middle]);
    }
  }
};