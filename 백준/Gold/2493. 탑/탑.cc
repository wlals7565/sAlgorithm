#include <iostream>
#include <stack>

int main() {
    using namespace std;
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    stack<pair<int, int>> S;  // 배열 대신 pair 사용
    int loopCount;
    cin >> loopCount;

    for (int i = 0; i < loopCount; i++) {
        int num;
        cin >> num;

        while (!S.empty() && S.top().first < num) {
            S.pop();
        }

        if (S.empty()) {
            cout << "0 ";
        }
        else {
            cout << S.top().second << " ";
        }

        S.push({ num, i + 1 });  // 배열 대신 pair 사용
    }

    return 0;
}