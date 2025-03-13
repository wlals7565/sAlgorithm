#include <iostream>
#include <vector>
#include <set>
#include <queue>
#include <algorithm>

using namespace std;
const int dx[4] = { 1,0,-1,0 };
const int dy[4] = { 0,1,0,-1 };



static void BFS(vector<vector<int>>& array, set<pair<int, int>>& visited, int x, int y, int max, int height) {
	queue<pair<int, int>> Q;
	Q.push({ y,x });
	while (!Q.empty()) {
		const auto index = Q.front();
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = index.second + dx[i];
			const int yIndex = index.first + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < max && yIndex < max && array[yIndex][xIndex] > height && visited.find({yIndex, xIndex}) == visited.end()) {
				Q.push({ yIndex, xIndex });
				visited.insert({ yIndex, xIndex });
			}
		}
	}
}


int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int N;
	cin >> N;

	//지도 완성
	vector<vector<int>> array;
	int num;
	for (int y = 0; y < N; y++) {
		vector<int> newArray;
		for (int x = 0; x < N; x++) {
			cin >> num;
			newArray.push_back(num);
		}
		array.push_back(newArray);
	}


	// 가장 많은 영역 구하기
	int max = 1;
	int height = 1;
	while (height <= 100) {
		set<pair<int, int>> visited;
		int count = 0;
		bool isDone = true;
		for (int y = 0; y < N; y++) {
			for (int x = 0; x < N; x++) {
				if (array[y][x] > height && visited.find({ y,x }) == visited.end()) {
					count++;
					isDone = false;
					BFS(array, visited, x, y, N, height);
				}
			}
		}
		if (count > max) {
			max = count;
		}
		if (isDone) {
			break;
		}
		height++;
	}

	cout << max;
	return 0;
}