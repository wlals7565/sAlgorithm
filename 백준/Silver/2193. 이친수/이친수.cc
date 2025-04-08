#include <iostream>
#include <queue>
#include <stack>
#include <map>

using namespace std;

int main() {
	long long array[2][91] = {};
	// 앞자리가 0인 경우 이친수
	array[0][1] = 1;
	// 앞자리가 1인 경우 이친수
	array[1][1] = 1;

	int N;
	cin >> N;
	if (N == 1) {
		cout << 1;
		return 0;
	}
	// 앞자리가 1이면 그 뒤가 0으로 시작하는 이친수의 갯수가 곧 이 값의 이친수의 갯수이다.
	// 앞자리가 0이면 그 뒤가 0으로 시작하거나 1로 시작하는 이친수의 갯수가 곧 이 값의 0 시작 이친수의 갯수이다.
	for (int i = 2; i <= N; i++) {
		array[0][i] = array[1][i - 1] + array[0][i-1];
		array[1][i] = array[0][i - 1];
	}
	cout << array[1][N];
	return 0;
}
