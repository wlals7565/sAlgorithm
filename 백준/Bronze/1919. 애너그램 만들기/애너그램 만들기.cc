#include <iostream>
#include <unordered_set>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	string str1, str2;
	int array[26] = { 0, };
	cin >> str1 >> str2;
	for (int i = 0; i < str1.size(); i++) {
		array[str1[i] - 'a']++;
	}
	for (int i = 0; i < str2.size(); i++) {
		array[str2[i] - 'a']--;
	}
	int sum = 0;
	for (int i = 0; i < 26; i++) {
		sum += abs(array[i]);
	}
	cout << sum;
	return 0;
}