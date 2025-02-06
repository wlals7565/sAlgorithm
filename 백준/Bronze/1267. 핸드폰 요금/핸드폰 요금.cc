#include <iostream>
#include <algorithm>
#include <unordered_set>

int main() {
	int N = 0;
	std::cin >> N;
	int time;
	int A = 0;
	int B = 0;
	for (int i = 0; i < N; i++) {
		std::cin >> time;
		A += ((time / 30) + 1) * 10;
		B += ((time / 60) + 1) * 15;
	}
	if (A == B) {
		std::cout << "Y" << " " << "M" << " " << A;
		return 0;
	}
	if (A < B) {
		std::cout << "Y" << " " << A;
		return 0;
	}
	std::cout << "M" << " " << B;
	return 0;
}