#include <iostream>
#include <stack>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	stack<int> S;
	int loopCount;
	cin >> loopCount;
	int num;
	for (int i = 0; i < loopCount; i++) {
		cin >> num;
		if (num == 0) {
			S.pop();
		}
		else {
			S.push(num);
		}
	}
	int sum = 0;
	while (!S.empty()) {
		sum += S.top();
		S.pop();
	}
	cout << sum;
	return 0;
}
