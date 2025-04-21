#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int N, M;
	cin >> N >> M;
	vector<vector<int>> array;

	int num;
	for (int i = 0; i < N; i++) {
		vector<int> newArray;
		for (int j = 0; j < M; j++) {
			cin >> num;
			newArray.push_back(num);
		}
		array.push_back(newArray);
	}

	int K;
	cin >> K;
	int x1, y1, x2, y2;
	for (int i = 0; i < K; i++) {
		cin >> y1 >> x1 >> y2 >> x2;
		int sum = 0;
		for (int j = y1 - 1; j <= y2 - 1; j++) {
			// 문제가 좆같은거네
			for (int k = x1 - 1; k <= x2 - 1; k++) {
				sum += array[j][k];
			}

		}
		cout << sum << "\n";
	}

	return 0;
}