// 17:08 시작
// 18:18 끝
// 치팅 + chatGPT

#include <iostream>
#include <stack>
using namespace std;

char str[31];
stack<char> st;

int main()
{
    cin >> str;
    int i = 0;
    int answer = 0;
    int temp = 1;

    while (str[i])
    {
        char c = str[i++];
        if (c == '(')
        {
            st.push(c);
            temp *= 2;
        }
        else if (c == '[')
        {
            st.push(c);
            temp *= 3;
        }
        else if (c == ')')
        {
            if (st.empty() || st.top() != '(')
            {
                answer = 0;
                break;
            }
            else if (str[i - 2] == '(')
            {
                answer += temp;
            }
            temp /= 2;
            st.pop();
        }
        else if (c == ']')
        {
            if (st.empty() || st.top() != '[')
            {
                answer = 0;
                break;
            }
            else if (str[i - 2] == '[')
            {
                answer += temp;
            }
            temp /= 3;
            st.pop();
        }
        else
        {
            answer = 0;
            break;
        }
    }

    if (!st.empty()) // Check if there are unmatched brackets
        answer = 0;

    cout << answer;
    return 0;
}