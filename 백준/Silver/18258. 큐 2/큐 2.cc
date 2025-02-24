#include <iostream>
#include <string>
#include <queue>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	queue<int> Q;
	int loopCount;
	cin >> loopCount;
	int num = 0;
	string command;
	for (int i = 0; i < loopCount; i++) {
		cin >> command;
		if (command == "push") {
			cin >> num;
			Q.push(num);
		}
		else if (command == "pop") {
			if (Q.empty()) {
				cout << -1 << "\n";
				continue;
			}
			cout << Q.front() << "\n";
			Q.pop();
		}
		else if (command == "size") {
			cout << Q.size() << "\n";
		}
		else if (command == "empty") {
			cout << Q.empty() << "\n";
		}
		else if (command == "front") {
			if (Q.empty()) {
				cout << -1 << "\n";
				continue;
			}
			cout << Q.front() << "\n";
		}
		else if (command == "back") {
			if (Q.empty()) {
				cout << -1 << "\n";
				continue;
			}
			cout << Q.back() << "\n";
		}
	}
	return 0;
}