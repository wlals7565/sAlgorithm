#include <iostream>
#include <unordered_set>
#include <list>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int loopCount;
	cin >> loopCount;
	for (int i = 0; i < loopCount; i++) {
		list<char> l;
		string str;
		cin >> str;
		auto it = l.end();
		for (int j = 0; j < str.size(); j++) {
			char ch = str[j];
			if (ch == '<') {
				if (it != l.begin()) {
					it--;
				}
			}
			else if (ch == '>') {
				if (it != l.end()) {
					it++;
				}
			}
			else if (ch == '-' ) {
				if (it != l.begin()) {
					it--;
					it = l.erase(it);
				}
			}
			else {
				l.insert(it, ch);
			}
		}
		for (auto character : l) {
			cout << character;
		}
		cout << "\n";
	}
	return 0;
}
