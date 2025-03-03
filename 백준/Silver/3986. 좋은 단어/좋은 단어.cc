#include <iostream>
#include <stack>
#include <string>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int loopCount;
	cin >> loopCount;
	int sum = 0;
	for (int i = 0; i < loopCount; i++) {
		stack<char> S;
		string str;
		cin >> str;
		for (int j = 0; j < str.size(); j++) {
			char ch = str[j];
			if (S.empty() || S.top() != ch) {
				S.push(ch);
			}
			else if (S.top() == ch) {
				S.pop();
			}
		}
		if (S.empty()) {
			sum++;
		}
	}
	cout << sum;
	return 0;
}
