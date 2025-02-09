#include <iostream>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int arr[10] = { 0, };
	int A, B, C;
	cin >> A >> B >> C;

	int result = A * B * C;

	for (int i = result; i > 0; i = i / 10) {
		arr[i % 10]++;
	}
	for (int i = 0; i < 10; i++) {
		cout << arr[i] << "\n";
	}
	return 0;
}