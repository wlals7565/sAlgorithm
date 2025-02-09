#include <iostream>
#include <unordered_set>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int arr[12] = { 0, };
	int N, K;
	cin >> N;
	cin >> K;
	int S, Y;
	for (int i = 0; i < N; i++) {
		cin >> S >> Y;
		arr[(Y - 1) * 2 + S]++;
	}
	int rooms = 0;
	for (int i = 0; i < 12; i++) {
		rooms += (arr[i] / K);
		if (arr[i] % K != 0) {
			rooms++;
		}
	}
	cout << rooms;
	return 0;
}