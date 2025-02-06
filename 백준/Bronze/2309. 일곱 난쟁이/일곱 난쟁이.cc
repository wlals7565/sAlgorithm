#include <iostream>
#include <algorithm>
#include <unordered_set>

int main() {
	std::unordered_set<int> unordered_set;
	int sum = 0;
	int arr[9] = { 0, };
	for (int i = 0; i < 9; i++) {
		std::cin >> arr[i];
		sum += arr[i];
		unordered_set.insert(arr[i]);
	}
	int diff = sum - 100;
	int A, B;
	for (int i = 0; i < 9; i++) {
		if (unordered_set.find(diff - arr[i]) != unordered_set.end()) {
			A = arr[i];
			B = diff - arr[i];
		}
	}
	std::sort(&arr[0], &arr[8] + 1);
	for (int i = 0; i < 9; i++) {
		if (arr[i] == A || arr[i] == B) {
			continue;
		}
		std::cout << arr[i] << "\n";
	}
	return 0;
}
