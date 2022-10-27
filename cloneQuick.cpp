#include <iostream>
#include <vector>

using namespace std;

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

void quickSort(vector<int> &arr, int start, int end)
{
    if (start >= end)
        return ;
    int pivot = start;
    int i = start + 1;
    int j = end;
    while (i <= j)
    {
        while (arr[i] <= arr[pivot])
            i++;
        while (arr[j] >= arr[pivot] && j > start)
            j--;
        if (i > j)
            swap(arr[j], arr[pivot]);
        else 
            swap(arr[i], arr[j]);

    }
    quickSort(arr, start, j - 1);
    quickSort(arr, j + 1, end);

}

int main(void)
{
    vector<int> arr ={1, 200, 3, 45, 66, 102, 24};
    int length = arr.size();

    quickSort(arr, 0, length - 1);
    for (auto loop : arr)
        cout << loop << endl;

    return 0;
}