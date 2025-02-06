#include <iostream>
#include <algorithm>

int main() {
	for (int z = 0; z < 3; z++) {
		int arr[4];
		for (int i = 0; i < 4; i++) {
			std::cin >> arr[i];
		}
		int count = 0;
		for (int i = 0; i < 4; i++) {
			count += arr[i];
		}
		if (count == 4) {
			std::cout << "E" << " ";
		}
		else if (count == 0) {
			std::cout << "D" << " ";
		}
		else if (count == 1) {
			std::cout << "C" << " ";
		}
		else if (count == 2) {
			std::cout << "B" << " ";
		}
		else if (count == 3) {
			std::cout << "A" << " ";
		}
		std::cout << "\n";
	}
}
