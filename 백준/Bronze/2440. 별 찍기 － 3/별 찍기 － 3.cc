#include <iostream>
#include <algorithm>
#include <unordered_set>

int main() {
	std::ios::sync_with_stdio(false);
	std::cin.tie(nullptr);

	int count;
	std::cin >> count;
	for (int i = 0; i < count; i++) {
		for (int j = 0; j < count - i; j++) {
			std::cout << "*";
		}
		std::cout << "\n";
	}
}
