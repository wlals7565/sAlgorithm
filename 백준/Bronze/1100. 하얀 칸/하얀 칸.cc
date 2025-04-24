#include <iostream>

using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	string str;
	int sum = 0;
	for (int i = 0; i < 8; i++) {
		cin >> str;
		for (int j = 0; j < 8; j++) {
			if ((i%2 == 0 && j % 2 == 1)||(i%2 == 1 && j % 2 == 0)) continue;
			if (str[j] == 'F') sum++;
		}
	}
	cout << sum;
}
