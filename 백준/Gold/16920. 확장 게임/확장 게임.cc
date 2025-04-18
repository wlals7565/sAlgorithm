#include <iostream>
#include <vector>
#include <queue>

using namespace std;

const int dx[4] = { 1,0,-1,0 };
const int dy[4] = { 0,1,0,-1 };

//  Si칸 만큼 이동할 수 있는 모든 칸에 성을 동시에 만든다. 모든 방향이라네
// 이 방식대로 하면 터질텐데 시간 복잡도가 너무 커지는데
// 벽을 뛰어 넘는 이동도 불가능한가?
void BFS(vector<vector<int>>& array, queue<pair<int, int>>& q, int* playerArray, int maxX, int maxY) {
	while (!q.empty()) {
		const auto index = q.front();
		int move = playerArray[array[index.first][index.second]];
		q.pop();
		// cout << index.second << index.first << move << "\n";
		// 논리를 세워봐 좀
		// 일단 큐를 만들고 무브만큼 움직일 때 뉴 큐에 넣는다.
		// BFS확장을 개별적으로 해서 문제가 생겼다 한번에 큐로 넣어야 한다 어떻게?
		queue<pair<pair<int, int>,int>> newQ;
		newQ.push({ index, move });
		while (!q.empty() && array[newQ.front().first.first][newQ.front().first.second] == array[q.front().first][q.front().second]) {
			newQ.push({ q.front() , move });
			q.pop();
		}
		while (!newQ.empty()) {
			const auto index = newQ.front().first;
			const int move = newQ.front().second;
			if (move == 0) {
				break;
			}
			newQ.pop();
			for (int i = 0; i < 4; i++) {
				const int xIndex = index.second + dx[i];
				const int yIndex = index.first + dy[i];
				if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY && array[yIndex][xIndex] == 0) {
					newQ.push({ { yIndex, xIndex }, move - 1 });
					array[yIndex][xIndex] = array[index.first][index.second];
				}
			}
		}
		while (!newQ.empty()) {
			q.push(newQ.front().first);
			newQ.pop();
		}
	}
	return;
}




int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int N, M, P;
	cin >> N >> M >> P;
	int playerArray[10] = { 0, };

	vector<vector<int>> array;
	for (int i = 1; i <= P; i++) {
		cin >> playerArray[i];
	}

	// 지도 완성
	char ch;
	for (int i = 0; i < N; i++) {
		vector<int> newArray;
		for (int j = 0; j < M; j++) {
			cin >> ch;
			if (ch == '.') {
				newArray.push_back(0);
				continue;
			}
			else if (ch == '#') {
				newArray.push_back(-1);
				continue;
			}
			newArray.push_back(atoi(&ch));
		}
		array.push_back(newArray);
	}

	// 지도 확인
	// 완료
	/*
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			cout << array[i][j];
		}
		cout << "\n";
	}
	*/

	// 벡터에 모든 플레이어 집어 넣고 정렬을 해야 한다.
	// 그냥 대충 할까
	queue<pair<int, int>> q;

	for (int p = 0; p < P; p++) {
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < M; j++) {
				if (array[i][j] == p + 1) {
					q.push({ i,j });
				}
			}
		}
	}

	BFS(array, q, playerArray, M, N);

	int countArray[10] = { 0, };

	// 숫자세기
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			if (array[i][j]>0) {
				countArray[array[i][j]]++;
			}
		}
	}

	// 숫자출력
	for (int i = 1; i < 10; i++) {
		if (countArray[i]>0) {
			cout << countArray[i] << " ";
		}
		else {
			break;
		}
	}


	return 0;
}
