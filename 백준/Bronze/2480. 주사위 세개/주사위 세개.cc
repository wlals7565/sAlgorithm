#include <iostream>
#include <algorithm>

int main() {
	int arr[6] = { 0, };
	int dice;
	for (int i = 0; i < 3; i++) {
		std::cin >> dice;
		arr[dice - 1]++;
	}
	int max = 0;
	for (int i = 0; i < 6; i++) {
		if (arr[i] == 3) {
			std::cout << 10000 + (i + 1) * 1000;
			return 0;
		}
		if (arr[i] == 2) {
			std::cout << 1000 + (i + 1) * 100;
			return 0;
		}
		if (arr[i]) {
			max = i + 1;
		}
	}
	std::cout << 100 * max;
	return 0;
}