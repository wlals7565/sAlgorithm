#include <iostream>

int main() {
	int count = 0;
	int N;
	int X;
	std::cin >> N;
	std::cin >> X;
	int number;
	for (int i = 0; i < N; i++) {
		std::cin >> number;
		if (number < X) {
			std::cout << number << " ";
		}
	}
}