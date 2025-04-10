#include <iostream>
#include <vector>
#include <queue>

using namespace std;

const int dx[4] = { 0,1,0,-1 };
const int dy[4] = { 1,0,-1,0 };

struct State {
	int y, x;       // 현재 위치
	int moves;      // 총 움직인 횟수
	int breaks;     // 남은 벽 부술 수 있는 횟수
	bool isDay;     // 낮인지 여부
};

int BFS(vector<vector<int>>& array, int maxX, int maxY, int crash) {
	// {y, x} {총 움직인 횟수, 벽돌 깰 수 있는 횟수}
	// 아침과 밤은 어떻게 구분하지?
	// 벽 -2는 한 번 부술 수 있는 횟수 남은 상태에서 넘어간거
	// crash -2는 벽 한 번 부 술 수 있는거
	// crash -1은 벽을 부술 수 없는 상태
	queue < State> Q;
	Q.push({ 0,0,1, crash, true});
	array[0][0] = crash + 2;
	while (!Q.empty()) {
		const auto indexX = Q.front().x;
		const auto indexY = Q.front().y;
		const auto moveCount = Q.front().moves;
		const auto crashCount = Q.front().breaks;
		const auto isMorning = Q.front().isDay;
		if (indexX == maxX - 1 && indexY == maxY - 1) {
			return moveCount;
		}
		bool isAdded = false;
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int xIndex = indexX + dx[i];
			const int yIndex = indexY + dy[i];
			if (xIndex >= 0 && yIndex >= 0 && xIndex < maxX && yIndex < maxY) {
				// 지나갈 수 있는 통로인 경우
				if (array[yIndex][xIndex] == 1) {
					Q.push({ yIndex, xIndex, moveCount+1, crashCount, !isMorning });
					array[yIndex][xIndex] = crashCount + 2;
				}
				// 벽은 아니고 이미 지나간 곳인 경우 그리고 벽돌 깰 수 있는 횟수가 더 많을 경우
				else if (array[yIndex][xIndex] > 1 && ((crashCount + 2) >(array[yIndex][xIndex]))) {
					Q.push({ yIndex, xIndex, moveCount + 1, crashCount, !isMorning });
					array[yIndex][xIndex] = crashCount + 2;
				}
				// 벽인 경우 그리고 벽돌 깰 수 있는 횟수가 더 많은 경우 그리고 아침이여야 한다.
				else if(array[yIndex][xIndex] < 0 && ((crashCount*-1-1) < (array[yIndex][xIndex]))) {
					if(isMorning) {
					Q.push({ yIndex, xIndex, moveCount + 1, crashCount-1, !isMorning });
					array[yIndex][xIndex] = crashCount * -1 - 1;
					}
					else {
						if (isAdded) {
							continue;
						}
						Q.push({ indexY, indexX, moveCount + 1, crashCount, !isMorning });
						isAdded = true;
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

	vector<vector<int>> array;

	int N, M, K;
	cin >> N >> M >> K;

	string str;
	//지도 완성
	// 벽을 -1로 저장한다.
	for (int i = 0; i < N; i++) {
		cin >> str;
		vector<int> newArray;
		for (int j = 0; j < str.size(); j++) {
			const char ch = str[j];
			newArray.push_back(atoi(&ch) * -2 + 1);
		}
		array.push_back(newArray);
	}

	cout << BFS(array, M, N, K);
	return 0;
}

