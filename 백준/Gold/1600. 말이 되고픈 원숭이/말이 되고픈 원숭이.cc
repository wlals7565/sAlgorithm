#include <iostream>
#include <vector>
#include <set>
#include <queue>

using namespace std;
const int dx[12] = { 1,0,-1,0, -2,-2,-1,-1,1,1,2,2 };
const int dy[12] = { 0,1,0,-1, 1,-1,2,-2,2,-2,1,-1 };

static int BFS(vector<vector<int>>& array, int horesMove, int maxX, int maxY) {
	// {인덱스}, {총 걸린 시간,말처럼 움직일 수 있는 횟수}
	queue < pair<pair<int, int>, pair<int, int>>> Q;
	// -1은 지나갈 수 없는 곳
	// 양의 정수는 말처럼 움직일 수 있는 횟수보다 클 경우만 지나갈 수 있고.
	Q.push({ { 0,0 }, {0,horesMove} });
	array[0][0] = 1;
	while (!Q.empty()) {
		const auto index = Q.front().first;
		const auto move = Q.front().second;
		if (index.second == maxX - 1 && index.first == maxY - 1) {
			return move.first;
		}
		Q.pop();
		for (int i = 0; i < 12; i++) {
			const int xIndex = dx[i] + index.second;
			const int yIndex = dy[i] + index.first;
			if (i < 4) {
				if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY && array[yIndex][xIndex] != -1) {
					if (array[yIndex][xIndex] == 0) {
						array[yIndex][xIndex] = move.second;
						Q.push({ {yIndex, xIndex}, {move.first + 1,move.second } });
					}
					else {
						if (array[yIndex][xIndex] < move.second) {
							array[yIndex][xIndex] = move.second;
							Q.push({ {yIndex, xIndex}, {move.first + 1,move.second } });
						}
					}
				}
			}
			else {
				if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY && array[yIndex][xIndex] != -1 && move.second > 1) {
					if (array[yIndex][xIndex] == 0) {
						array[yIndex][xIndex] = move.second - 1;
						Q.push({ {yIndex, xIndex}, {move.first + 1,move.second - 1} });
					}
					else {
						if (array[yIndex][xIndex] + 1 < move.second) {
							array[yIndex][xIndex] = move.second - 1;
							Q.push({ {yIndex, xIndex}, {move.first + 1,move.second - 1} });
						}
					}
				}
			}
		}
	}
	return -1;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	// 지도 완성
	int K;
	cin >> K;
	int W, H;
	cin >> W >> H;
	int num;
	vector<vector<int>> array;
	for (int i = 0; i < H; i++) {
		vector<int> newArray;
		for (int j = 0; j < W; j++) {
			cin >> num;
			newArray.push_back(num * -1);
		}
		array.push_back(newArray);
	}

	// 출발
	const int result = BFS(array, K+1, W, H);
	cout << result;
	return 0;
}
