#include <iostream>
#include <stack>
#include <string>

int main() {
    using namespace std;
    ios::sync_with_stdio(false);
    cin.tie(nullptr);  // cin과 cout 동기화 해제 (필수는 아님)

    string str;
    stack<char> S;

    while (true) {
        getline(cin, str);
        if (str == ".") break;  // 입력이 "."이면 종료

        bool isBalanced = true; // 균형 여부 플래그
        for (char ch : str) {
            if (ch == '(' || ch == '[') {
                S.push(ch);
            } 
            else if (ch == ')') {
                if (!S.empty() && S.top() == '(') {
                    S.pop();
                } else {
                    isBalanced = false;
                    break; // 잘못된 경우 즉시 종료
                }
            } 
            else if (ch == ']') {
                if (!S.empty() && S.top() == '[') {
                    S.pop();
                } else {
                    isBalanced = false;
                    break;
                }
            }
        }

        if (!S.empty()) isBalanced = false;  // 스택에 남은 괄호가 있으면 불균형

        cout << (isBalanced ? "yes\n" : "no\n");

        while (!S.empty()) S.pop();  // 스택 비우기
    }

    return 0;
}