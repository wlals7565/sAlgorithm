#include <iostream>
#include <algorithm>

using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int x, y, w, h;
	cin >> x >> y >> w >> h;
	int array[4] = { x, y, w - x, h - y };

	sort(&array[0], &array[4]);
	cout << array[0];

	return 0;
}
