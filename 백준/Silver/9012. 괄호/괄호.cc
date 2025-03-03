#include <iostream>
#include <stack>
#include <string>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int loopCount;
	cin >> loopCount;
	for (int i = 0; i < loopCount; i++) {
		stack<char> S;
		string str;
		cin >> str;
		for (int j = 0; j < str.size(); j++) {
			char ch = str[j];
			if (ch == '(') {
				S.push(ch);
			}
			else if (ch == ')') {
				if (S.empty() || S.top() != '(') {
					S.push('n');
					break;
				}
				else if (S.top() == '(') {
					S.pop();
				}
			}
		}
		if (S.empty()) {
			cout << "YES\n";
		}
		else {
			cout << "NO\n";
		}
	}
	return 0;
}
