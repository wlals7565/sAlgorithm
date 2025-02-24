#include <iostream>
#include <string>
#include <queue>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	queue<int> Q;

	int num;
	cin >> num;
	for (int i = 1; i <= num; i++) {
		Q.push(i);
	}
	while (Q.size() != 1) {
		Q.pop();
		Q.push(Q.front());
		Q.pop();
	}
	cout << Q.front();
	return 0;
}