#include <iostream>
#include <vector>
#include <set>
#include <queue>
#include <algorithm>

using namespace std;
const int dx[4] = { 1,0,-1,0 };
const int dy[4] = { 0,1,0,-1 };

int main() {
	// F 합계 층 S 출발 층 G 도착 층 U 위로 몇 층 D 아래로 몇층
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int F, S, G, U, D;
	cin >> F >> S >> G >> U >> D;
	vector<int> array;
	for (int i = 0; i <= F; i++) {
		array.push_back(-1);
	}

	// 층, 필요한 움직임
	queue<pair<int, int>> Q;
	Q.push({ S, 0 });
    array[S] = 0;
	while (!Q.empty()) {
		const auto currentFloor = Q.front();
		if (currentFloor.first == G) {
			break;
		}
		Q.pop();
		if (currentFloor.first + U <= F && array[currentFloor.first + U] == -1) {
			Q.push({ currentFloor.first + U , currentFloor.second + 1 });
			array[currentFloor.first + U] = currentFloor.second + 1;
		}
		if (currentFloor.first - D > 0 && array[currentFloor.first - D] == -1) {
			Q.push({ currentFloor.first - D ,currentFloor.second + 1 });
			array[currentFloor.first - D] = currentFloor.second + 1;
		}
	}

	const auto result = array[G];
	if (result == -1) {
		cout << "use the stairs";
		return 0;
	}
	cout << result;
	return 0;
}