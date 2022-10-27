#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

vector<int> Sort(vector<int> array)
{
    int temp, j;
    int length = array.size();
    for (int i = 0; i < length - 1; i++)
    {
        j = i;
        while (array[j] > array[j + 1] && j >= 0)
        {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            j--;
        }
    } 
    return array;
}

int main() {
    int i = 0;
    vector<int> array = {3, 9, 8, 4, 51, 6, 7, 2, 11, 123, 1};
    vector<int> newArray;
    array = Sort(array);
 
    for (auto loop : array)
        std::cout << loop << std::endl;

    return 0;
}