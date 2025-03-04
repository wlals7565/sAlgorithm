#include <iostream>
#include <stack>
#include <string>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	// 곱하기와 덧셈을 어떻게 구분할 것인가 이게 최고의 문제다.
	// 1 2 3 4// 2 3은
	stack<char> S; // 이러면 숫자 어디에 저장함?
	stack<int> I;
	
	string str;
	cin >> str;
	
	int result = 0;
	int sum = 1;

	// 스택을 쌓는다.
	for (int i = 0; i < str.size();) {
		// 무조건 쌓는 조건
		if(str[i] == '(' || str[i] == '[') {
			S.push(str[i]);
			i++;
		}
		// 숫자를 쌓아야 하는 조건.
		else if (!S.empty() &&  str[i] == ')' && S.top() == '(') {
			S.pop();
			I.push(sum*2);
			S.push('n');
			sum = 1;
			i++;
		}
		// 숫자를 쌓아야 하는 조건
		else if (!S.empty() && str[i] == ']' && S.top() == '[') {
			S.pop();
			I.push(sum*3);
			S.push('n');
			sum = 1;
			i++;
		}
		// 합을 계산해야 하는 조건
		else if (!S.empty() &&  S.top() == 'n') {
			if (sum == 1) {
				sum = I.top();
			}
			else {
				sum += I.top();
			}
			I.pop();
			S.pop();
		}
		else {
			cout << 0;
			return 0;
		}
	}
	while (!S.empty()) {
		if (S.top() == ')' || S.top() == ']' || S.top() == '(' || S.top() == '[') {
			cout << 0;
			return 0;
		}
		S.pop();
	}
	while (!I.empty()) {
		result += I.top();
		I.pop();
	}
	cout << result;
	return 0;
}
