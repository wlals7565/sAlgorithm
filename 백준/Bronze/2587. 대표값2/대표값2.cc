#include <iostream>
#include <algorithm>

int main() {
	int arr[5] = { 0, };
	for (int i = 0; i < 5; i++) {
		std::cin >> arr[i];
	}
	std::sort(&arr[0], &arr[4] + 1);
	int sum = 0;
	int middleValue = arr[2];
	for (int i = 0; i < 5; i++) {
		sum += arr[i];
	}
	std::cout << sum / 5 << "\n";
	std::cout << middleValue;
	return 0;
}
