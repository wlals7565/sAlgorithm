#include <iostream>
#include <stack>
#include <string>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	string str;
	cin >> str;
	stack<char> S;
	int sum = 0;
	for (int i = 0; i < str.size() - 1;) {
		if (str[i] == '(' && str[i + 1] == ')') {
			sum += S.size();
			i += 2;
		}
		else if (str[i] == '(') {
			S.push('(');
			sum++;
			i++;
		}
		else if (str[i] == ')') {
			S.pop();
			i++;
		}

	}
	cout << sum;
	return 0;
}
