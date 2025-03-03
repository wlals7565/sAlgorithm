#include <iostream>
#include <stack>
#include <string>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	string str;
	stack<char> S;
	getline(cin, str);
	while (str[0] != '.') {
		for (int i = 0; i < str.size(); i++) {
			char ch = str[i];
			if (ch == '(' || ch == '[') {
				S.push(ch);
			}
			else if (ch == ')') {
				if (S.empty()) {
					S.push('n');
					break;
				}
				else if (S.top() == '(') {
					S.pop();
				}
				else if (S.top() != '(') {
					S.push('n');
					break;
				}
			}
			else if (ch == ']') {
				if (S.empty()) {
					S.push('n');
					break;
				}
				else if (S.top() == '[') {
					S.pop();
				}
				else if (S.top() != '[') {
					S.push('n');
					break;
				}
			}
		}
		if (S.empty()) {
			cout << "yes\n";
		}
		else {
			cout << "no\n";
		}
		while (!S.empty()) {
			S.pop();
		}
		getline(cin, str);
	}
	return 0;
}
