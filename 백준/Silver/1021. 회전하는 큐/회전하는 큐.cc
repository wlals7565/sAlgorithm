#include <iostream>
#include <deque>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	deque<int> DQ;
	int num;
	cin >> num;
	for (int i = 0; i < num; i++) {
		DQ.push_back(i + 1);
	}
	int loopCount;
	int sum = 0;
	cin >> loopCount;
	for (int i = 0; i < loopCount; i++) {
		cin >> num;
		int count = 0;
		while (DQ.front() != num) {
			DQ.push_back(DQ.front());
			DQ.pop_front();
			count++;
		}
		if (count > DQ.size() / 2) {
			count = DQ.size() - count;
		}
		DQ.pop_front();
		sum+= count;
	}
	cout << sum;
	return 0;
}
