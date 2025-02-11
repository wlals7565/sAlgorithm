#include <iostream>
#include <unordered_set>
#include <list>

int main() {
    using namespace std;
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    list<char> list;
    string str;
    cin >> str;
    for (int i = 0; i < str.size(); i++) {
        list.push_back(str[i]);
    }

    int loopCount;
    cin >> loopCount;

    char command;
    char ch;
    auto it = list.end();
    for (int i = 0; i < loopCount; i++) {
        cin >> command;

        // $라는 문자를 커서 왼쪽에 추가함
        if (command == 'P') {
            cin >> ch;
            list.insert(it, ch);
        }
        else if (command == 'L' && it != list.begin()) {
            it--;
        }
        else if (command == 'D' && it != list.end()) {
            it++;
        }
        else if (command == 'B' && it != list.begin()) {
            it--;
            it = list.erase(it);
        }
    }

    for (auto character : list) {  // 올바르게 범위 기반 for문 사용
        cout << character;
    }

    return 0;
}
