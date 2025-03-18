#include <iostream>
#include <vector>
#include <set>
#include <queue>

using namespace std;
const int dx[4] = { 1,0,-1,0, };
const int dy[4] = { 0,1,0,-1 };

static int BFS(vector<vector<int>>& array, set<pair<int, int>>& S, int x, int y, int maxX, int maxY) {
	S.insert({ y,x });
	queue<pair<int, int>> Q;
	Q.push({ y,x });
	while (!Q.empty()) {
		const auto index = Q.front();
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = index.second + dx[i];
			const int yIndex = index.first + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY && array[yIndex][xIndex] != 0 && (S.find({ yIndex, xIndex }) == S.end())) {
				Q.push({ yIndex, xIndex });
				S.insert({ yIndex, xIndex });
			}
		}
	}
	return 0;
}

static void decrease(vector<vector<int>>& array, set<pair<int, int>>& S, int x, int y, int maxX, int maxY) {
	for (int i = 0; i < 4; i++) {
		const auto xIndex = x + dx[i];
		const auto yIndex = y + dy[i];
		if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY && array[yIndex][xIndex] == 0 && (S.find({yIndex, xIndex}) == S.end())) {
			array[y][x]--;
			if (array[y][x] == 0) {
				break;
			}
		}
	}
	return;
}


int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	vector<vector<int>> array;
	int N, M;
	int num;
	cin >> N >> M;
	// 빙하 지도 완성
	for (int i = 0; i < N; i++) {
		vector<int> newArray;
		for (int j = 0; j < M; j++) {
			cin >> num;
			newArray.push_back(num);
		}
		array.push_back(newArray);
	}

	// 두 덩이 되는 연 구하기
	int year = 0;
	while (true) {
		set<pair<int, int>> S;
		// 빙하 2조각 이상인지 확인하기
		int count = 0;
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < M; j++) {
				if (array[i][j] != 0 && S.find({ i,j }) == S.end()) {
					count++;
					BFS(array, S, j, i, M, N);
					if (count > 1) {
						cout << year;
						return 0;
					}
				}
			}
		}
		if (count == 0) {
			cout << 0;
			return 0;
		}
		// 빙하 줄여버리기
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < M; j++) {
				if (array[i][j] == 0) {
					continue;
				}
				else {
					decrease(array, S, j, i, M, N);
				}
			}

		}
		year++;
	}
	return 0;
}