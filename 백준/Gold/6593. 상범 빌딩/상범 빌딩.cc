#include <iostream>
#include <vector>
#include <set>
#include <queue>
#include <algorithm>

using namespace std;
const int dx[6] = { 1,0,0,-1,0, 0 };
const int dy[6] = { 0,1,0,0,-1,0 };
const int dz[6] = { 0,0,1,0,0,-1 };



static int BFS(vector<vector<vector<char>>>& array, int x, int y, int z, int maxX, int maxY, int maxZ, int endX, int endY, int endZ) {
	queue<vector<int>> Q;
	vector<int> front = { x,y,z,0 };
	Q.push(front);
	while (!Q.empty()) {
		const auto index = Q.front();
		Q.pop();
		for (int i = 0; i < 6; i++) {
			const int indexX = index[0] + dx[i];
			const int indexY = index[1] + dy[i];
			const int indexZ = index[2] + dz[i];
			if (indexX >= 0 && indexY >= 0 && indexZ >= 0 && indexX < maxX && indexY < maxY && indexZ < maxZ && (array[indexZ][indexY][indexX] == '.' || array[indexZ][indexY][indexX] == 'E')) {
				if (array[indexZ][indexY][indexX] == 'E') {
					return index[3] + 1;
				}
				vector<int> newIndex = { indexX, indexY, indexZ, index[3] + 1 };
				array[indexZ][indexY][indexX] = '#';
				Q.push(newIndex);
			}
		}
	}
	return -1;
}


int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	while (true) {
		int L, R, C;
		cin >> L >> R >> C;
		if (L == 0 && R == 0 && C == 0) {
			break;
		}
		string str;
		vector <vector<vector<char>>> array;

		int startZ, startY, startX;
		int endZ, endY, endX;
		// 3D 빌딩 완성
		for (int i = 0; i < L; i++) {
			vector<vector<char>> newFloor;
			for (int j = 0; j < R; j++) {
				vector<char> newRow;
				cin >> str;
				for (int index = 0; index < str.size(); index++) {
					newRow.push_back(str[index]);
					if (str[index] == 'S') {
						startZ = i;
						startY = j;
						startX = index;
					}
					if (str[index] == 'E') {
						endZ = i;
						endY = j;
						endX = index;
					}
				}
				newFloor.push_back(newRow);
			}
			array.push_back(newFloor);
		}

		int result = BFS(array, startX, startY, startZ, C, R, L, endX, endY, endZ);
		if (result == -1) {
			cout << "Trapped!\n";
		}
		else cout << "Escaped in " << result << " minute(s).\n";
	};
	return 0;
}