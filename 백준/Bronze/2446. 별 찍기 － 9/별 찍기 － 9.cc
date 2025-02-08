#include <iostream>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int count;
	cin >> count;
	for (int i = 1; i <= count; i++) {
		for (int j = 1; j < i; j++) {
			cout << " ";
		}
		for (int j = 0; j < (count - i) * 2 + 1; j++) {
			cout << "*";
		}
		cout << "\n";
	}
	for (int i = 0; i < count - 1; i++) {
		for (int j = 1; j < count - i - 1; j++) {
			cout << " ";
		}
		for (int j = 0; j < (i + 1) * 2 + 1; j++) {
			cout << "*";
		}
		cout << "\n";
	}
	return 0;
}