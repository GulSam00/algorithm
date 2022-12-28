#include <stdio.h>

int number = 6;
int INF = 1000000000;

int a[6][6] = {
    {0, 2, 5, 1, INF, INF},
    {2, 0, 3, 2, INF, INF},
    {5, 3, 0, 3, 1, 5},
    {1, 2, 3, 0, 1, INF},
    {INF, INF, 1, 1, 0, 2},
    {INF, INF, 5, INF, 2, 0}};

bool visited[6]; // 방문한 노드
int dmin[6]; // 최단 거리

// 선형 탐색, O(n)
int getSmallIndex() {
    int min = INF;
    int index = 0;
    for (int i = 0; i < number; i++) {
        if (dmin[i] < min && !visited[i]) {
            min = dmin[i];
            index = i;
        }
    }
    return index;   
}

// start: 시작 노드
void dijkstra(int start) {
    // 초기화
    for (int i = 0; i < number; i++)
        visited[i] = false;

    for (int i = 0; i < number; i++) {
        dmin[i] = a[start][i]; // dmin 배열을 검색할 시작 노드 배열 포인터로 초기화
    }
    visited[start] = true;
    for (int i = 0; i < number - 2; i++) {
        int current = getSmallIndex(); // 힙 정렬로 개선 가능 - O(log n)
        visited[current] = true;
        for (int j = 0; j < number; j++) {
            if (!visited[j]) {
                if (dmin[current] + a[current][j] < dmin[j]) {
                    dmin[j] = dmin[current] + a[current][j];
                }
            }
        }
    }
}

int main() {
    for (int i = 0; i < number; i++) {
        dijkstra(i);
        for (int j = 0; j < number; j++) 
        printf("%d ", dmin[j]);
        printf ("\n");
    }

}