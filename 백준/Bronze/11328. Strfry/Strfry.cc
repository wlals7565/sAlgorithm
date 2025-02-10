#include <iostream>
#include <unordered_set>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int number;
	cin >> number;
	string str1;
	string str2;
	for (int i = 0; i < number; i++) {
		int array[26] = { 0, };
		cin >> str1 >> str2;
		for (int j = 0; j < str1.size(); j++) {
			array[str1[j]-'a']++;
		}
		for (int j = 0; j < str2.size(); j++) {
			array[str2[j]-'a']--;
		}
		bool can = true;
		for (int j = 0; j < 26; j++) {
			if (array[j] != 0) {
				can = false;
				break;
			}
		}
		if (can) {
			cout << "Possible\n";
		}
		else {
			cout << "Impossible\n";
		}
	}
	return 0;
}