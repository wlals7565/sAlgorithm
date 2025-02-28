#include <iostream>
#include <deque>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	// index, value
	deque<pair<int, int>> DQ;
	int loopCount;
	int maxSize;
	cin >> loopCount;
	cin >> maxSize;
	int num;
	for (int i = 1; i <= loopCount; i++) {
		cin >> num;
		while (DQ.size() && DQ.back().second > num) {
			DQ.pop_back();
		}
		DQ.push_back({ i, num });
		while (DQ.size() && DQ.front().first < i + 1 - maxSize) {
			DQ.pop_front();
		}
		cout << DQ.front().second << " ";
	}
	return 0;
}
