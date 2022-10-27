#include <iostream>
#include <vector>

using namespace std;

int call_count = 0;
void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

void quickSort(vector<int>& data, int start, int end)
{
    call_count++;
    cout << "call_count : " << call_count << endl;
    cout << "Pivot : " << data[start] << endl;
    cout << "cur" << endl;
    for (auto loop : data)
        cout << loop << " ";
    cout << endl;
    if (start >= end)
    {
        cout << "start >= end" << endl;
        return;
    }
    int pivot = start;  // 기준 값이 위치한 배열의 인덱스
    int i = start + 1; // 피봇 값보다 큰 값을 왼쪽에서부터 찾는다
    int j = end; // 피봇 값보다 작은 값을 오른쪽에서부터 찾는다

    while (i <= j) {
        while (data[i] <= data[pivot])  // 피봇 값보다 큰 값 만날때까지 오른쪽으로 이동
            i++;
        while (data[j] >= data[pivot] && j > start)  // 피봇 값보다 작은 값 만날 때까지 왼쪽으로 이동
            j--;
        if (i > j)  //현재 엇갈린 상태면 pivot 값을 작은 값(j)로 교체
            swap(data[j], data[pivot]);
        else // 아니라면 i, j의 값을 교체
            swap(data[i], data[j]);
        
    }
    cout << "after" << endl;
    for (auto loop : data)
        cout << loop << " ";
    cout << endl;

    // 재귀 호출
    quickSort(data, start, j - 1); // 피봇 기준 왼쪽 부분
    quickSort(data, j + 1, end); // 피봇 기준 오른쪽 부분
}

int main() {
    vector<int> data = {1, 38, 27, 43, 9, 2, 3, 82, 10, 4, 12};
    int len = data.size();
    quickSort(data, 0, len - 1);

    for (auto loop : data)
        cout << loop << endl;

    cout << "call count : " << call_count << endl;
    return 0;
}