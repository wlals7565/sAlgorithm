#include <iostream>
#include <algorithm>

int main() {
	int arr[7] = { 0, };
	int min = 101;
	int sum = 0;
	for (int i = 0; i < 7; i++) {
		std::cin >> arr[i];
	}
	for (int i = 0; i < 7; i++) {
		if (arr[i] % 2 == 1) {
			sum += arr[i];
			if (min > arr[i]) {
				min = arr[i];
			}
		}
	}
	if (sum == 0) {
		std::cout << -1;
		return 0;
	}
	std::cout << sum << "\n";
	std::cout << min;
	return 0;
}
