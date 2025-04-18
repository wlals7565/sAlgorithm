#include <iostream>
#include <vector>
#include <queue>

using namespace std;

const int countOfComputers = 10;

int getRightNumber(int num, int power) {
	if (power == 1) {
		return num%10;
	}
	// 이 부분 메모이제이션으로 성능 향상 가능
	// 일단 해보고 성능 부족이면 하기
	int value = getRightNumber(num, power / 2);
	if (power % 2 == 0) {
		value = value * value % countOfComputers;
	}
	else {
		value = value * value * num % countOfComputers;
	}
	return value;
}


int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int T;
	cin >> T;
	for (int i = 0; i < T; i++) {
		int a, b;
		cin >> a >> b;
		if (a % countOfComputers == 0) {
			cout << 10 << "\n";
			continue;
		}
		cout << getRightNumber(a, b) << "\n";
	}

	return 0;
}