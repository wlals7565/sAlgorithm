#include <iostream>
#include <string>

using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	string str;
	getline(cin, str);
	bool isBlank = true;
	int sum = 0;
	for (int i = 0; i < str.size(); i++) {
		if (isBlank && str[i] != ' ') {
			sum++;
			isBlank = false;
		}
		else if (str[i] == ' ') {
			isBlank = true;
		}
	}
	cout << sum;
	return 0;
}
