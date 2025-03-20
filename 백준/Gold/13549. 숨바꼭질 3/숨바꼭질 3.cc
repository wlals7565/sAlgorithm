#include <iostream>
#include <vector>
#include <set>
#include <queue>

using namespace std;
const int dx[4] = { 1,0,-1,0, };
const int dy[4] = { 0,1,0,-1 };

static int BFS() {
	return 0;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int N, K;
	cin >> N >> K;
	if (K <= N) {
		cout << abs(K - N);
		return 0;
	}
	vector<int> array;
	for (int i = 0; i <= K + 1; i++) {
		array.push_back(INT32_MAX);
	}
	queue<pair<int, int>> Q;
	// 위치, 시간
	Q.push({ K,0 });
	while (!Q.empty()) {
		const int index = Q.front().first;
		const int time = Q.front().second;
		Q.pop();
		if (index == 0) {
			continue;
		}
		if (index % 2 != 0) {
			if (index + 1 <= K + 1 && time + 1 < array[index + 1]) {
				Q.push({ index + 1, time + 1 });
				array[index + 1] = time + 1;
			}
			if (index - 1 >= 0 && time + 1 < array[index - 1]) {
				Q.push({ index - 1, time + 1 });
				array[index - 1] = time + 1;
			}
		}
		else {
			if (index > 0 && time < array[index/2]) {
				Q.push({ index / 2, time });
				array[index / 2] = time;
			}
		}
		if ( N/2< index &&index < N*2 && array[N] > abs(N-index) + time ) {
			array[N] =abs(N - index) + time;
		}
	}
	cout << array[N];
	return 0;
}