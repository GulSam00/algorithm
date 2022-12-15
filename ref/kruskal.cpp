#include <algorithm>
#include <vector>
#include <stdio.h>

using namespace std;

int getParent(int parent[], int x)
{
    printf("getParent - %d %d\n", parent[x], x);
    if (parent[x] == x)
        return x;
    return parent[x] = getParent(parent, parent[x]);
}

void unionParent(int parent[], int a, int b)
{
    printf ("a, b : %d %d\n", a, b );
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a < b)
        parent[b] = a;
    else
        parent[a] = b;
}

int findParent(int parent[], int a, int b)
{
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a == b)
        return 1;
    else
        return 0;
}

void printParent(int parent[])
{
    for (int i = 1; i <= 10; i++)
        printf("%d ", parent[i]);
    printf ("\n");
}

class Edge {
    public:
        int node[2];
        int distance;
        Edge(int a, int b, int distance) { // 생성자, 선언시 자동으로 호출해서 실행
            this->node[0] = a;
            this->node[1] = b;
            this->distance = distance;
        }
        bool operator <(Edge &edge) {
            return this->distance < edge.distance;
        }
};

int main(void)
{
    int n = 7;
    int m = 11;

    vector<Edge> v;
    // 노드를 입력할 때 인덱스는 1부터 시작한다.
    
    v.push_back(Edge(1, 7, 12)); 
    v.push_back(Edge(1, 4, 28));
    v.push_back(Edge(1, 2, 67));
    v.push_back(Edge(1, 5, 17));
    v.push_back(Edge(2, 4, 24));
    v.push_back(Edge(2, 5, 62));
    v.push_back(Edge(3, 5, 20));
    v.push_back(Edge(3, 6, 37));
    v.push_back(Edge(4, 7, 13));
    v.push_back(Edge(5, 6, 45));
    v.push_back(Edge(5, 7, 73));
    
    sort(v.begin(), v.end()); // 간선의 비용을 기준으로 오름차순 정리

    int parent[n];
    for (int i = 0; i < n; i++) {
        parent[i] = i;
    }

    int sum = 0;
    for (int i = 0; i < v.size(); i++) {
        // 사이클이 발생하지 않는 경우에만 집합에 포함
        printf ("%d번째 간선 - 노드1 = %d, 노드2 = %d\n", i, v[i].node[0] - 1, v[i].node[1] - 1);
        // 노드의 인덱스가 1부터 시작하므로 배열에서의 인덱스를 0에서 세는 것과 일치하게끔 -1을 해준다.
        if (!findParent(parent, v[i].node[0] - 1, v[i].node[1] - 1)) {
            sum += v[i].distance;
            unionParent(parent, v[i].node[0] - 1, v[i].node[1] - 1);
        }
    }
    printf("%d", sum);

}