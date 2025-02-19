#include <iostream>
#include <string>
#include <stack>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	stack<int> s1;
	stack<int> s2;
	stack<int> s3;

	int loopCount;
	cin >> loopCount;
	int num;
	for (int i = 0; i < loopCount; i++) {
		cin >> num;
		s1.push(num);
	}
	while (s1.size()) {
		while (!s2.empty() && s2.top() <= s1.top()) {
			s2.pop();
		}
		if (s2.empty()) {
			s3.push(-1);
		}
		else {
			s3.push(s2.top());
		}
		s2.push(s1.top());
		s1.pop();
	}
	while (s3.size()) {
		if (s3.size() == 1) {
			cout << s3.top();
			s3.pop();
			continue;
		}
		cout << s3.top() << " ";
		s3.pop();
	}
	return 0;
}