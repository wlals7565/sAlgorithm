#include <iostream>
#include <queue>
#include <vector>
#include <set>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int N, K;
	cin >> N >> K;
	set<int> S;
	S.insert(N);
	queue<pair<int, int>> Q;
	Q.push({ N,0 });
	while (!Q.empty()) {
		const auto index = Q.front();
		if (index.first == K) {
			cout << index.second;
			return 0;
		}
		Q.pop();
		if(index.first+1 <= K && S.find(index.first+1) == S.end()){
			Q.push({ index.first + 1, index.second + 1 });
			S.insert(index.first + 1);
		}
		if (index.first * 2 <= K*10 && S.find(index.first * 2) == S.end()) {
			Q.push({ index.first * 2, index.second + 1 });
			S.insert(index.first * 2);
		}
		if (index.first - 1 >= 0 && S.find(index.first - 1) == S.end()) {
			Q.push({ index.first - 1, index.second + 1 });
			S.insert(index.first - 1);
		}
	}
	return 0;
}
