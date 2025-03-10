#include <iostream>
#include <vector>
#include <queue>
#include <string>
#include <deque>

int main() {
	const int dx[4] = { 1, 0, -1, 0 };
	const int dy[4] = { 0, 1, 0, -1 };

	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	
	int y, x;
	cin >> y >> x;
	string str;
	vector<vector<int>> array;
	queue<pair<pair<int, int>, int>> Q;
	deque<pair<pair<int, int>,int>> tempArray;


	// -1은 벽과 불 지훈이는 1
	for (int i = 0; i < y; i++) {
		vector<int> newArray;
		cin >> str;
		for (int j = 0; j < str.size(); j++) {
			const char ch = str[j];
			if (ch == 'J') {
				if (i == 0 || j == 0 || i == y - 1 || j == x - 1) {
					cout << 1;
					return 0;
				}
				tempArray.push_front({ { i,j },1 });
				newArray.push_back(1);
			}
			else if (ch == 'F') {
				tempArray.push_back({ { i,j },-1 });
				newArray.push_back(-1);
			}
			else if (ch == '#') {
				newArray.push_back(-1);
			}
			else {
				newArray.push_back(0);
			}
		}
		array.push_back(newArray);
	}

	// 지훈이가 먼저 움직이도록
	while (tempArray.size()) {
		Q.push(tempArray.back());
		tempArray.pop_back();
	}

	x--;
	y--;
	while (!Q.empty()) {
		const auto index = Q.front().first;
		const auto length = Q.front().second;
		Q.pop();
		for (int i = 0; i < 4; i++) {
			const int yIndex = index.first + dy[i];
			const int xIndex = index.second + dx[i];
			if (yIndex >= 0 && xIndex >= 0 && yIndex <= y && xIndex <= x) {
				if(array[yIndex][xIndex] == 0) {
					if (length == -1) {
						array[yIndex][xIndex] = length;
					}
					else {
						array[yIndex][xIndex] = length + 1;
					}
					Q.push({ { yIndex, xIndex },array[yIndex][xIndex] });
					if ((yIndex == 0 || xIndex == 0 || yIndex == y || xIndex == x) && array[yIndex][xIndex] != -1) {
						cout << array[yIndex][xIndex];
						return 0;
					}
				}
			}
		}
	}
	cout << "IMPOSSIBLE";
	return 0;
}