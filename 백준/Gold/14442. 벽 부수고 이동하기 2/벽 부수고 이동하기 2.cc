#include <iostream>
#include <queue>
#include <stack>
#include <map>

using namespace std;

const int dx[4] = { 1,0,-1,0 };
const int dy[4] = { 0,1,0,-1 };

int BFS(vector<vector<int>>& array, int maxX, int maxY, int crash) {
	// 일단 좌표는 저장해야 한다. 그리고 { 움직인 횟수, 남은 벽 꺠기 횟수} 를 저장한다.
	queue < pair<pair<int, int>, pair<int, int>>> Q;
	// 0은 지나갈 수 있는 곳 양수는 지나간 곳 그리고 숫자의 의미는 남은 벽 꺠기 횟수가 몇일때 지나갔는지
	// 지나간 곳 중에 벽인 곳과 벽이 아닌 곳은 어떻게 구분 할 것인지?
	// 지금 생각 난 것은 -와 플러스 구분
	// 0은 지나갈 수 있는길
	// -1은 지나갈 수 없는길
	Q.push({ {0,0},{1, crash + 1} });
	array[0][0] = crash + 1;
	while (!Q.empty()) {
		const auto index = Q.front().first;
		const auto move = Q.front().second;
		if (index.first == maxY - 1 && index.second == maxX - 1) {
			return move.first;
		}
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = index.second + dx[i];
			const int yIndex = index.first + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY) {
				// 아무도 안 지나가고 지나갈 수 있는 곳
				if (array[yIndex][xIndex] == 0) {
					Q.push({ {yIndex, xIndex}, {move.first + 1, move.second} });
					array[yIndex][xIndex] = move.second;
				}
				// 이미 지나갔고 지나갈 수 있는 곳
				else if (array[yIndex][xIndex] > 0 && array[yIndex][xIndex] < move.second) {
					Q.push({ {yIndex, xIndex}, {move.first + 1, move.second} });
					array[yIndex][xIndex] = move.second;
				}
				// 벽으로 막혀있고 지나가지 않은 곳
				else if (array[yIndex][xIndex] == -1 && move.second > 1) {
					Q.push({ {yIndex, xIndex}, {move.first + 1, move.second - 1} });
					array[yIndex][xIndex] = (move.second) * -1;
				}
				// 벽으로 막혀있고 지나간 곳
				else if (array[yIndex][xIndex] < -1 && move.second>1 && move.second * -1 < array[yIndex][xIndex]) {
					Q.push({ {yIndex, xIndex}, {move.first + 1, move.second - 1} });
					array[yIndex][xIndex] = (move.second) * -1;
				}

			}
		}

	}
	return -1;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	// 값 받기
	int N, M, K;
	cin >> N >> M >> K;
	string str;

	// 지도 완성
	// -1이 벽이 있는 곳
	vector<vector<int>> array;
	for (int i = 0; i < N; i++) {
		cin >> str;
		vector<int> newArray;
		for (int j = 0; j < str.size(); j++) {
			const char strNum = str[j];
			newArray.push_back(atoi(&strNum) * -1);
		}
		array.push_back(newArray);
	}

	const int result = BFS(array, M, N, K);
	cout << result;

	return 0;
}
