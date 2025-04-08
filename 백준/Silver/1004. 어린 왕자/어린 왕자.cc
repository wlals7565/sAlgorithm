#include <iostream>
#include <queue>
#include <stack>
#include <map>

using namespace std;

bool isIn(int x, int y, int cx, int cy, int r) {

	return r * r > (cx - x) * (cx - x) + (cy - y) * (cy - y);
}


int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int T;
	cin >> T;
	while (T--) {
		int result = 0;
		int x1, x2, y1, y2;
		cin >> x1 >> y1 >> x2 >> y2;
		int numberOfCount;
		cin >> numberOfCount;
		for (int i = 0; i < numberOfCount; i++) {
			int cx, cy, r;
			cin >> cx >> cy >> r;
			if (isIn(x1, y1, cx, cy, r) ^ isIn(x2, y2, cx, cy, r)) {
				result++;
			}
		}
		cout << result << "\n";
	}
	return 0;
}
