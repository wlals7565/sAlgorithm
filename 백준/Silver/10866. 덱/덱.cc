#include <iostream>
#include <cctype>

int main() {
	using namespace std;
	int array[20001] = { 0, };
	int frontIndex = 10000;
	int backIndex = 10000;
	int loopCount;
	cin >> loopCount;
	string command;
	int num;
	for (int i = 0; i < loopCount; i++) {
		cin >> command;
		if (command == "push_front") {
			cin >> num;
			array[++frontIndex] = num;
		}
		else if (command == "push_back") {
			cin >> num;
			array[backIndex--] = num;
		}
		else if (command == "pop_front") {
			if (frontIndex == backIndex) {
				cout << -1 << "\n";
				continue;
			}
			cout << array[frontIndex--] << "\n";
		}
		else if (command == "pop_back") {
			if (frontIndex == backIndex) {
				cout << -1 << "\n";
				continue;
			}
			cout << array[++backIndex] << "\n";
		}
		else if (command == "size") {
			cout << frontIndex - backIndex << "\n";
		}
		else if (command == "empty") {
			cout << (frontIndex == backIndex) << "\n";
		}
		else if (command == "front") {
			if (frontIndex == backIndex) {
				cout << -1 << "\n";
				continue;
			}
			cout << array[frontIndex] << "\n";
		}
		else if (command == "back") {
			if (frontIndex == backIndex) {
				cout << -1 << "\n";
				continue;
			}
			cout << array[backIndex + 1] << "\n";
		}
	}
	return 0;
}
