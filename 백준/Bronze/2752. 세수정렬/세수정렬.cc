#include <iostream>
#include <algorithm>

int main() {
	int arr[3];
	std::cin >> arr[0] >> arr[1] >> arr[2];
	std::sort(&arr[0], &arr[2]+1);
	for (int i = 0; i < 3; i++) {
		std::cout << arr[i] << " ";
	}
}