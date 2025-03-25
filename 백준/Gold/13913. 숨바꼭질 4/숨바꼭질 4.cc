#include <iostream>
#include <queue>
#include <stack>
#include <map>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int N, K;
	cin >> N >> K;
	map<int, int> M;
	M.insert({ N,0 });
	queue<pair<int, int>> Q;
	Q.push({ N,0 });
	while (!Q.empty()) {
		const auto index = Q.front();
		if (index.first == K) {
			cout << index.second << "\n";
			stack<int> S;
			int start = K;
			S.push(start);
			while (start != N) {
				start = M.find(start)->second;
				S.push(start);
			}
			while (!S.empty()) {
				const int top = S.top();
				cout << top << " ";
				S.pop();
			}
			return 0;
		}
		Q.pop();
		if (index.first + 1 <= K && M.find(index.first + 1) == M.end()) {
			Q.push({ index.first + 1, index.second + 1 });
			M.insert({ index.first + 1, index.first });
		}
		if (index.first * 2 <= K * 10 && M.find(index.first * 2) == M.end()) {
			Q.push({ index.first * 2, index.second + 1 });
			M.insert({ index.first * 2 , index.first});
		}
		if (index.first - 1 >= 0 && M.find(index.first - 1) == M.end()) {
			Q.push({ index.first - 1, index.second + 1 });
			M.insert({ index.first - 1 , index.first});
		}
	}
	return 0;
}
