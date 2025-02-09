#include <iostream>
#include <unordered_set>

int main() {
	using namespace std;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int count;
	cin >> count;
	int arr[201] = { 0, };
	int value;
	for (int i = 0; i < count; i++) {
		cin >> value;
		arr[value + 100]++;
	} 
	int search;
	cin >> search;
	cout << arr[search + 100];
	return 0;
}