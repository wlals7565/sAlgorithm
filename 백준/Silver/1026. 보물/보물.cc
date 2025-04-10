#include <iostream>
#include <queue>
#include <stack>
#include <map>
#include <algorithm>

using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	
	int A[50] = { 0, };
	int B[50] = { 0, };

	int N;
	cin >> N;
	int num;
	for (int i = 0; i < N; i++) {
		cin >> num;
		A[i] = num;
	}
	for (int i = 0; i < N; i++) {
		cin >> num;
		B[i] = num;
	}
	sort(&A[0], &A[N]);

	int total = 0;
	int max;
	int index = 0;
	for (int i = 0; i < N; i++) {
		const int num = A[i];
		max = 0;
		for (int j = 0; j < N; j++) {
			if (max < B[j]) {
				max = B[j];
				index = j;
			}
		}
		B[index] = -1;
		total += max * num;
	}

	cout << total;
	return 0;
}
