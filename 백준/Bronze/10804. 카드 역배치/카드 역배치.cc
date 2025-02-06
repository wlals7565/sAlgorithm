#include <iostream>
#include <algorithm>
#include <unordered_set>

int main() {
	int arr[20];
	for (int i = 0; i < 20; i++) {
		arr[i] = i + 1;
	}
	int start, end;
	for (int i = 0; i < 10; i++) {
		std::cin >> start >> end;
		start = start - 1;
		std::reverse(&arr[start], &arr[end]);
	}
	for (int i = 0; i < 20; i++) {
		std::cout << arr[i] << " ";
	}
	return 0;
}
