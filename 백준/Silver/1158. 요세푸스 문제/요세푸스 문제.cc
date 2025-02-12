#include <iostream>
#include <unordered_set>
#include <list>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int loopCount;
	cin >> loopCount;
	list<int> l;
	for (int i = 0; i < loopCount; i++) {
		l.push_back(i + 1);
	}
	int K;
	cin >> K;
	int count = 1;
	auto it = l.begin();
	cout << "<";
	while (!l.empty()) {
		if (count % K == 0) {
			cout << *it;
			it = l.erase(it);
			count++;
			if (!l.empty()) {
				cout << ", ";
			}
		}
		else {
			it++;
			count++;
		}
		if (it == l.end()) {
			it = l.begin();
		}
	}
	cout << ">";
	return 0;
}
