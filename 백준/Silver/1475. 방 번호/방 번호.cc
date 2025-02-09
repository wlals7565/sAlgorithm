#include <iostream>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int value;
	cin >> value;
	int arr[10] = { 7, 7, 7,7,7,7,7,7,7,7 };
	arr[6] = 14;
	for (int i = value; i > 0; i /= 10) {
		if (i % 10 == 9) {
			arr[6]--;
			continue;
		}
		arr[i % 10]--;
	}
	int max = 0;
	for (int i = 0; i < 10; i++) {
		if (i == 9) {
			continue;
		}
		if (i == 6) {
			if (max < (15 - arr[i]) / 2) {
				max = (15 - arr[i]) / 2;
			}
			continue;
		}
		if (max < 7 - arr[i]) {
			max = 7 - arr[i];
		}
	}
	cout << max;
	return 0;
}