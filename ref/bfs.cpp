#include <queue>
#include <vector>
#include <iostream>

using namespace std;

int number;
int c[7];
vector<int> a[8];

void bfs(int start) {
    queue <int> q;
    q.push(start);
    c[start] = true;
    while (!q.empty()) {
        int x = q.front();
        q.pop();
        // cout << x << ' ';
        for (int i = 0; i < a[x].size(); i++) {
            int y = a[x][i];
            cout << "백터 " << x << " 와 연결된 노드 " << y << " - " ;
            if (!c[y]) {
                cout << "방문하지 않은 노드 " << endl;
                q.push(y);
                c[y] = true;
            }
            else 
                cout << "방문한 노드 "<< endl;
        }
    }
}

int main(void)
{
    a[1].push_back(2);
    a[2].push_back(1);

    a[1].push_back(3);
    a[3].push_back(1);

    a[2].push_back(4);
    a[4].push_back(2);

    a[2].push_back(5);
    a[5].push_back(2);

    a[3].push_back(6);
    a[6].push_back(3);

    a[3].push_back(7);
    a[7].push_back(3);

    bfs(1);

}