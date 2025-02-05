#include <iostream>

int main() {
	int score;
	std::cin >> score;
	if (score >= 90) {
		std::cout << 'A';
		return 0;
	}
	if (score >= 80) {
		std::cout << 'B';
		return 0;
	}
	if (score >= 70) {
		std::cout << 'C';
		return 0;
	}
	if (score >= 60) {
		std::cout << 'D';
		return 0;
	}
	std::cout << 'F';
	return 0;
}