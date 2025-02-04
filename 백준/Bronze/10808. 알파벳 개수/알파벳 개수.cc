#include <iostream>

int main() {
	// 알파벳은 총 26자
	// 소문자 a는 ascii로 97번 문자
	int arr[26] = {0, };
	std::string str;
	std::cin >> str;
	for (int i = 0; i < str.length(); i++) {
		int index = str[i] - 97;
		arr[index]++;
	}
	for (int i = 0; i < 26; i++) {
		std::cout << arr[i] << " ";
	}
}