#include <iostream>
#include <queue>
#include <vector>


static int BFS(std::vector<std::vector<int>>& array_2d, int y, int x, int maxY, int maxX) {
	int size = 0;
	std::queue<std::pair<int, int>> Q;
	Q.push({ y,x });
	array_2d[y][x] = 0;
	while (!Q.empty()) {
		std::pair<int, int> index = Q.front();
		Q.pop();
		size++;
		if (index.first > 0) {
			if (array_2d[index.first - 1][index.second]) {
				Q.push({ index.first - 1, index.second });
				array_2d[index.first - 1][index.second] = 0;
			}
		}
		if (index.first < maxY - 1) {
			if (array_2d[index.first + 1][index.second]) {
				Q.push({ index.first + 1, index.second });
				array_2d[index.first + 1][index.second] = 0;
			}
		}
		if (index.second > 0) {
			if (array_2d[index.first][index.second - 1]) {
				Q.push({ index.first, index.second - 1 });
				array_2d[index.first ][index.second - 1] = 0;
			}
		}
		if (index.second < maxX - 1) {
			if (array_2d[index.first][index.second + 1]) {
				Q.push({ index.first, index.second + 1 });
				array_2d[index.first][index.second + 1] = 0;
			}
		}
	}
	return size;
}

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	vector<vector<int>> array_2d;
	int y, x;
	cin >> y >> x;

	//도화지 로드
	int num;
	for (int i = 0; i < y; i++) {
		vector<int> array;
		for (int j = 0; j < x; j++) {
			cin >> num;
			array.push_back(num);
		}
		array_2d.push_back(array);
	}

	// 문제 없음.
	int total = 0;
	int max = 0;
	for (int i = 0; i < y; i++) {
		for (int j = 0; j < x; j++) {
			if (array_2d[i][j] == 1) {
				total++;
				int size = BFS(array_2d, i, j, y, x);
				if (size > max) {
					max=size;
				}
			}
		}
	}
	cout << total << "\n";
	cout << max;
	return 0;
}