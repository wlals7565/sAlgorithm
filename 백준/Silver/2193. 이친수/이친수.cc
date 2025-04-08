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
	// 논리가 안 세워지네 뭔 관계지 
	for (int i = 2; i <= N; i++) {
		array[0][i] = array[1][i - 1] + array[0][i-1];
		array[1][i] = array[0][i - 1];
	}
	cout << array[1][N];
	return 0;
}