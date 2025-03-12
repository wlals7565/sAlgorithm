#include <iostream>
#include <vector>
#include <set>
#include <queue>

using namespace std;
const int dx[8] = { -2,-2,-1,-1,1,1,2,2 };
const int dy[8] = { 1,-1,2,-2,2,-2,1,-1 };



static int BFS(int startX, int startY, int endX, int endY, int max) {
	queue < pair<pair<int, int>, int> > Q;
	Q.push({ {startX, startY}, 0 });
	set<pair<int, int>> S;
	S.insert({ startX,startY });
	while (!Q.empty()) {
		const auto index = Q.front().first;
		const int count = Q.front().second;
		if (index.first == endX && index.second == endY) {
			return count;
		}
		Q.pop();
		for (int i = 0; i < 8; i++) {
			const int xIndex = index.first + dx[i];
			const int yIndex = index.second + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < max && yIndex < max && (S.find({ xIndex,yIndex }) == S.end())) {
				Q.push({ {xIndex,yIndex},count + 1 });
				S.insert({ xIndex, yIndex });
			}
		}
	}
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int loopCount;
	cin >> loopCount;
	for (int i = 0; i < loopCount; i++) {
		int max;
		cin >> max;
		queue<pair<pair<int, int>, int>> Q;
		int startX, startY, endX, endY;
		cin >> startX >> startY;
		cin >> endX >> endY;
		int result = BFS(startX, startY, endX, endY, max);
		cout << result << "\n";
	}

	return 0;
}