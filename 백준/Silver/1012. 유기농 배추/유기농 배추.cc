#include <iostream>
#include <queue>
#include <vector>
#include <set>

using namespace std;

static void BFS(vector<vector<int>>& array, int x, int y, int maxX, int maxY) {
	const int dx[4] = { 1, 0, -1, 0 };
	const int dy[4] = { 0 ,1,0,-1 };
	queue<pair<int, int>> Q;
	array[y][x] = 0;
	Q.push({ y,x });
	while (!Q.empty()) {
		const auto index = Q.front();
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = index.second + dx[i];
			const int yIndex = index.first + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY && array[yIndex][xIndex] == 1) {
				Q.push({ yIndex, xIndex });
				array[yIndex][xIndex] = 0;
			}
		}
	}
	return;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int loopCount;
	cin >> loopCount;
	// 전체 반복
	for (int count = 0; count < loopCount; count++) {
		vector<vector<int>> array;
		// X,Y,배추 수
		int M, N, K;
		cin >> M >> N >> K;
		// 배열 만들기
		for (int i = 0; i < N; i++) {
			vector<int> newArray;
			for (int j = 0; j < M; j++) {
				newArray.push_back(0);
			}
			array.push_back(newArray);
		}
		int X, Y;
		// 배열에 배추 놓기
		for (int i = 0; i < K; i++) {
			cin >> X >> Y;
			array[Y][X] = 1;
		}

		// 각 배열 돌면서 최소 지렁이 찾기
		int result = 0;
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < M; j++) {
				if (array[i][j] == 1) {
					result++;
					BFS(array, j, i, M, N);
				}
			}
		}
		cout << result << "\n";
	}
}
