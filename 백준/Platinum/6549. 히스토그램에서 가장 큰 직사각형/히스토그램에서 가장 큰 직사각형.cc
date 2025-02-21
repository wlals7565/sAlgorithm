#include <iostream>
#include <string>
#include <stack>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	stack<pair<long long, long long>> S;


	int loopCount;
	cin >> loopCount;
	int h;
	int width;
	long long max = 0;
	while (loopCount) {
		max = 0;
		for (int i = 0; i < loopCount; i++) {
			cin >> h;
			width = 0;
			while (!S.empty() && h <= S.top().first) {
				long long dimensions = S.top().first * (S.top().second + width);
				if (dimensions > max) {
					max = dimensions;
				}
				width += S.top().second;
				S.pop();
			}
			S.push({ h, width + 1 });
		}
		width = 0;
		while (!S.empty()) {
			long long dimensions = S.top().first * (S.top().second + width);
			if (dimensions > max) {
				max = dimensions;
			}
			width += S.top().second;
			S.pop();
		}
		cout << max << "\n";
		cin >> loopCount;
	}

	return 0;
}