#include <iostream>
#include <unordered_set>
#include <list>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int array[10001] = { 0 };
	int index = -1;

	int loopCount;
	cin >> loopCount;
	string command;
	int num;
	for (int i = 0; i < loopCount; i++) {
		cin >> command;
		if (command == "push") {
			cin >> num;
			array[++index] = num;
		}
		else if (command == "top") {
			if (index == -1) {
				cout << -1 << "\n";
				continue;
			}
			cout << array[index] << "\n";
		}
		else if (command == "size") {
			cout << index + 1 << "\n";
		}
		else if (command == "empty") {
			if (index == -1) {
				cout << 1 << "\n";
			}
			else {
				cout << 0 << "\n";
			}
		}
		else if (command == "pop") {
			if (index == -1) {
				cout << -1 << "\n";
				continue;
			}
			cout << array[index--] << "\n";
		}
	}
	return 0;
}
