#include <iostream>
#include <deque>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int loopCount;
	cin >> loopCount;

	for (int i = 0; i < loopCount; i++) {
		deque<string> DQ;

		string commands;
		cin >> commands;
		int num;
		cin >> num;
		string array;
		cin >> array;
		string strNum = "";
		for (int j = 0; j < array.size(); j++) {
			if (array[j] == '[') {
				continue;
			}
			else if (array[j] == ',' || array[j] == ']') {
				if (strNum == "") continue;
				DQ.push_back(strNum);
				strNum = "";
			}
			else {
				strNum += array[j];
			}
		}

		// 배열 값들을 모두 넣어놨다. DQ에 이제 명령 수행해야 한다.
		bool isReversed = false;
		bool isError = false;
		for (int j = 0; j < commands.size(); j++) {
			if (commands[j] == 'R') {
				isReversed = !isReversed;
			}
			else {
				if (DQ.size() == 0) {
					cout << "error" << "\n";
					isError = true;
					break;
				}
				else if (isReversed) {
					DQ.pop_back();
				}
				else {
					DQ.pop_front();
				}
			}
		}
		if (isError) continue;
		cout << "[";
		while (DQ.size() != 0) {
			if (isReversed) {
				cout << DQ.back();
				DQ.pop_back();
			}
			else {
				cout << DQ.front();
				DQ.pop_front();
			}
			if (DQ.size() == 0) continue;
			cout << ",";
		}
		cout << "]\n";
	}
	return 0;
}
