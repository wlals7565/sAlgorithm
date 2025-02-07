#include <iostream>
#include <algorithm>
#include <unordered_set>

int main() {
	std::ios::sync_with_stdio(false);
	std::cin.tie(nullptr);
	int count;
	int A, B;
	std::cin >> count;
	for (int i = 0; i < count; i++) {
		std::cin >> A >> B;
		std::cout << A + B << "\n";
	}
}
