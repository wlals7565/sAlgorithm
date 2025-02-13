#include <iostream>
#include <stack>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);


	string str = "";
	int index = 0;
	
	stack<int> S;
	int N;
	S.push(0);
	cin >> N;
	int totalNumCount = 1;
	int num;
	int oneToN = 1;
	while (totalNumCount <= N) {
		cin >> num;
		while (num > S.top()) {
			S.push(oneToN++);
			str += '+';
		}
		if (num == S.top()) {
			S.pop();
			str += '-';
			totalNumCount++;
		}
		else {
			cout << "NO";
			return 0;
		}
	}
	for (int i = 0; i < str.size(); i++) {
		cout << str[i] << "\n";
	}
	return 0;
}
