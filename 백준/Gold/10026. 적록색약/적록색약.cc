#include <iostream>
#include <vector>
#include <set>
#include <queue>

using namespace std;
const int dx[4] = { 1, 0, -1, 0 };
const int dy[4] = { 0, 1, 0, -1 };


static void BFS(vector<vector<char>>& array, char color, int x, int y, int maxX, int maxY, set<pair<int, int>>& S) {
	queue<pair<int, int>> Q;
	Q.push({ y,x });
	while (!Q.empty()) {
		const auto index = Q.front();
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = index.second + dx[i];
			const int yIndex = index.first + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY && color == array[yIndex][xIndex] && (S.find({ yIndex, xIndex }) == S.end())) {
				Q.push({ yIndex, xIndex });
				S.insert({ yIndex, xIndex });
			}
		}
	}

	return;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int N;
	cin >> N;
	vector<vector<char>> array;
	string str;
	for (int i = 0; i < N; i++) {
		vector<char> newArray;
		cin >> str;
		for (int j = 0; j < str.size(); j++) {
			newArray.push_back(str[j]);
		}
		array.push_back(newArray);
	}
	// 2번 확인해봐야 한다.
	for (int i = 0; i < 2; i++) {
		set<pair<int, int>> S;
		int count = 0;
		for (int y = 0; y < N; y++) {
			for (int x = 0; x < N; x++) {
				if (S.find({ y,x }) == S.end()) {
					count++;
					BFS(array, array[y][x], x, y, N, N, S);
					S.insert({ y,x });
				}
				if (array[y][x] == 'G') {
					array[y][x] = 'R';
				}
			}
		}
		cout << count << " ";
	}

	return 0;
}