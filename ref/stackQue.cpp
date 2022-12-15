#include <iostream>
#include <vector>
#include <stack>
#include <queue>

using namespace std;

int main(void)
{
    stack<int> s;
    queue<int> q;
    int temp;

    s.push(1);
    s.push(2);
    s.push(3);
    q.push(1);
    q.push(2);
    q.push(3);

    cout << "stack : " << s.top() << endl;
    cout << "que : " << q.front() << endl;
    q.pop();
}