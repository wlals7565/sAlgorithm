#include <iostream>
#include <algorithm>
#include <unordered_set>

int main() {
	long long A, B;
	std::cin >> A >> B;
	if (A == B) {
		std::cout << 0 << "\n";
		return 0;
	}
	if (A > B) {
		long long temp = A;
		A = B;
		B = temp;
	}
	std::cout << B - A - 1 << "\n";
	for (long long i = A + 1; i < B; i++) {
		std::cout << i << " ";
	}
	return 0;
}