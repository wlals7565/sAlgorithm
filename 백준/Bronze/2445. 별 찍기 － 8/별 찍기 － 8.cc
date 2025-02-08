#include <iostream>
#include <algorithm>
#include <unordered_set>
#include <climits>

int main() {
	std::ios::sync_with_stdio(false);
	std::cin.tie(nullptr);
	using namespace std;
	int count;
	cin >> count;
	for (int i = 0; i < count; i++) {
		for (int j = 0; j < i + 1; j++) {
			cout << "*";
		}
		for (int j = 0; j < count - i - 1; j++) {
			cout << " ";
		}
		for (int j = 0; j < count - i - 1; j++) {
			cout << " ";
		}
		for (int j = 0; j < i + 1; j++) {
			cout << "*";
		}
		cout << "\n";
	}
	for (int i = 0; i < count - 1; i++) {
		for (int j = 0; j < count - i - 1; j++) {
			cout << "*";
		}
		for (int j = 0; j < i + 1; j++) {
			cout << " ";
		}
		for (int j = 0; j < i + 1; j++) {
			cout << " ";
		}
		for (int j = 0; j < count - i - 1; j++) {
			cout << "*";
		}
		cout << "\n";
	}
}
