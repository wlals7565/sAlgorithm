#include <iostream>
#include <vector>

using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int N;
	cin >> N;
	int max = 0;
	int min = INT32_MAX;
	int num;
	for (int i = 0; i < N; i++) {
		cin >> num;
		if (num > max) {
			max = num;
		}
		if (num < min) {
			min = num;
		}
	}
	cout << max * min;

	return 0;
}
