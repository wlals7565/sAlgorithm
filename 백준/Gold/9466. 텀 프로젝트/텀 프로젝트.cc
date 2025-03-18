#include <iostream>
#include <vector>
#include <set>
#include <queue>
#include <algorithm>

using namespace std;
const int dx[4] = { 1,0,-1,0, };
const int dy[4] = { 0,1,0,-1 };

static int BFS(vector<int>& array, int index) {
	set<int> S;
	int start = index;
	S.insert(index);
	int sum = 0;
	// 순환이 있는지 찾는다.
	while (S.find(array[index]) == S.end()) {
		// 이미 지나가면서 판단된 곳을 지나면 더 이상 할 필요가 없다.
		if (array[index] == 0) {
			break;
		}
		if (array[index] == index) {
			array[index] = 0;
			sum++;
			break;
		}
		S.insert(array[index]);
		index = array[index];
	}
	// 4 7 6
	// 순환하면서 순환되는 팀 인원을 센다.
	if (S.find(array[index]) != S.end()) {
		int startOfCircle = index;
		sum++;
		while (array[index] != startOfCircle) {
			int temp = array[index];
			array[index] = 0;
			index = temp;
			sum++;
		}
	}
	// 시작 지점부터 팀 구성이 안된 애들은 0으로 만들어서 순환 불가능 상태 만들어준다.
	while (start != 0) {
		int next = array[start];
		array[start] = 0;
		start = next;
	}
	return sum;
}


int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int T;
	cin >> T;
	for (int i = 0; i < T; i++) {
		int countOfStudent;
		cin >> countOfStudent;
		vector<int>students;
		students.push_back(0);
		int num;
		for (int j = 0; j < countOfStudent; j++) {
			cin >> num;
			students.push_back(num);
		}
		int sum = 0;
		for (int j = 0; j < students.size(); j++) {
			// 자기 참조면 혼자 팀이다.
			if (students[j] == j) {
				students[j] = 0;
				sum++;
			}
			// 이미 지나가서 팀 구성 못하는 애들은 0으로 설정한다.
			else if(students[j]==0) {
				continue;
			}
			// 아직 확인이 안된 애들
			else {
				sum += BFS(students, j);
			}
		}
		cout << countOfStudent+1 - sum << "\n";
	}
	// 처리해보자
	return 0;
}
