#include <iostream>
#include <vector>
#include <set>
#include <queue>
#include <algorithm>

using namespace std;
const int dx[4] = { 1,0,-1,0, };
const int dy[4] = { 0,1,0,-1 };


// 2는 1만 통과 가능 3은 통과불가능
static int BFS(vector<vector<char>>& array, int maxX, int maxY) {
	queue<vector<int>> Q;
	// x,y,걸린시간,벽 부술 기회
	vector<int> start = { 0,0,1,1 };
	Q.push(start);
	while (!Q.empty()) {
		const auto index = Q.front();
		Q.pop();
		if (index[0] == maxX - 1 && index[1] == maxY - 1) {
			return index[2];
		}
		for (int i = 0; i < 4; i++) {
			const int indexX = index[0] + dx[i];
			const int indexY = index[1] + dy[i];
			if (indexX >= 0 && indexY >= 0 && indexX < maxX && indexY < maxY) {
				// 벽 부술 기회 1번 있던 애가 지나간 곳은 다시 지나갈 이유가 없다.
				if (array[indexY][indexX] == '3') {
					continue;
				}
				// 벽 부술 기회가 0번인 애가 지나간 곳은 다시 지나갈 이유가 있다. 단. 벽 부술 기회가 1번 남았을 경우만 지나가자
				else if (array[indexY][indexX] == '2') {
					if (index[3] == 1) {
						Q.push({ indexX, indexY, index[2] + 1, 1 });
						array[indexY][indexX] = '3';
					}
				}
				// 벽인 곳은 기회가 한번 있을때만 통과시킨다.
				else if (array[indexY][indexX] == '1') {
					if (index[3] == 1) {
						Q.push({ indexX, indexY, index[2] + 1, 0 });
					}
				}
				else {
					Q.push({ indexX, indexY, index[2] + 1, index[3] });
					array[indexY][indexX] = index[3] ? '3' : '2';
				}
			}
		}
	}
	return -1;
}


int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int N, M;
	cin >> N >> M;
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

	int result = BFS(array, M, N);
	cout << result;
	return 0;
}