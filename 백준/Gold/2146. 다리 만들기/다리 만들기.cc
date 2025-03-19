#include <iostream>
#include <vector>
#include <set>
#include <queue>

using namespace std;
const int dx[4] = { 1,0,-1,0, };
const int dy[4] = { 0,1,0,-1 };

static int BFS(vector<vector<int>>& array, int x, int y, int max, int start) {
	queue<pair<int, int>> Q;
	Q.push({ y,x });
	array[y][x] = start;
	while (!Q.empty()) {
		const auto index = Q.front();
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = index.second + dx[i];
			const int yIndex = index.first + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < max && yIndex < max && array[yIndex][xIndex] == 1) {
				array[yIndex][xIndex] = start;
				Q.push({ yIndex, xIndex });
			}
		}
	}

	return 0;
}

static int BFS_search(vector<vector<int>>& array, int x, int y, int max, int start) {
	queue<pair<pair<int, int>, int>> Q;
	Q.push({ { y,x },0 });
	set<pair<int, int>> S;
	S.insert({ y,x });
	while (!Q.empty()) {
		const auto index = Q.front().first;
		const int count = Q.front().second;
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = index.second + dx[i];
			const int yIndex = index.first + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < max && yIndex < max && array[yIndex][xIndex] != start && (S.find({ yIndex, xIndex }) == S.end())) {
				if (array[yIndex][xIndex]) {
					return count;
				}
				S.insert({ yIndex, xIndex });
				Q.push({ { yIndex, xIndex }, count + 1 });
			}
		}
	}
	return 0;
}


int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	vector<vector<int>> array;

	int N;
	cin >> N;
	int num;

	// 1. 지도 완성하기
	for (int i = 0; i < N; i++) {
		vector<int> newArray;
		for (int j = 0; j < N; j++) {
			cin >> num;
			newArray.push_back(num);
		}
		array.push_back(newArray);
	}

	int min = INT32_MAX;

	// 2. 지도의 각 섬 구분하기
	int start = 2;
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			if (array[i][j] == 1) {
				BFS(array, j, i, N, start);
				start++;
			}
		}
	}

	/*
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			cout << array[i][j];
		}
		cout << "\n";
	}
	*/

	// 3. 시작해보기
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			if (array[i][j] != 0) {
				int count = 0;
				for (int k = 0; k < 4; k++) {
					const int xIndex = j + dx[k];
					const int yIndex = i + dy[k];
					if (xIndex >= 0 && yIndex >= 0 && xIndex < N && yIndex < N && array[yIndex][xIndex] != 0) {
						count++;
					}
					else if (xIndex < 0 || yIndex < 0 || xIndex >= N || yIndex >= N) {
						count++;
					}
				}
				if (count != 4) {
					int result = BFS_search(array, j, i, N, array[i][j]);
					if (result != 0 && result < min) {
						min = result;
					}
				}
			}
		}
	}
	cout << min;
	return 0;
}