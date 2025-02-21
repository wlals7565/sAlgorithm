#include <iostream>
#include <string>
#include <stack>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int queue[10000] = { 0, };
	int loopCount;
	cin >> loopCount;
	string command;
	int num;
	int headIndex = -1;
	int tailIndex = -1;
	for (int i = 0; i < loopCount; i++) {
		cin >> command;
		if (command == "push") {
			cin >> num;
			tailIndex++;
			queue[tailIndex] = num;
		}
		else if (command == "pop") {
			if (tailIndex == headIndex) {
				cout << -1 << "\n";
				continue;
			}
			cout << queue[++headIndex] << "\n";
		}
		else if (command == "size") {
			cout << tailIndex - headIndex << "\n";
		}
		else if (command == "empty") {
			cout << (tailIndex == headIndex) << "\n";
		}
		else if (command == "front") {
			if (tailIndex == headIndex) {
				cout << -1 << "\n";
				continue;
			}
			cout << queue[headIndex +1] << "\n";
		}
		else if (command == "back") {
			if (tailIndex == headIndex) {
				cout << -1 << "\n";
				continue;
			}
			cout << queue[tailIndex] << "\n";
		}
	}
	return 0;
}