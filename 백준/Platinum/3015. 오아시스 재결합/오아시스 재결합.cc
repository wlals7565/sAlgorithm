#include <iostream>
#include <string>
#include <stack>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int loopCount;
	cin >> loopCount;
	long long sum = 0;


	stack<pair<long long, long long>> S;
	long long num;


	for (int i = 0; i < loopCount; i++) {
		cin >> num;
		int count = 1;
		while (!S.empty() && S.top().first <= num) {
			if (S.top().first == num) {
				sum += S.top().second;
				count += S.top().second;
				S.pop();
			}
			else {
				sum += (S.top().second);
				S.pop();
			}
			
		}
		if (!S.empty()) {
			sum += 1;
		}
		auto pair = make_pair(num, count);
		S.push(pair);
	}
	cout << sum;
	return 0;
}