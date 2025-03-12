function solution(target) {
	let array = [];
	for(let i=0; i<61; i++) {
		array[i] = 0;
	}
	for(let i=3; i>=1; i--){
		for(let j=1; j<=20; j++) {
			array[j*i] = i;
		}
	}
	array[50] = 1;

	let queue = [];
	let startIndex = 0;
	queue.push([target,0,0]);
	while(startIndex!=queue.length) {
		let front = queue[startIndex++];
		if(!array[front[0]] && front[0]>20 && front[0]<=40) {
			return [front[1]+2, front[2]+2]
		}
		if(array[front[0]]) {
			return [front[1]+1, front[2] + (array[front[0]]===1? 1:0)]
		}
		if(front[0]>=50 && front[0]<=300) {
			queue.push([front[0]-50, front[1]+1, front[2] + 1])
		}
		for(let i=60; i>0; i--) {
			if(array[i] && front[0]>i) {
				queue.push([front[0]-i, front[1]+1, front[2] + (array[i]==1? 1:0)])
				break;
			}
		}
	}
}