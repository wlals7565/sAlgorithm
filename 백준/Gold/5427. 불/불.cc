#include <iostream>
#include <vector>
#include <set>
#include <queue>

using namespace std;
const int dx[4] = { 1,0,-1,0 };
const int dy[4] = { 0,1,0,-1 };



static int BFS(vector<vector<int>>& array, queue<pair<pair<int, int>, int>>& Q, int maxX, int maxY) {
	set<pair<int, int>> S;
	while (!Q.empty()) {
		const auto index = Q.front().first;
		const int count = Q.front().second;
		if ((index.first == 0 || index.second == 0 || index.first == maxY - 1 || index.second == maxX - 1) && count != -1) {
			return count+1;
		}
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = index.second + dx[i];
			const int yIndex = index.first + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY && array[yIndex][xIndex] == 0) {
				if (count == -1) {
					Q.push({ {yIndex, xIndex},-1 });
					array[yIndex][xIndex] = 1;
				}
				else {
					Q.push({ {yIndex, xIndex},count + 1 });
					array[yIndex][xIndex] = 1;
				}
			}
		}
	}
	return -1;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int loopCount;
	cin >> loopCount;
	for (int i = 0; i < loopCount; i++) {
		int x, y;
		cin >> x >> y;
		vector<vector<int>> array;
		queue<pair<pair<int, int>, int >> Q;
		pair<int, int> currentIndex;
		for (int j = 0; j < y; j++) {
			string str;
			cin >> str;
			vector<int> newArray;

			for (int k = 0; k < str.size(); k++) {
				if (str[k] == '#') {
					newArray.push_back(1);
				}
				else if (str[k] == '*') {
					newArray.push_back(1);
					Q.push({ { j,k },-1 });
				}
				else if (str[k] == '@') {
					newArray.push_back(1);
					currentIndex = { j,k };
				}
				else {
					newArray.push_back(0);
				}
			}
			array.push_back(newArray);
		}
		Q.push({ currentIndex,0 });
		const int result = BFS(array, Q, x, y);
		if (result != -1) {
			cout << result << "\n";
		}
		else {
			cout << "IMPOSSIBLE" << "\n";
		}
	}
}