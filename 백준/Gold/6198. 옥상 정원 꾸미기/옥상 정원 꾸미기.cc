#include <iostream>
#include <stack>

int main() {
    using namespace std;
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    stack<long long > S;
    int loopCount;
    cin >> loopCount;
    long long num;
    long long sum = 0;
    for (int i = 0; i < loopCount; i++) {
        cin >> num;
        while (!S.empty() && S.top() <= num) {
            S.pop();
        }
        sum += S.size();
        S.push(num);
    }
    cout << sum;
    return 0;
}