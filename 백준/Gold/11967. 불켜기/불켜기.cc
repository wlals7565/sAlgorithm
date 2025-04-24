#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;


const int dx[4] = { 1,0,-1,0 };
const int dy[4] = { 0,1,0,-1 };
// 이것보다 STL이 더 먼저인거 같네


bool isLinked(pair<int, int> index, vector<vector<int>>& array, int max) {
	for (int i = 0; i < 4; i++) {
		const int indexX = index.first + dx[i];
		const int indexY = index.second + dy[i];
		if (indexX >= 0 && indexY >= 0 && indexX < max && indexY < max && array[indexX][indexY] == 1) {
			return true;
		}
	}
	return false;
}

// 인자 1. 지도 2. 스위치 3. x좌표y좌표 최댓값
// 안 한 로직이 있는데
void BFS(vector<vector<int>>& array, map<pair<int, int>, vector<pair<int, int>>>& switchMap,int max) {
	// 0 0 좌표는 늘 불이 켜져 있다. 여기서부터 BFS탐색과 불켜기를 동시에 해야 한다.
	// 순서는 불켜기 부터이다.

	// 지도
	// -1은 불 꺼진 곳
	// 0은 불이 켜진 곳
	// 1은 지나간 곳
	queue<pair<int, int>> q;
	q.push({ 0,0 }); 
	while (!q.empty()) {
		const auto& index = q.front();
		const auto& list = switchMap[index];
		array[index.first][index.second] = 1;
		q.pop();
		vector<pair<int, int>> indexList;
		// 연결이 되어 있다면 큐에 추가해주기
		for (int i = 0; i < list.size(); i++) {
			// 일단 불 켜졌으니 불 키고
			if(array[list[i].first][list[i].second] == -1) array[list[i].first][list[i].second] = 0;
			// 연결 되었으면서 지나가지 않은 곳 큐에 넣어주기
			if (isLinked(list[i], array, max) && array[list[i].first][list[i].second]==0) {
				q.push(list[i]);
			}
		}
		// 큐 돌아주기
		for (int i = 0; i < 4; i++) {
			const int indexX = index.first + dx[i];
			const int indexY = index.second + dy[i];
			if (indexX >= 0 && indexY >= 0 && indexX < max && indexY < max && array[indexX][indexY] == 0) {
				q.push({ indexX, indexY });
				array[indexX][indexY] = 1;
			}
		}
	}
	return;
}




int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	// 지도
	// -1은 불 꺼진 곳
	// 0은 불이 켜진 곳
	// 1은 지나간 곳

	int N, M;
	cin >> N >> M;

	map<pair<int, int>, vector<pair<int, int>>> switchMap;

	// 지도 완성
	vector<vector<int>> array;
	for (int i = 0; i < N; i++) {
		vector<int> newArray;
		for (int j = 0; j < N; j++) {
			newArray.push_back(-1);
		}
		array.push_back(newArray);
	}

	int x, y, a, b ;
	// 스위치 관련 맵 객체 완성
	for (int i = 0; i < M; i++) {
		cin >> x >> y >> a >> b;
		// 일단 해당 좌표로 된 벡터배열이 있는지 확인
		const auto item = switchMap.find({ x - 1,y - 1 });
		// 해당 좌표로 된 벡터배열이 있다.
		if (item != switchMap.end()) {
			auto& list = item->second;
			list.push_back({ a - 1,b - 1 });
		}
		// 해당 좌표로 된 벡터배열이 없다.
		else {
			vector<pair<int, int>> newArray;
			newArray.push_back({ a - 1,b - 1 });
			switchMap[{x - 1, y - 1}] = newArray;
		}
	}

	// 0,0 부터 들어가보자
	BFS(array, switchMap, N);

	// 지도 완성
	int sum = 0;
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			if (array[j][i] >= 0) sum++;
		}
	}
	cout << sum;
	return 0;
}
