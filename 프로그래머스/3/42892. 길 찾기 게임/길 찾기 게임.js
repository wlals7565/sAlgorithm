class BinaryTree {
  root = undefined;
  preTravelArray = []
  postTravelArray = []

  insert(val) {
    if (!this.root) {
      this.root = new BinaryTreeNode(val);
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.data[0] > val[0]) {
        if (currentNode.leftChild === undefined) {
          currentNode.leftChild = new BinaryTreeNode(val);
          return;
        }
        currentNode = currentNode.leftChild;
      }
      if (currentNode.data[0] < val[0]) {
        if (currentNode.rightChild === undefined) {
          currentNode.rightChild = new BinaryTreeNode(val);
          return;
        }
        currentNode = currentNode.rightChild;
      }
    }
  }

  preTravel(node = this.root, array= this.preTravelArray) {
    array.push(node.data)
    if(node.leftChild) {
      this.preTravel(node.leftChild)
    }
    if(node.rightChild) {
      this.preTravel(node.rightChild)
    }
  }

  postTravel(node = this.root, array = this.postTravelArray) {
    if(node.leftChild) {
      this.postTravel(node.leftChild)
    }
    if(node.rightChild) {
      this.postTravel(node.rightChild)
    }
    array.push(node.data)
  }
}

class BinaryTreeNode {
  data = undefined;
  leftChild = undefined;
  rightChild = undefined;

  constructor(val) {
    this.data = val;
  }

  setLeftChild(node) {
    this.leftChild = node;
  }

  setRightChild(node) {
    this.rightChild = node;
  }
}

// [x축 좌표, y축 좌표]
function solution(nodeinfo) {
  const map = new Map();
  for (let i = 0; i < nodeinfo.length; i++) {
    map.set(`${nodeinfo[i][0]}:${nodeinfo[i][1]}`, i + 1);
  }
  nodeinfo.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });
  const binaryTree = new BinaryTree()
  for(let i=0; i<nodeinfo.length; i++) {
    binaryTree.insert(nodeinfo[i])
  }
  binaryTree.preTravel()
  binaryTree.postTravel()
  const resutOfPreTravel = []
  const resutOfPostTravel = []
  for(let i =0; i <binaryTree.preTravelArray.length; i++) {
    resutOfPreTravel.push(map.get(`${binaryTree.preTravelArray[i][0]}:${binaryTree.preTravelArray[i][1]}`))
  }
  for(let i =0; i <binaryTree.postTravelArray.length; i++) {
    resutOfPostTravel.push(map.get(`${binaryTree.postTravelArray[i][0]}:${binaryTree.postTravelArray[i][1]}`))
  }
  return [resutOfPreTravel,resutOfPostTravel]
}