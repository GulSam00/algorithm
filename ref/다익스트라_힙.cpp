#include <stdio.h>
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int number = 6;
int INF = 100000000;

vector<pair<int, int>> a[7]; // (노드, 거리)
int dmin[7]; // 최단 거리

void dijkstra(int start) {
    dmin[start] = 0;
    // priority_queue는 내부적으로 max heap, 가장 큰 값이 Top을 유지하도록 구현되어 있음
    priority_queue<pair<int, int>> pq;  
    pq.push(make_pair(start, 0)); 
    while (!pq.empty()) {
        int current = pq.top().first; // 가장 가까운 노드
        int distance = -pq.top().second; // 가장 가까운 노드까지의 거리, 최소 거리여야 하기에 음수로 저장된 것을 다시 되돌리는 과정
        printf("current: %d, distance: %d\n", current, distance);
        pq.pop();
        if (dmin[current] < distance) // 이미 처리된 노드라면 무시
            continue;
        for (int i = 0; i < a[current].size(); i++) {
            int next = a[current][i].first; // 인접 노드
            int nextDistance = distance + a[current][i].second; // 인접 노드까지의 거리
            if (nextDistance < dmin[next]) { // 기존 거리보다 더 짧은 경로가 발견되면
                dmin[next] = nextDistance; // 최단 거리 갱신
                pq.push(make_pair(next, -nextDistance)); // 우선순위 큐에 삽입
            }
        }
    }
}

int main() {
    for (int i = 1; i <= number; i++)
        dmin[i] = INF;

    a[1].push_back(make_pair(2, 2));
    a[1].push_back(make_pair(3, 5));
    a[1].push_back(make_pair(4, 1));
    a[2].push_back(make_pair(1, 2));
    a[2].push_back(make_pair(3, 3));
    a[2].push_back(make_pair(4, 2));
    a[3].push_back(make_pair(1, 5));
    a[3].push_back(make_pair(2, 3));
    a[3].push_back(make_pair(4, 3));
    a[3].push_back(make_pair(5, 1));
    a[3].push_back(make_pair(6, 5));
    a[4].push_back(make_pair(1, 1));
    a[4].push_back(make_pair(2, 2));
    a[4].push_back(make_pair(3, 3));
    a[4].push_back(make_pair(5, 1));
    a[5].push_back(make_pair(3, 1));
    a[5].push_back(make_pair(4, 1));
    a[5].push_back(make_pair(6, 2));
    a[6].push_back(make_pair(3, 5));
    a[6].push_back(make_pair(5, 2));

    dijkstra(1);

    for (int i = 1; i <= number; i++) // 1번에서 모든 노드 간의 최소 거리
        printf("\n%d ", dmin[i]);

    return (0);
}