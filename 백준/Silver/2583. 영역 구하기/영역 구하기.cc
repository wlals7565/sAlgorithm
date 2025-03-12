#include <iostream>
#include <vector>
#include <set>
#include <queue>
#include <algorithm>

using namespace std;
const int dx[4] = { 1,0,-1,0 };
const int dy[4] = { 0,1,0,-1 };



static int BFS(vector<vector<int>>& array, int x, int y, int maxX, int maxY) {
	queue<pair<int, int>> Q;
	Q.push({ y,x });
	array[y][x] = 1;
	int size = 1;
	while (!Q.empty()) {
		const auto index = Q.front();
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const auto xIndex = index.second + dx[i];
			const auto yIndex = index.first + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY && array[yIndex][xIndex] == 0) {
				Q.push({ yIndex, xIndex });
				array[yIndex][xIndex] = 1;
				size++;
			}
		}

	}
	return size;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	vector<vector<int>> array;
	int M, N;
	cin >> M >> N;
	for (int i = 0; i < M; i++) {
		vector<int> newArray;
		for (int j = 0; j < N; j++) {
			newArray.push_back(0);
		}
		array.push_back(newArray);
	}
	int K;
	cin >> K;
	for (int i = 0; i < K; i++) {
		int startX, startY, endX, endY;
		cin >> startX >> startY >> endX >> endY;
		for (int y = startY; y < endY; y++) {
			for (int x = startX; x < endX; x++) {
				array[y][x] = 1;
			}
		}
	}
	vector<int> size;
	int count = 0;
	for (int i = 0; i < M; i++) {
		for (int j = 0; j < N; j++) {
			if (array[i][j] == 0) {
				count++;
				size.push_back(BFS(array, j, i, N, M));
			}
		}
	}
	sort(size.begin(), size.end());
	cout << count << "\n";
	for (int i = 0; i < size.size(); i++) {
		cout << size[i] << " ";
	}

}