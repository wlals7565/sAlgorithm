#include <iostream>

using namespace std;

int sum = 0;

void func(int des, int val=0) {
	if (val >= des) {
		if (val == des) {
			sum++;
		}
		return;
	}
	func(des, val + 1);
	func(des, val + 2);
	func(des, val + 3);
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int T;
	cin >> T;
	int n;
	for (int i = 0; i < T; i++) {
		cin >> n;
		sum = 0;
		func(n);
		cout << sum << "\n";
	}
	return 0;
}
