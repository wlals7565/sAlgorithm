#include <iostream>
#include <set>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	set<long long> S;
	int N;
	cin >> N;
	long long num;
	for (int i = 0; i < N; i++) {
		cin >> num;
		S.insert(num);
	}
	int M;
	cin >> M;
	for (int i = 0; i < M; i++) {
		cin >> num;
		if (S.end() != S.find(num)) {
			cout << 1 << "\n";
		}
		else {
			cout << 0 << "\n";
		}
	}
	return 0;
}