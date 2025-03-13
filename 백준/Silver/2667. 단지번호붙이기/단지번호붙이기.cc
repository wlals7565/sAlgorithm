#include <iostream>
#include <vector>
#include <set>
#include <queue>
#include <algorithm>

using namespace std;
const int dx[4] = { 1,0,-1,0 };
const int dy[4] = { 0,1,0,-1 };



static int BFS(vector<vector<char>>& array, int x, int y, int max) {
	queue<pair<int, int>> Q;
	Q.push({ y,x });
	array[y][x] = 0;
	int size = 1;
	while (!Q.empty()) {
		const auto index = Q.front();
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = index.second + dx[i];
			const int yIndex = index.first + dy[i];
			if (yIndex >= 0 && xIndex >= 0 && xIndex < max && yIndex < max && array[yIndex][xIndex] == '1') {
				Q.push({ yIndex, xIndex });
				array[yIndex][xIndex] = 0;
				size++;
			}
		}
	}
	return size;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	// 지도 완성
	int N;
	cin >> N;
	vector<vector<char>> array;
	string str;
	for (int y = 0; y < N; y++) {
		vector<char> newArray;
		cin >> str;
		for (int x = 0; x < str.size(); x++) {
			newArray.push_back(str[x]);
		}
		array.push_back(newArray);
	}

	//지도 BFS 탐색
	int count = 0;
	vector<int> size;
	for (int y = 0; y < N; y++) {
		for (int x = 0; x < str.size(); x++) {
			if (array[y][x] == '1') {
				count++;
				size.push_back(BFS(array, x, y, N));
			}
		}
	}

	cout << count << "\n";
	sort(size.begin(), size.end());
	for (int i = 0; i < size.size(); i++) {
		cout << size[i] << "\n";
	}
	return 0;
}