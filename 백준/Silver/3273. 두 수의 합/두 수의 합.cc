#include <iostream>
#include <unordered_set>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	unordered_set<int> set;

	int count;
	cin >> count;

	int value;
	for (int i = 0; i < count; i++) {
		cin >> value;
		set.insert(value);
	}
	int result;
	cin >> result;
	int answer = 0;
	for (int num : set) {
		if (set.find(result - num) != set.end()) {
			answer++;
		}
	}
	cout << answer/2;
	return 0;
}