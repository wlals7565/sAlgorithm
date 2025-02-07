#include <iostream>
#include <algorithm>
#include <unordered_set>

int main() {
	std::ios::sync_with_stdio(false);
	std::cin.tie(nullptr);

	int max = 0;
	int index = 0;
	int value;
	for (int i = 0; i < 9; i++) {
		std::cin >> value;
		if (value > max) {
			max = value;
			index = i + 1;
		}
	}
	std::cout << max << "\n";
	std::cout << index;
}
