#include <iostream>
#include <vector>

using namespace std;

// const vector<int> g_data = {1, 38, 27, 43, 9, 2, 3, 82, 10, 4, 12};
int sorted[8];


void merge(int *a, int first, int middle, int last)
{
    int i = first;
    int j = middle + 1;
    int k = first;

    while (i <= middle && j <= last)
    {
        if (a[i] <= a[j])
        sorted[k++] = a[i++];
        else
        sorted[k++] = a[j++];
    }

    if (i > middle) {
        for (int t = j; t <=last; t++)
            sorted[k++] = a[t];
    }
    else {
        for (int t = i; t <= middle; t++)
            sorted[k++] = a[t];
    }
    for (int t = first; t <= last; t++)
        a[t] = sorted[t];
}

void  mergeSort(int *a, int first, int last) {
    if (first < last) {
        int middle = (first + last) / 2;
        mergeSort(a, first, middle);
        mergeSort(a, middle + 1, last);
        merge(a, first, middle, last);
    }        
}

int main() {
    int array[8] = {7, 6, 11, 8, 3, 5, 9, 1};
    mergeSort(array, 0, 7);
    for (auto loop : sorted)
        cout << loop << endl;

    return 0;
}